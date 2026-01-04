(() => {
  "use strict";

  // ---------- helpers ----------
  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const lerp = (a, b, t) => a + (b - a) * t;

  function $(id) {
    const el = document.getElementById(id);
    if (!el) throw new Error(`missing element: ${id}`);
    return el;
  }

  // ---------- UI elements ----------
  const ui = {
    mode: $("mode"),
    btnReset: $("btn-reset"),
    chkNoise: $("chk-noise"),

    sp: $("sp"),
    u: $("u"),
    kp: $("kp"),
    ki: $("ki"),
    kd: $("kd"),
    tau: $("tau"),
    k: $("k"),
    dt: $("dt"),

    spVal: $("sp-val"),
    uVal: $("u-val"),
    kpVal: $("kp-val"),
    kiVal: $("ki-val"),
    kdVal: $("kd-val"),
    tauVal: $("tau-val"),
    kVal: $("k-val"),
    dtVal: $("dt-val"),

    pvRead: $("pv-read"),
    uRead: $("u-read"),
    eRead: $("e-read"),

    canvas: $("plot"),
    llmLog: $("llm-log"),
  };

  const ctx = ui.canvas.getContext("2d");

  // ---------- sim state ----------
  const histN = 640; // matches canvas width for easy mapping
  const pvHist = new Float32Array(histN);
  const spHist = new Float32Array(histN);
  const uHist  = new Float32Array(histN);

  let t = 0;
  let pv = 0.0;     // process value
  let integ = 0.0;  // integral state
  let ePrev = 0.0;  // previous error
  let uOut = 0.0;   // control output 0..1

  // diagnostics for "LLM-like" comments (rule-based)
  let lastCommentAt = -1e9;

  function reset() {
    t = 0;
    pv = 0.0;
    integ = 0.0;
    ePrev = 0.0;
    uOut = 0.0;

    pvHist.fill(0);
    spHist.fill(0);
    uHist.fill(0);

    ui.llmLog.innerHTML = "";
    lastCommentAt = -1e9;
  }

  // ---------- UI sync ----------
  function syncLabels() {
    ui.spVal.textContent = Number(ui.sp.value).toFixed(2);
    ui.uVal.textContent  = Number(ui.u.value).toFixed(2);
    ui.kpVal.textContent = Number(ui.kp.value).toFixed(2);
    ui.kiVal.textContent = Number(ui.ki.value).toFixed(2);
    ui.kdVal.textContent = Number(ui.kd.value).toFixed(2);
    ui.tauVal.textContent= Number(ui.tau.value).toFixed(2);
    ui.kVal.textContent  = Number(ui.k.value).toFixed(2);
    ui.dtVal.textContent = Number(ui.dt.value).toFixed(3);
  }

  function pushLog(msg) {
    const li = document.createElement("li");
    li.textContent = msg;
    ui.llmLog.prepend(li);
    // keep short
    while (ui.llmLog.childElementCount > 8) {
      ui.llmLog.removeChild(ui.llmLog.lastElementChild);
    }
  }

  // ---------- plant + controller ----------
  function step() {
    const mode = ui.mode.value;

    const sp = Number(ui.sp.value);
    const dt = Number(ui.dt.value);
    const tau = Math.max(1e-3, Number(ui.tau.value));
    const K = Number(ui.k.value);

    const kp = Number(ui.kp.value);
    const ki = Number(ui.ki.value);
    const kd = Number(ui.kd.value);

    // measurement noise (optional)
    const noise = ui.chkNoise.checked ? (Math.random() - 0.5) * 0.02 : 0.0;
    const pvMeas = clamp01(pv + noise);

    // error
    const e = sp - pvMeas;

    // FSM behavior
    if (mode === "TRACK") {
      // PID (discrete, with simple anti-windup)
      const de = (e - ePrev) / dt;

      // integrator update (clamped)
      integ += e * dt;
      // anti-windup clamp (rough)
      integ = Math.max(-2.0, Math.min(2.0, integ));

      uOut = kp * e + ki * integ + kd * de;
      uOut = clamp01(uOut);

      ePrev = e;
    } else if (mode === "HOLD") {
      // hold current uOut, but still update ePrev to keep derivative sane when returning
      ePrev = e;
    } else if (mode === "MANUAL") {
      uOut = clamp01(Number(ui.u.value));
      // when manual, avoid integrator runaway
      integ *= 0.98;
      ePrev = e;
    }

    // plant: first order lag
    // pv_dot = ( -pv + K*u ) / tau
    const pvDot = (-pv + K * uOut) / tau;
    pv += pvDot * dt;
    pv = clamp01(pv);

    // record history (shift left by 1)
    for (let i = 0; i < histN - 1; i++) {
      pvHist[i] = pvHist[i + 1];
      spHist[i] = spHist[i + 1];
      uHist[i]  = uHist[i + 1];
    }
    pvHist[histN - 1] = pvMeas;
    spHist[histN - 1] = sp;
    uHist[histN - 1]  = uOut;

    // readings
    ui.pvRead.textContent = pvMeas.toFixed(3);
    ui.uRead.textContent  = uOut.toFixed(3);
    ui.eRead.textContent  = e.toFixed(3);

    // "LLM-like" rules (simple but効く)
    maybeComment(dt, mode, kp, ki, kd);
    t += dt;
  }

  function maybeComment(dt, mode, kp, ki, kd) {
    // analyze last ~1s window
    const windowSec = 1.2;
    const dtNow = Number(ui.dt.value);
    const n = Math.max(10, Math.min(histN, Math.floor(windowSec / dtNow)));

    // compute simple metrics
    let meanE = 0;
    let meanPV = 0;
    for (let i = histN - n; i < histN; i++) {
      meanPV += pvHist[i];
      meanE += (spHist[i] - pvHist[i]);
    }
    meanPV /= n;
    meanE  /= n;

    // oscillation heuristic: count sign changes of derivative
    let flips = 0;
    let prevSign = 0;
    for (let i = histN - n + 2; i < histN; i++) {
      const dv = pvHist[i] - pvHist[i - 1];
      const sign = dv > 1e-4 ? 1 : (dv < -1e-4 ? -1 : 0);
      if (sign !== 0 && prevSign !== 0 && sign !== prevSign) flips++;
      if (sign !== 0) prevSign = sign;
    }

    // comment throttling
    if (t - lastCommentAt < 1.8) return;

    if (mode !== "TRACK") {
      lastCommentAt = t;
      if (mode === "HOLD") pushLog("🤖 HOLD中です。戻すときに一瞬跳ねるなら、Kdを少し増やすと落ち着きます。");
      if (mode === "MANUAL") pushLog("🤖 MANUAL中です。TRACKに戻す前にKiを下げると積分暴走を避けやすいです。");
      return;
    }

    if (flips >= 6) {
      lastCommentAt = t;
      if (kd < 0.05) pushLog("🤖 発振気味です。Kdが小さめに見えます。Kdを少し上げるか、Kiを下げてください。");
      else pushLog("🤖 発振気味です。Kiが強いか、Kpが高すぎる可能性があります。まずKi↓、次にKp↓が安全です。");
      return;
    }

    // steady-state bias -> need integral
    if (Math.abs(meanE) > 0.08 && ki < 0.1) {
      lastCommentAt = t;
      pushLog("🤖 定常偏差が残っています。Kiがほぼ効いていません。Kiを少し上げるとSPに寄ります。");
      return;
    }

    // sluggish response -> raise Kp
    if (Math.abs(meanE) > 0.05 && flips <= 2 && kp < 1.0) {
      lastCommentAt = t;
      pushLog("🤖 反応が鈍めです。Kpが小さいので、Kp↑で追従が良くなります。");
      return;
    }

    // overshoot hint (PV above SP often)
    const spNow = Number(ui.sp.value);
    if (meanPV > spNow + 0.05 && ki > 0.4) {
      lastCommentAt = t;
      pushLog("🤖 オーバーシュート傾向です。Kiが強めなのでKi↓、もしくはKd↑で抑えられます。");
      return;
    }
  }

  // ---------- plotting ----------
  function draw() {
    const w = ui.canvas.width;
    const h = ui.canvas.height;

    // clear
    ctx.clearRect(0, 0, w, h);

    // axes (simple)
    ctx.globalAlpha = 1.0;
    ctx.lineWidth = 1;

    // grid
    ctx.globalAlpha = 0.25;
    for (let y = 0; y <= 10; y++) {
      const yy = (y / 10) * h;
      ctx.beginPath();
      ctx.moveTo(0, yy);
      ctx.lineTo(w, yy);
      ctx.stroke();
    }
    ctx.globalAlpha = 1.0;

    // scale: y=0 at bottom
    const yMap = (v) => (1 - v) * (h - 20) + 10;

    // plot function
    function plotLine(arr) {
      ctx.beginPath();
      ctx.moveTo(0, yMap(arr[0]));
      for (let x = 1; x < histN; x++) {
        ctx.lineTo(x, yMap(arr[x]));
      }
      ctx.stroke();
    }

    // SP (thin)
    ctx.globalAlpha = 0.8;
    ctx.lineWidth = 1;
    plotLine(spHist);

    // PV (thicker)
    ctx.globalAlpha = 1.0;
    ctx.lineWidth = 2;
    plotLine(pvHist);

    // u (mapped to same axis but offset visually)
    // draw u as a lower band (0..1) compressed to bottom 25%
    const yMapU = (u) => lerp(h - 10, h - 90, u);
    ctx.globalAlpha = 0.9;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, yMapU(uHist[0]));
    for (let x = 1; x < histN; x++) ctx.lineTo(x, yMapU(uHist[x]));
    ctx.stroke();

    // legends (monospace)
    ctx.globalAlpha = 1.0;
    ctx.font = "12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";
    ctx.fillText("SP (thin), PV (thick), u (bottom band)", 12, 18);
  }

  // ---------- loop ----------
  function loop() {
    // run multiple sim steps per frame for smoothness
    // (dt is small; this gives stable visual speed)
    for (let i = 0; i < 2; i++) step();
    draw();
    requestAnimationFrame(loop);
  }

  // ---------- init ----------
  function init() {
    // bind events
    [
      ui.sp, ui.u, ui.kp, ui.ki, ui.kd, ui.tau, ui.k, ui.dt, ui.mode, ui.chkNoise
    ].forEach(el => el.addEventListener("input", syncLabels));

    ui.btnReset.addEventListener("click", () => reset());

    syncLabels();
    reset();
    requestAnimationFrame(loop);
  }

  // start when DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();


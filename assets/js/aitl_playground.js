(() => {
  "use strict";

  console.log("[AITL Playground] JS loaded");

  // =========================================================
  // Helpers
  // =========================================================
  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const lerp = (a, b, t) => a + (b - a) * t;

  function $(id) {
    const el = document.getElementById(id);
    if (!el) {
      console.warn(`[AITL Playground] Missing element: ${id}`);
      return null;
    }
    return el;
  }

  // =========================================================
  // Init after DOM ready
  // =========================================================
  function init() {

    // =========================================================
    // UI elements
    // =========================================================
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

    if (!ui.canvas) {
      console.error("[AITL Playground] canvas not found. Abort render loop.");
      return;
    }

    const ctx = ui.canvas.getContext("2d");

    // =========================================================
    // Simulation state
    // =========================================================
    const histN = 640;
    const pvHist = new Float32Array(histN);
    const spHist = new Float32Array(histN);
    const uHist  = new Float32Array(histN);

    let t = 0.0;
    let pv = 0.0;
    let integ = 0.0;
    let ePrev = 0.0;
    let uOut = 0.0;
    let lastCommentAt = -1e9;

    // =========================================================
    // Reset
    // =========================================================
    function reset() {
      t = 0.0;
      pv = 0.0;
      integ = 0.0;
      ePrev = 0.0;
      uOut = 0.0;

      pvHist.fill(0);
      spHist.fill(0);
      uHist.fill(0);

      if (ui.llmLog) ui.llmLog.innerHTML = "";
      lastCommentAt = -1e9;
    }

    // =========================================================
    // UI sync
    // =========================================================
    function syncLabels() {
      if (!ui.sp) return;
      ui.spVal.textContent  = Number(ui.sp.value).toFixed(2);
      ui.uVal.textContent   = Number(ui.u.value).toFixed(2);
      ui.kpVal.textContent  = Number(ui.kp.value).toFixed(2);
      ui.kiVal.textContent  = Number(ui.ki.value).toFixed(2);
      ui.kdVal.textContent  = Number(ui.kd.value).toFixed(2);
      ui.tauVal.textContent = Number(ui.tau.value).toFixed(2);
      ui.kVal.textContent   = Number(ui.k.value).toFixed(2);
      ui.dtVal.textContent  = Number(ui.dt.value).toFixed(3);
    }

    function pushLog(msg) {
      if (!ui.llmLog) return;
      const li = document.createElement("li");
      li.textContent = msg;
      ui.llmLog.prepend(li);
      while (ui.llmLog.childElementCount > 8) {
        ui.llmLog.removeChild(ui.llmLog.lastElementChild);
      }
    }

    // =========================================================
    // Control + Plant
    // =========================================================
    function step() {
      if (!ui.sp) return;

      const mode = ui.mode.value;
      const sp   = Number(ui.sp.value);
      const dt   = Number(ui.dt.value);
      const tau  = Math.max(1e-3, Number(ui.tau.value));
      const K    = Number(ui.k.value);

      const kp = Number(ui.kp.value);
      const ki = Number(ui.ki.value);
      const kd = Number(ui.kd.value);

      const noise = ui.chkNoise.checked ? (Math.random() - 0.5) * 0.02 : 0.0;
      const pvMeas = clamp01(pv + noise);
      const e = sp - pvMeas;

      if (mode === "TRACK") {
        const de = (e - ePrev) / dt;
        integ += e * dt;
        integ = Math.max(-2, Math.min(2, integ));
        uOut = clamp01(kp * e + ki * integ + kd * de);
        ePrev = e;
      } else if (mode === "MANUAL") {
        uOut = clamp01(Number(ui.u.value));
        integ *= 0.98;
        ePrev = e;
      } else {
        ePrev = e;
      }

      pv += ((-pv + K * uOut) / tau) * dt;
      pv = clamp01(pv);

      for (let i = 0; i < histN - 1; i++) {
        pvHist[i] = pvHist[i + 1];
        spHist[i] = spHist[i + 1];
        uHist[i]  = uHist[i + 1];
      }
      pvHist[histN - 1] = pvMeas;
      spHist[histN - 1] = sp;
      uHist[histN - 1]  = uOut;

      ui.pvRead.textContent = pvMeas.toFixed(3);
      ui.uRead.textContent  = uOut.toFixed(3);
      ui.eRead.textContent  = e.toFixed(3);

      t += dt;
    }

    // =========================================================
    // Plot
    // =========================================================
    function draw() {
      const w = ui.canvas.width;
      const h = ui.canvas.height;
      ctx.clearRect(0, 0, w, h);

      const yMap = (v) => (1 - v) * (h - 20) + 10;

      function plot(arr, lw) {
        ctx.lineWidth = lw;
        ctx.beginPath();
        ctx.moveTo(0, yMap(arr[0]));
        for (let i = 1; i < histN; i++) ctx.lineTo(i, yMap(arr[i]));
        ctx.stroke();
      }

      ctx.globalAlpha = 0.6;
      plot(spHist, 1);
      ctx.globalAlpha = 1.0;
      plot(pvHist, 2);

      ctx.font = "12px monospace";
      ctx.fillText("SP (thin) / PV (thick)", 10, 16);
    }

    // =========================================================
    // Loop
    // =========================================================
    function loop() {
      step();
      draw();
      requestAnimationFrame(loop);
    }

    // =========================================================
    // Bind
    // =========================================================
    [
      ui.sp, ui.u, ui.kp, ui.ki, ui.kd,
      ui.tau, ui.k, ui.dt, ui.mode, ui.chkNoise
    ].forEach(el => el && el.addEventListener("input", syncLabels));

    ui.btnReset && ui.btnReset.addEventListener("click", reset);

    syncLabels();
    reset();
    requestAnimationFrame(loop);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();

---
layout: default
title: AITL Control Playground
permalink: /playground/
---

# 🎮 AITL Control Playground (PID × FSM Runtime)

🚀 This playground provides an **interactive exploration of runtime control behavior**  
based on the **PID × FSM core of the AITL architecture**.

🧪 This page is intentionally focused on **runtime execution and supervision only**.  
🧠 **Adaptive learning, design intelligence, or online optimization** are **not** implemented here.

---

## 🔍 Scope and Assumptions

### ⚙️ System Model
- 🏭 **Plant**: 1st-order lag system  
- 🎛 **Controller (runtime)**: Discrete-time PID controller  
- 🧭 **Supervisor (runtime)**: FSM with explicit operating modes  

### 🔄 FSM Modes
- 🎯 **TRACK** — Reference tracking mode  
- ✋ **HOLD** — State holding mode  
- 🕹 **MANUAL** — Manual intervention mode  

---

> 🏗 **Architectural Scope Note**
>
> This playground demonstrates **only the runtime layer of AITL**  
> (**PID × FSM**).
>
> 📝 Any references below to *“diagnostics”*, *“analysis”*, or *“design comments”*  
> represent **offline, design-time interpretation of logged behavior**.
>
> 🚫 No **LLM**, **NN**, or **RL** component participates in  
> **real-time control** on this page.

---

## ▶️ How to Start (Recommended Baseline)

Begin with the following initial gains 👇

- 🎚 **Kp = 2.0**
- ♾ **Ki = 0.6**
- ⚡ **Kd = 0.1**

⚠️ Increasing **Ki** introduces excessive integral action,  
which often leads to 📈 **oscillation** or 💥 **instability**.

🎓 This behavior is **intentional** and illustrates a common  
real-world control failure mode:  
❌ *integral windup and over-integration*.

---

<div id="aitl-ui" style="max-width: 980px; margin: 16px 0; padding: 16px; border: 1px solid #ddd; border-radius: 12px;">
  <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:flex-start;">
    <div style="min-width: 300px; flex: 1;">
      <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
        <label>MODE
          <select id="mode">
            <option value="TRACK">TRACK</option>
            <option value="HOLD">HOLD</option>
            <option value="MANUAL">MANUAL</option>
          </select>
        </label>

        <button id="btn-reset">Reset</button>
        <label style="display:flex; align-items:center; gap:6px;">
          <input type="checkbox" id="chk-noise" />
          Noise
        </label>
      </div>

      <hr style="margin: 12px 0;" />

      <div>
        <label>SP (Setpoint): <span id="sp-val"></span></label><br/>
        <input id="sp" type="range" min="0" max="1" step="0.01" value="0.7" style="width:100%;" />
      </div>

      <div style="margin-top:10px;">
        <label>Manual u (0–1): <span id="u-val"></span></label><br/>
        <input id="u" type="range" min="0" max="1" step="0.01" value="0.2" style="width:100%;" />
      </div>

      <hr style="margin: 12px 0;" />

      <div>
        <label>Kp: <span id="kp-val"></span></label><br/>
        <input id="kp" type="range" min="0" max="10" step="0.01" value="2.0" style="width:100%;" />
      </div>

      <div style="margin-top:10px;">
        <label>Ki: <span id="ki-val"></span></label><br/>
        <input id="ki" type="range" min="0" max="5" step="0.01" value="0.6" style="width:100%;" />
      </div>

      <div style="margin-top:10px;">
        <label>Kd: <span id="kd-val"></span></label><br/>
        <input id="kd" type="range" min="0" max="2" step="0.01" value="0.1" style="width:100%;" />
      </div>

      <hr style="margin: 12px 0;" />

      <details>
        <summary>Plant parameters (1st-order lag)</summary>
        <div style="margin-top:10px;">
          <label>τ (Time constant): <span id="tau-val"></span></label><br/>
          <input id="tau" type="range" min="0.05" max="2.0" step="0.01" value="0.35" style="width:100%;" />
        </div>
        <div style="margin-top:10px;">
          <label>Gain K: <span id="k-val"></span></label><br/>
          <input id="k" type="range" min="0.2" max="3.0" step="0.01" value="1.0" style="width:100%;" />
        </div>
        <div style="margin-top:10px;">
          <label>dt (simulation step): <span id="dt-val"></span></label><br/>
          <input id="dt" type="range" min="0.005" max="0.05" step="0.001" value="0.01" style="width:100%;" />
        </div>
      </details>
    </div>

    <div style="min-width: 420px; flex: 2;">
      <canvas id="plot" width="640" height="360" style="width:100%; border:1px solid #ddd; border-radius:12px;"></canvas>
      <div style="margin-top:8px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; font-size: 12px;">
        <div>PV (Process Value): <span id="pv-read"></span></div>
        <div>u (Control Output): <span id="u-read"></span></div>
        <div>e = SP − PV: <span id="e-read"></span></div>
      </div>

      <details style="margin-top: 10px;">
        <summary>Design-time diagnostic comments (offline, rule-based example)</summary>
        <ul id="llm-log" style="margin-top:8px;"></ul>
      </details>
    </div>
  </div>
</div>

<script src="/assets/js/aitl_playground.js"></script>

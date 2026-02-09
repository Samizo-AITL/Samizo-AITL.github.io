---
layout: default
title: Samizo-AITL Portal
description: A technical archive that presents system design structures from physical quantities to devices, control, and AI in a unified diagram
---

# 🎓 Samizo-AITL Portal
<span style="font-size:1.05em; opacity:0.85;">
Architecture for Integrated Technology Logic
</span>

<div style="margin:1.2em 0 1.6em 0; font-size:1.15em; line-height:1.7;">
From physical quantities (such as V–I), through devices and control, to AI,<br>
<strong>a technical archive that connects system design using a single structural diagram</strong>
</div>

<div style="margin:1.2em 0 0.8em 0;">
  <a href="https://samizo-aitl.github.io/" style="margin-right:12px;">
    <img src="https://img.shields.io/badge/Japanese-Version-blue?logo=github" />
  </a>
  <a href="https://github.com/Samizo-AITL">
    <img src="https://img.shields.io/badge/GitHub-Samizo--AITL-black?logo=github" />
  </a>
</div>

---

## 🧭 Structure Diagram

```mermaid
flowchart TD
    P["Physical Quantities<br>(V–I / Force / Heat)"]
    D["Devices<br>(Semiconductors / MEMS / Mechanisms)"]
    C["Control<br>(PID / FSM)"]
    A["Design Intelligence<br>(AI / LLM)"]
    S["Performance<br>(Stability / Response / Reliability)"]

    P --> D
    D --> C
    C --> S
    C -. Redesign Support .-> A
    A -. Model Update / Re-identification .-> C
```

<div style="margin-top:0.8em; font-size:0.95em; opacity:0.85;">
Articles and demos here each focus on a single element (box) or connection (arrow) in this diagram.
</div>

---

## 📚 Articles

<div style="
  margin: 2.4em 0;
  padding: 2.6em 1.8em;
  text-align: center;
  background: linear-gradient(180deg, rgba(37,99,235,0.10), rgba(30,64,175,0.05));
  border-radius: 22px;
">

<a href="/en/zenn-articles/"
   style="
     display: inline-block;
     padding: 22px 54px;
     font-size: 1.4em;
     font-weight: 900;
     letter-spacing: 0.10em;
     color: #ffffff;
     background: linear-gradient(135deg, #2563eb, #1e40af);
     border-radius: 16px;
     text-decoration: none;
     box-shadow: 0 18px 38px rgba(30,64,175,0.45);
   ">
  ▶ Zenn Articles
</a>

<div style="margin-top:1.4em; font-size:1.05em; line-height:1.7;">
Each article describes a <strong>specific box or arrow</strong><br>
from the structure diagram above.
</div>

</div>

---

## 🧩 Portal (Structural View)

<div style="
  margin: 3.0em 0;
  padding: 2.8em 2.0em;
  border: 2px solid #1e40af;
  border-radius: 22px;
  text-align:center;
">

<a href="/en/portal/"
   style="
     display: inline-block;
     padding: 18px 44px;
     font-size: 1.25em;
     font-weight: 800;
     letter-spacing: 0.08em;
     color: #1e40af;
     background: #ffffff;
     border: 3px solid #1e40af;
     border-radius: 14px;
     text-decoration: none;
   ">
  ▶ Open Portal
</a>

<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px; margin-top:2.0em;">
  <div style="padding:14px; border:1px solid #ddd; border-radius:12px; text-align:center;">
    Overall Structure Map
  </div>
  <div style="padding:14px; border:1px solid #ddd; border-radius:12px; text-align:center;">
    Control Layers (PID / FSM)
  </div>
  <div style="padding:14px; border:1px solid #ddd; border-radius:12px; text-align:center;">
    AI-Integrated Structural Demos
  </div>
</div>

</div>

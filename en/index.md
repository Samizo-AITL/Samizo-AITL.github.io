---
layout: default
title: Samizo-AITL Portal｜Semiconductor, Control, and AI Architecture Archive
description: A personal technical archive organizing semiconductors, control (PID/FSM), and AI design from physical quantities (V–I), navigable through a unified architecture diagram and Portal.
---

# 🎓 Samizo-AITL Portal
> A personal technical archive that organizes semiconductors, control, and AI using a single unified architecture diagram

<div style="margin:1.2em 0; font-size:0.95em;">
  ▶ <a href="/portal/en/">Integrated Architecture Portal</a>　
  ▶ <a href="/zenn-articles/en/">Zenn Articles</a>　
  ▶ <a href="https://github.com/Samizo-AITL">GitHub</a>
</div>

<span style="font-size:1.05em; opacity:0.85;">
Architecture for Integrated Technology Logic
</span>

<div style="margin:1.4em 0 1.8em 0; font-size:1.18em; line-height:1.75;">
From physical quantities (such as V–I), through devices and control, to AI,<br>
<strong>this is a technical architecture archive designed to be understood through a single, consistent structural diagram</strong>
</div>

<div style="margin:1.2em 0 1.0em 0;">
  <a href="https://samizo-aitl.github.io/" style="margin-right:12px;">
    <img src="https://img.shields.io/badge/Japanese-Version-blue?logo=github" />
  </a>
  <a href="https://github.com/Samizo-AITL">
    <img src="https://img.shields.io/badge/GitHub-Samizo--AITL-black?logo=github" />
  </a>
</div>

---

## 🧭 Integrated Architecture Diagram (AITL)

```mermaid
flowchart TD
    P["Physical Quantities<br>(V–I / Force / Heat)"]
    D["Devices<br>(Semiconductor / MEMS / Mechanics)"]
    C["Control<br>(PID / FSM)"]
    A["Design Intelligence<br>(AI / LLM)"]
    S["Performance<br>(Stability / Response / Reliability)"]

    P --> D
    D --> C
    C --> S
    C -. Design Support .-> A
    A -. Model Update & Re-identification .-> C
```

<div style="margin-top:0.9em; font-size:0.95em; opacity:0.85;">
All articles, demos, and the Portal on this site correspond to
<strong>either a box or an arrow (relationship)</strong> in this architecture diagram.
</div>

---

## 📚 Articles (Zenn)

<div style="
  margin: 2.6em 0;
  padding: 2.8em 2.0em;
  text-align: center;
  background: linear-gradient(180deg, rgba(37,99,235,0.12), rgba(30,64,175,0.06));
  border-radius: 22px;
">

<a href="/zenn-articles/en/"
   style="
     display: inline-block;
     padding: 22px 56px;
     font-size: 1.45em;
     font-weight: 900;
     letter-spacing: 0.12em;
     color: #ffffff;
     background: linear-gradient(135deg, #2563eb, #1e40af);
     border-radius: 16px;
     text-decoration: none;
     box-shadow: 0 18px 38px rgba(30,64,175,0.45);
   ">
  ▶ Zenn Article Index
</a>

<div style="margin-top:1.6em; font-size:1.05em; line-height:1.75;">
Each article focuses on<br>
<strong>a specific component (box) or relationship (arrow)</strong><br>
within the integrated architecture diagram above.
</div>

</div>

---

## 🧩 Portal (Structural Navigation)

<div style="
  margin: 3.2em 0;
  padding: 3.0em 2.2em;
  border: 3px solid #1e40af;
  border-radius: 24px;
  text-align:center;
">

<div style="font-size:1.15em; margin-bottom:1.4em;">
The Portal is the <strong>core navigation of Samizo-AITL</strong>.<br>
Starting from the architecture diagram, it allows you to traverse articles, demos, and design perspectives horizontally.
</div>

<a href="/portal/en/"
   style="
     display: inline-block;
     padding: 20px 48px;
     font-size: 1.3em;
     font-weight: 900;
     letter-spacing: 0.10em;
     color: #ffffff;
     background: linear-gradient(135deg, #1e40af, #1e3a8a);
     border-radius: 16px;
     text-decoration: none;
     box-shadow: 0 16px 32px rgba(30,64,175,0.40);
   ">
  ▶ Open Integrated Architecture Portal
</a>

<div style="
  margin-top:2.6em;
  max-width:720px;
  margin-left:auto;
  margin-right:auto;
  text-align:left;
  color:#374151;
">

  <div style="margin-bottom:1.2em;">
    <strong>Global Architecture Map</strong><br>
    <span style="font-size:0.92em; opacity:0.75;">
      A bird’s-eye view of the entire structure from physical quantities (V–I) to AI
    </span>
  </div>

  <div style="margin-bottom:1.2em;">
    <strong>Control Hierarchy (PID / FSM)</strong><br>
    <span style="font-size:0.92em; opacity:0.75;">
      Organization and positioning of models and control structures
    </span>
  </div>

  <div>
    <strong>AI Integration & Structural Demos</strong><br>
    <span style="font-size:0.92em; opacity:0.75;">
      How redesign and intelligence are embedded within the architecture
    </span>
  </div>

</div>

</div>

---

## 🧩 Introductory Articles for Beginners (Qiita Articles)

These articles provide step-by-step explanations of the site’s architecture with reduced use of formulas and technical terminology.

<div style="
  margin: 1.4em 0;
  padding: 1.6em 1.8em;
  border: 2px solid #2563eb;
  border-radius: 18px;
  background: rgba(37,99,235,0.08);
  max-width: 640px;
">

<a href="https://samizo-aitl.github.io/qiita-articles/en/"
   style="
     display:inline-block;
     padding:14px 30px;
     border-radius:14px;
     background:#2563eb;
     color:#ffffff;
     font-weight:900;
     text-decoration:none;
     box-shadow:0 10px 22px rgba(37,99,235,0.45);
   ">
  ▶ Open Article List
</a>

</div>

---

# 🕘 Update Log

[📄 View update history](https://samizo-aitl.github.io/about/update/en/)

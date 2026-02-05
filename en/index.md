---
layout: default
title: Samizo-AITL Portal
description: Architecture for Integrated Technology Logic — a physical-first engineering archive
---

# 🎓 Samizo-AITL Portal
<span style="font-size:1.05em; opacity:0.85;">
Architecture for Integrated Technology Logic
</span>

<div style="margin-top:0.6em; font-size:1.15em; line-height:1.7;">
<strong>A physical-first engineering archive</strong><br>
that integrates <strong>physics, devices, control, and intelligence</strong><br>
as an explicit <strong>causal structure</strong>.
</div>

<div style="margin:1.2em 0 0.8em 0;">
  <a href="https://samizo-aitl.github.io/" style="margin-right:12px;">
    <img src="https://img.shields.io/badge/Japanese-Version-brightgreen?logo=github" />
  </a>
  <a href="https://github.com/Samizo-AITL">
    <img src="https://img.shields.io/badge/GitHub-Samizo--AITL-black?logo=github" />
  </a>
</div>

---

## 🧭 What is AITL?

**AITL (Architecture for Integrated Technology Logic)** is a framework for organizing  
engineering knowledge as **causal relationships**:

<div style="font-size:1.15em; font-weight:800; margin:1.2em 0;">
Physical quantities → Devices → Control → Intelligence → Performance
</div>

Rather than presenting isolated methods or tools,  
AITL focuses on **how design decisions emerge from physical constraints**  
and how those decisions propagate through control and system architecture.

```mermaid
flowchart TD
    P["Physical quantities<br>(V–I / force / heat)"]
    D["Devices<br>(semiconductors / MEMS / mechanisms)"]
    C["Control<br>(PID / FSM)"]
    A["Design intelligence<br>(AI / LLM)"]
    S["Performance<br>(stability / reliability)"]

    P --> D
    D --> C
    C --> S
    C -. redesign support .-> A
    A -. model update / re-identification .-> C
```

---

## ▶ Step 1 — Read the design philosophy

<div style="
  margin: 2.8em 0 3.2em 0;
  padding: 2.6em 1.8em;
  text-align: center;
  background: linear-gradient(180deg, rgba(37,99,235,0.10), rgba(30,64,175,0.05));
  border-radius: 22px;
">

<div style="font-size:1.3em; font-weight:900; margin-bottom:1.2em;">
Understand the design rationale and causal thinking
</div>

<a href="/zenn-articles/en/"
   style="
     display: inline-block;
     padding: 22px 54px;
     font-size: 1.45em;
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
Design philosophy, causal structure, and decision criteria of AITL<br>
are documented <strong>as long-form articles on Zenn</strong>.
</div>

</div>

---

## ▶ Step 2 — Experience the structure visually

<div style="
  margin: 3.2em 0;
  padding: 2.8em 2.0em;
  background: linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.00));
  border: 2px solid #1e40af;
  border-radius: 22px;
">

<div style="text-align:center; font-size:1.4em; font-weight:900; margin-bottom:0.6em;">
Portal — Visual Architecture Archive
</div>

<div style="text-align:center; font-size:1.05em; line-height:1.7; margin-bottom:1.8em;">
Explore the overall structure, causal layers, and design boundaries of AITL<br>
through <strong>diagrams, animations, and interactive demos</strong>.
</div>

<div style="text-align:center; margin-bottom:2.0em;">
  <a href="/portal/en/"
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
    ▶ Open the Portal
  </a>
</div>

<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px;">
  <div style="padding:14px; border:1px solid #ddd; border-radius:12px; text-align:center;">
    System-level architecture diagrams
  </div>
  <div style="padding:14px; border:1px solid #ddd; border-radius:12px; text-align:center;">
    Control hierarchy (PID × FSM × AI)
  </div>
  <div style="padding:14px; border:1px solid #ddd; border-radius:12px; text-align:center;">
    Animations and demos
  </div>
</div>

</div>

---

## 🔐 Positioning (SSOT)

The Samizo-AITL Portal is **not intended as a simplified tutorial site**.

It serves as my personal  
<strong>Single Source of Truth (SSOT)</strong> —  
an archive that preserves design assumptions, reasoning processes,  
and causal structures without abstraction or simplification.

Readability is secondary to **architectural transparency**.

---

## 👤 Intended audience

- Engineers working with physics-based systems  
  (semiconductors, MEMS, control, AI)
- Readers interested in **design rationale and causal explanation**
- Those organizing engineering knowledge across multiple domains

---

> **AITL is not a control method.**  
> **It is a structure for explaining and evolving design.**

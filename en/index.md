---
layout: default
title: Samizo-AITL Portal
description: An integrated portal presenting a physical-first architecture for semiconductor devices, MEMS, control, and intelligent systems
---

# 🎓 Samizo-AITL Portal  
> **Connecting physics, devices, control, and intelligence in a single coherent structure**  
> *A design-oriented technical archive for engineering systems.*

[![GitHub](https://img.shields.io/badge/GitHub-Samizo--AITL-black?logo=github)](https://github.com/Samizo-AITL)

## 🌐 Language
[![Japanese Version](https://img.shields.io/badge/Japanese-Version-brightgreen?logo=github)](https://samizo-aitl.github.io/)
[![English Version](https://img.shields.io/badge/English-Version-blue?logo=github)](https://samizo-aitl.github.io/en/)

---

## 🧭 What is Samizo-AITL?

The **Samizo-AITL Portal**, created by **Shinichi Samizo**, is a  
**design-oriented technical archive** that reorganizes semiconductor devices, MEMS, and control engineering  
around a **shared physical foundation**.

The purpose of this portal is not to explain individual technologies in isolation,  
but to present engineering systems through a **consistent causal structure**:

**Physics → Structure → Devices → Process → Models → Systems → Control → Intelligence**

This structure allows readers to **reconstruct engineering decisions**  
without breaking physical or causal consistency.

---

## 🎯 Intended Audience

Samizo-AITL is intended for engineers and researchers who:

- Design systems **starting from physical models and constraints**
- Use AI / LLMs as **supervisory, analytical, or redesign layers**, not as black-box controllers
- Seek **cross-disciplinary understanding without collapsing causality**

This portal is **not an introductory tutorial**.  
It is a **structural reference for design-oriented engineering work**.

---

## 🧠 Positioning of Intelligence (AITL)

AI, control theory, and LLM-based technologies are **not treated as standalone solutions**.

In this portal, they are positioned as:

> **The outermost layer that enables full and correct utilization of physical models.**

The system architecture is viewed as a **layered structure**:

- **Inner layers**: Physics, devices, MEMS (constraint-defining layers)  
- **Middle layers**: System modeling and classical control theory  
- **Outer layers**: Intelligence, adaptation, and redesign  

This layered concept is referred to as  
**AITL — Adaptive Intelligent Technology Loop**.

LLMs are explicitly placed **outside the real-time control loop**,  
serving as tools for supervision, diagnosis, and redesign.

---

## 🗺 How to Read This Portal

The portal is designed to be explored in the following order:

1. **Design philosophy and architecture**  
   → Physical-first engineering and AITL structure  
2. **Main Core (physical foundations)**  
   → Semiconductor devices, MEMS, and physical constraints  
3. **Applied Layer (control and intelligence)**  
   → Roles of PID, FSM, and LLMs  
4. **Proof-of-concept implementations**  
   → Verification through working systems

Readers are encouraged to follow the flow:

**Philosophy → Physics → Control → Intelligence**

to avoid tool-driven or fragmented understanding.

---

# 💠 Main Core — Foundational Repositories
The Main Core forms a **coherent technical backbone**  
covering semiconductor technology from physics to system-level constraints.

---

## 1️⃣ Edusemi-v4x
A **systematic curriculum** covering semiconductor devices and processes:

- Device structures and operating physics  
- Process integration flows  
- Compact models and PDK concepts  
- Circuit-level fundamentals  
- SystemDK-based physical constraints  
  (thermal, stress, SI/PI, EMI)

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/Edusemi-v4x/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/Edusemi-v4x)

---

## 2️⃣ SemiDevKit
An **implementation-oriented development kit** bridging theory and practice:

- Poisson / Drift–Diffusion solvers  
- BSIM4 compact modeling  
- SPICE simulation  
- NBTI / HCI reliability analysis  
- Physical layout using OpenLane-Lite  

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/SemiDevKit/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/SemiDevKit)

---

## 3️⃣ Edusemi-Plus
Extended materials connecting semiconductor fundamentals with surrounding domains:

- Advanced materials (SiC, GaN)  
- Manufacturing equipment and fabs  
- Packaging and system integration  
- Supply chains and industrial structures  

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/Edusemi-Plus/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/Edusemi-Plus)

---

# 🎛 Applied Layer — Control & Intelligence

This layer explores how physical foundations are applied to  
**dynamic systems and control problems**.

Classical control (PID, FSM) remains the **primary control mechanism**,  
while AI/LLMs are treated as **architectural support tools**, not replacements.

---

## 4️⃣ EduController
An educational resource focused on **control fundamentals**:

- PID control principles  
- FSM-based supervisory logic  
- Control-oriented design thinking  
- Optional HDL template generation  

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/EduController/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/EduController)

---

## 5️⃣ AITL-Controller-A-Type
A **minimal experimental controller** implemented in Python to explore:

- Separation of control (PID)  
- Supervision and decision logic (FSM)  
- Redesign and analysis support (LLM)

This project is a **thinking framework**,  
not a proposal for a new control algorithm.

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/aitl-controller-a-type/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/aitl-controller-a-type)

---

## 6️⃣ V–I Control ASIC on SKY130
A **hands-on educational control ASIC** demonstrating a complete flow from  
**control theory to silicon** using **PID + FSM**.

- Deterministic digital V–I control  
- Fixed-point PID with explicit saturation  
- FSM-based safety supervision  
- Full RTL → GDS flow on OpenLane + SKY130  

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/vi-control-asic-sky130/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/vi-control-asic-sky130)

---

# ⚙️ MEMS — Where Abstraction Meets Reality

A boundary domain where  
**abstract models are tested against real physical structures**.

---

## 7️⃣ mems-ana
**Pre-FEM MEMS structural exploration tool**

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/mems-ana/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/mems-ana)

---

## 8️⃣ Inkjet Printing — Design Trade-off Models
Minimal models visualizing trade-offs between:

- Print quality  
- Throughput  
- Dot behavior  

through **simple Python simulations**.

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/inkjet-dts/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/inkjet-dts)

---

# 👤 Author

**Shinichi Samizo**  
Independent Semiconductor Researcher  

- GitHub: [https://github.com/Samizo-AITL](https://github.com/Samizo-AITL)
- Career Summary: [https://samizo-aitl.github.io/about/career-summary/en/](https://samizo-aitl.github.io/about/career-summary/en/)

---

> **Samizo-AITL is not a tutorial site.  
> It is a published structural archive for physical-first engineering design.**

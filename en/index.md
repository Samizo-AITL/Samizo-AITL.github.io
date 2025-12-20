---
layout: default
title: Samizo-AITL Portal (EN)
description: A structured portal for understanding the full landscape of semiconductor device technology
---

# 🎓 Samizo-AITL Portal  
> **“A structured portal for understanding the full landscape of semiconductor device technology.”**  
> *「半導体デバイス技術の全体像を構造的に示す」*

[![GitHub](https://img.shields.io/badge/GitHub-Samizo--AITL-black?logo=github)](https://github.com/Samizo-AITL)

## 🌐 Language
[![Japanese Version](https://img.shields.io/badge/Japanese-Version-brightgreen?logo=github)](https://samizo-aitl.github.io/)
[![English Version](https://img.shields.io/badge/English-Version-blue?logo=github)](https://samizo-aitl.github.io/en/)

---

The **Samizo-AITL Portal** is an integrated educational platform created by **Shinichi Samizo**,  
designed to provide a **structured and realistic understanding of semiconductor device technology**.

The primary focus of this portal is **semiconductor devices themselves**—  
their physical structures, operating principles, manufacturing processes, compact models,  
circuit integration, reliability, and industrial ecosystems.

AI, control theory, and LLM-related topics are treated as **secondary, applied concepts**,  
introduced only where they help organize design thinking or extend existing engineering workflows.

---

# 💠 Main Core (Foundational Repositories)
The core repositories form a **complete conceptual map of semiconductor device technology**,  
from physics to manufacturing and system-level constraints.

---

## 1️⃣ Edusemi-v4x
A **systematic curriculum** covering semiconductor devices and processes, including:

- Device structures and operating physics  
- Process integration flows  
- Compact models and PDK concepts  
- Circuit-level fundamentals  
- SystemDK-based physical constraints  
  (thermal, stress, SI/PI, EMI)

This repository serves as the **primary backbone** of the portal.

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/Edusemi-v4x/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/Edusemi-v4x)

---

## 2️⃣ SemiDevKit
An **implementation-oriented device development kit** that bridges theory and practice:

- Poisson / Drift–Diffusion solvers  
- BSIM4 compact modeling  
- SPICE simulation  
- NBTI / HCI reliability analysis  
- Physical layout using OpenLane-Lite  

This kit emphasizes **how physical models become real circuits**.

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/SemiDevKit/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/SemiDevKit)

---

## 3️⃣ Edusemi-Plus
Extended materials connecting semiconductor fundamentals with surrounding domains:

- Advanced materials (SiC, GaN, etc.)  
- Packaging and PCB considerations  
- Manufacturing equipment and fabs  
- Supply chains and industrial structures  

This repository **extends** the core technical framework without replacing it.

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/Edusemi-Plus/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/Edusemi-Plus)

---

# 🎛️ Applied Layer (Control & AI – Applied Concepts)
This layer explores how the semiconductor foundation can be applied to  
**dynamic systems and control problems**, while respecting established engineering practices.

Conventional control theory (PID, FSM) remains the **primary method**,  
with AI/LLM treated as **design and analysis aids**, not replacements.

---

## 4️⃣ EduController
An educational resource focused on **control fundamentals**, including:

- PID control principles  
- FSM-based supervisory logic  
- Control-oriented design thinking  
- Optional HDL template generation for SoC contexts  

The goal is **conceptual clarity**, not proposing new control paradigms.

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/EduController/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/EduController)

---

## 5️⃣ AITL-Controller-A-Type
A **minimal experimental controller** implemented in Python,  
used to explore a three-layer separation:

- Control (PID)  
- Decision / supervision (FSM)  
- Design assistance (LLM)

This project is **not intended as a production-ready control solution**,  
but as a **thinking framework** for separating control, judgment, and redesign.

Beyond a mere conceptual demonstration,
this project aims to evaluate the relationship between control architecture and reliability
through system behavior under conditions involving degradation and uncertainty.

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/aitl-controller-a-type/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/aitl-controller-a-type)

---

## 6️⃣ V-I Control ASIC on SKY130
A **hands-on educational control ASIC** demonstrating a complete flow from
**control theory to silicon**, using **PID + FSM** and a **digital-only RTL → GDS**
implementation on **OpenLane + SKY130**.

Key characteristics:

- Voltage–Current (V–I) based digital control
- Fixed-point PID implementation with explicit saturation
- FSM-based safety supervision
- PWM generation
- Full open-source RTL-to-GDS flow

This repository highlights the **fundamental differences between MCU-based control
and ASIC-based deterministic control**, with clarity and reproducibility as primary goals.

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/vi-control-asic-sky130/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/vi-control-asic-sky130)

---

# ⚙️ MEMS (Bringing Abstraction Back to Physics)

A boundary domain where  
**abstract models learned in semiconductors and control  
are tested against real physical structures**.

- Voltage → stress → displacement
- The structure itself becomes a modeling constraint
- The limits of abstraction are immediately exposed

---

## 7️⃣ mems-ana
**MEMS structural analysis tool (pre-FEM design exploration)**

A lightweight **pre-FEM shape sanity check tool**  
for validating geometry, symmetry, and scaling  
before full FEM analysis.

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/mems-ana/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/mems-ana)

---

# 📝 Technical Notes (Zenn)

Design concepts, technical background, and intermediate design considerations are documented on Zenn.  
This serves as supplementary material explaining the *why* behind the educational content and implementations.

- 🔗 [Zenn: Shinichi Samizo](https://zenn.dev/samizo_aitl)

---

# 📚 Supplementary Layer (Experiments & Supporting Materials)
Repositories that support, extend, or experimentally explore ideas introduced in the core and applied layers.

| Project | Description | Link |
|--------|-------------|------|
| **EduMecha** | Mechanical design exercises using Creo | [![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/EduMecha/) |
| **Inkjet** | Thin-film piezo actuator structures and analysis | [![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/Inkjet/) |
| **EduLms** | Learning management materials for ISO-based quality and environmental education | [![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/EduLms/) |
| **SamizoGPT** | Prompt design and AI usage frameworks | [![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/SamizoGPT/) |
| **SemiTechBot** | Semiconductor-focused Q&A chatbot | [![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/SamizoGPT_SemiTechBot/) |
| **Rekiden** | History × AI simulation materials | [![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/Rekiden/) |
| **AssetPortfolio** | Investment guide for engineers (ETF / NISA) | [![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/AssetPortfolio-StartGuide/) |
| **AITL-H** | Discontinued design study of a three-layer (PID × FSM × LLM) architecture; preserved as an architectural and educational archive | [![Archive](https://img.shields.io/badge/View-Archive-lightgrey?logo=github)](https://samizo-aitl.github.io/AITL-H/) |

---

# 👤 Author

| Item | Details |
|------|---------|
| **Name** | Shinichi Samizo |
| **Title** | Independent Semiconductor Researcher |
| **Links** | [Email](mailto:shin3t72@gmail.com) · [X](https://x.com/shin3t72) · [GitHub](https://github.com/Samizo-AITL) |

[📄 Career Summary](https://samizo-aitl.github.io/about/career-summary/en/)

---

# 🕘 Update Log
[📄 View Update Log](https://samizo-aitl.github.io/about/update/en/)

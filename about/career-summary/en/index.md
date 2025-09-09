---
layout: default
title: "Career Summary"
description: "Cross-disciplinary career summary in semiconductors, control, inkjet, and education"
---

---

# 🛠️ Career Summary

[![Back to Samizo-AITL Portal](https://img.shields.io/badge/Back%20to-Samizo--AITL%20Portal-brightgreen)](https://samizo-aitl.github.io/)

Shinichi Samizo is an engineer who has continuously deepened his expertise from  
**control theory & electromagnetic analysis**, through **semiconductor device development**  
and **PZT actuators**, to the **commercialization of PrecisionCore printheads**—  
evolving from **technology → systems → education**.

---

## 📘 Career Phases

### 🔹 Phase 0｜Control Design & Electromagnetic Analysis (1994–1997)
- Experienced **control design using MATLAB / Simulink** as an undergraduate.  
  [Related Material › Digital H∞ Control](https://samizo-aitl.github.io/EduController/part04_digital/theory/06_digital_hinf_control.html)

- Graduate research in electromagnetic field analysis.  
  **Episode: Thin-Film Microreactor Analysis (1996–1997)**  
  Analyzed DC-DC converter reactors using ferrite-based magnetic materials and Al spiral coil structures.  
  Presented guidelines for Q-factor degradation and Al/Cu material selection at 500kHz–1MHz.  
  [Details › Thin-Film Microreactor 1996](https://samizo-aitl.github.io/Edusemi-Plus/archive/in1996/thinfilm_microreactor/)

---

### 🔹 Phase 1｜Semiconductor Device Development (1997–2006)
- **1997**: Joined Seiko Epson Corporation.  
  Engaged in **logic, memory, and high-voltage process integration** (0.35–0.18μm generations).

- **Episode: 64M DRAM Ramp-Up (1998)**  
  Participated in mass production startup of 0.25μm DRAM, leading process setup, defect analysis, and yield improvement.  
  [Details › DRAM Startup 1998](https://samizo-aitl.github.io/Edusemi-Plus/archive/in1998/DRAM_Startup_64M_1998/)

- Developed **high-voltage embedded technology (30V transistors)**, applied to a-TFT driver ICs.  
  [Related Material › 0.18μm CMOS 1.8V/3.3V/5V Embedded Front-End Process (Model)](https://samizo-aitl.github.io/Edusemi-v4x/chapter3_process_evolution/docs/0.18um_1.8V_3.3V_5V)

---

### 🔹 Phase 2｜Piezoelectric Materials & Actuators (2007–2012)
- Began with PZT process evaluation for FeRAM, then expanded to thin-film piezo actuator development.  
  [Related Material › 0.18μm FeRAM Process Flow (Model)](https://samizo-aitl.github.io/Edusemi-v4x/d_chapter1_memory_technologies/doc_FeRAM/0.18um_FeRAM_ProcessFlow)

- Contributed to **structural analysis and reliability of PZT films**, laying the foundation for **PrecisionCore technology**.

- Tackled thin-film reliability issues through **defect analysis and surface treatment optimization**.

---

### 🔹 Phase 3｜PrecisionCore Commercialization & Education (2012–)
- Led **COF implementation and driver IC integration** for PrecisionCore printheads.  
  [Related Material › Special Chapter 2a: Constraints in SystemDK](https://samizo-aitl.github.io/Edusemi-v4x/f_chapter2a_systemdk/)

- Responsible for **scheduling and execution** from development to mass production.

- Promoted **BOM management, ISO training, and knowledge transfer**, transforming them into structured educational content.  
  [Related Material › Design-to-Mass Production Component Ordering Flow](https://samizo-aitl.github.io/EduMecha/08_production_process/production_process_flow.html)

---

## 🎯 Current Activities
- Building and sharing **Samizo-AITL**, an open framework for education, prompt design, and AI-integrated control.

- Integrating experiences from semiconductors, control, and inkjet into structured educational resources.  
  [Related Material › FinFET / GAA Node Parameter Comparison](https://samizo-aitl.github.io/Edusemi-v4x/f_chapter1_finfet_gaa/appendixf1_05_node_params)

- **Educational Tutorial Paper on CFET** 
  [Educational Perspectives on Complementary FETs (CFET): Evolution Beyond GAA and Open Challenges (PDF)](../docs/cfet_tutorial_main.pdf)  
  This tutorial paper provides an educational overview of CFET technology.  
  It reviews the evolution from Planar → FinFET → GAA → CFET, structural concepts, design impacts,  
  manufacturing challenges, EDA limitations, and educational value,  
  proposing its role in semiconductor education and research toward the 2030s.

- **Control-Integrated CFET Study**  
  Cross-Layer Control of CFET Interconnect Delay and Thermal Coupling via PID+FSM+LLM Supervision 
  [Main Paper (PDF)](../docs/cfet_ctrl2025.pdf)
  
- **LPDDR+FeRAM Chiplet Integration**  
  LPDDR provides **low-power, high-bandwidth** operation, while FeRAM complements with **non-volatility, low standby power, and instant resume**.  
  Using **SystemDK top-down co-design** (chiplets / controllers / OS), we explore hybrid memory architectures that reduce standby power and shorten resume latency.  
  📄 [LPDDR+FeRAM Integration (PDF)](../docs/LPDDR_FeRAM.pdf)

- **FeFET CMOS 0.18 µm Integration Study**  
  Integration of FeFETs into a legacy 0.18 µm CMOS logic baseline with only **one additional mask (+1)**.  
  Demonstrated **endurance beyond 10^5 cycles** and **retention exceeding 10 years at 85 °C**,  
  enabling applications such as SRAM backup and secure key storage for IoT and automotive systems.  
  [📄 Main Paper (PDF)](../docs/FeFET_CMOS018um_IntegrationStudy_Main.pdf)  
  [📄 Supplementary Figures & Tables (PDF)](../docs/FeFET_CMOS_018um_IntegrationStudy_Supplementary.pdf)

- **ScAlN MEMS Ultrasonic Sensor Study**  
  Pb-free ScAlN MEMS array integrated with **65 nm SiGe CMOS via SiP**,  
  proposed for next-generation medical ultrasonic sensors.  
  📄 [ScAlN Ultrasonic Paper (PDF)](../docs/scaln_ultrasonic.pdf)

- **Humanoid Control Architecture Research: FSM, PID, State-Space, and LLM Integration**  
  Based on **cross-node SoC design** and **SystemDK validation**, this study integrates LLM inference, hierarchical FSM, PID/state-space control, and energy harvesting.  
  📄 [Humanoid TCST Paper (PDF)](../docs/humanoid_tcst2025.pdf)

- **SystemDK with AITL Paper** / Paper on Runtime-Aware DTCO  
We propose a framework that integrates PID+FSM+LLM control loops into EDA design flows, enabling real-time compensation of RC delay, thermal coupling, and EMI variations.  
Cross-layer runtime adaptation reduces guardbands and improves reliability across sub-2nm nodes.  
[Main Paper (PDF)](../docs/systemdk_aitl2025.pdf)

---

> ⚠️ **Note**  
> The process information described here is based on conceptual models for educational purposes  
> and is not related to actual manufacturing flows or confidential data.

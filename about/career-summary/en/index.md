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
and **PZT actuators**, to the **commercialization of PrecisionCore printheads** —  
evolving from **technology → systems → education**.

---

## 📘 Career Phases

### ⚡ Phase 0｜Control Design & Electromagnetic Analysis (1994–1997)
- Experienced **control design using MATLAB / Simulink** as an undergraduate.  
  [📘 Digital H∞ Control](https://samizo-aitl.github.io/EduController/part04_digital/theory/06_digital_hinf_control.html)

- Graduate research in **electromagnetic field analysis**.  
  **Episode: Thin-Film Microreactor Analysis (1996–1997)**  
  Analyzed DC-DC converter reactors using ferrite-based magnetic materials and Al spiral coil structures.  
  Presented **guidelines for Q-factor degradation and Al/Cu material selection at 500kHz–1MHz**.  
  [🔬 Thin-Film Microreactor 1996](https://samizo-aitl.github.io/Edusemi-Plus/archive/in1996/thinfilm_microreactor/)

---

### 💾 Phase 1｜Semiconductor Device Development (1997–2006)
- **1997**: Joined Seiko Epson Corporation.  
  Engaged in **logic, memory, and high-voltage process integration** (0.35–0.18μm generations).

- **Episode: 64M DRAM Ramp-Up (1998)**  
  Participated in **mass production startup of 0.25μm DRAM**, leading process setup, defect analysis, and yield improvement.  
  [💾 DRAM Startup 1998](https://samizo-aitl.github.io/Edusemi-Plus/archive/in1998/DRAM_Startup_64M_1998/)

- Developed **high-voltage embedded technology (30V transistors)**, applied to a-TFT driver ICs.  
  - [⚙️ 0.18μm CMOS Embedded Front-End Process](https://samizo-aitl.github.io/Edusemi-v4x/chapter3_process_evolution/docs/0.18um_1.8V_3.3V_5V)  
    *Developed high-voltage embedded front-end technology (30V devices) integrated into standard CMOS flow, applied to a-TFT driver ICs.*
  - [📑 LCD Driver IC Specification](https://samizo-aitl.github.io/Edusemi-v4x/d_chapter2_high_voltage_devices/lcd_driver)  
    *Specification for LCD Panel Driver IC (concept model: power rails, I/Os, gamma reference, temperature compensation, timing, pixel circuit).*  
    
---

### 🎛️ Phase 2｜Piezoelectric Materials & Actuators (2007–2012)
- Started with **PZT process evaluation for FeRAM**, later applied to thin-film piezo actuators.  
  [🔧 0.18μm FeRAM Process Flow](https://samizo-aitl.github.io/Edusemi-v4x/d_chapter1_memory_technologies/doc_FeRAM/0.18um_FeRAM_ProcessFlow)

- Contributed to **structural analysis and reliability evaluation of PZT films**, establishing the foundation of **PrecisionCore technology**.

- Overcame thin-film reliability issues through **defect analysis and surface treatment optimization**.

---

### 🖨️ Phase 3｜PrecisionCore Commercialization & Education (2012–)
- Led **COF implementation and driver IC integration** for PrecisionCore printheads.  
  [🔥 SystemDK: Thermal / Stress / Noise Constraints](https://samizo-aitl.github.io/Edusemi-v4x/f_chapter2a_systemdk/)

- Responsible for **scheduling and execution** from development to mass production.

- Promoted **BOM management, ISO training, and knowledge transfer**, transforming them into structured educational content.  
  [📑 Design-to-Mass Production Ordering Flow](https://samizo-aitl.github.io/EduMecha/08_production_process/production_process_flow.html)

---

## 🎯 Current Activities
- Building and sharing **Samizo-AITL**, an open framework for education, prompt design, and AI-integrated control.

- Publishing structured educational resources integrating experiences from **semiconductors, control, and inkjet**.  
  [📄 FinFET / GAA Node Parameter Comparison](https://samizo-aitl.github.io/Edusemi-v4x/f_chapter1_finfet_gaa/appendixf1_05_node_params)

---

### 📑 Papers & Research Works

#### 📘 Educational Tutorial Paper on CFET  
**An educational overview of Complementary FET (CFET) technology.**  
Reviews the evolution Planar → FinFET → GAA → CFET, structural concepts, design impacts, manufacturing challenges, EDA limitations, and educational value.  
[📄 CFET Tutorial Paper (PDF)](../docs/cfet_tutorial_main.pdf)

#### ⚙️ Control-Integrated CFET Study  
**Proof-of-concept for cross-layer CFET control.**  
Demonstrates real-time compensation of interconnect delay and thermal coupling using PID+FSM+LLM supervision.  
[📄 CFET Control Main Paper (PDF)](../docs/cfet_ctrl2025.pdf)

#### 💾 LPDDR+FeRAM Chiplet Integration  
**Hybrid memory architecture combining low-power LPDDR and non-volatile FeRAM.**  
Achieves reduced standby power and instant resume through SystemDK top-down co-design of chiplets, controllers, and OS.  
[📄 LPDDR+FeRAM Integration (PDF)](../docs/LPDDR_FeRAM.pdf)

#### 🔋 Low-Cost Integration of 1.8-V FeFET on 0.18-µm CMOS  
**FeFET integration into 0.18 µm CMOS baseline with +1 mask and a single ALD tool.**  
Demonstrated endurance >10^5 cycles and retention >10 years at 85 °C, enabling SRAM backup and secure key storage for IoT/automotive.  
[📄 fefet_cmos018_reliability.pdf](../docs/fefet_cmos018_reliability.pdf)

#### 🌊 ScAlN MEMS Ultrasonic Sensor Study  
**Pb-free ScAlN MEMS array integrated with 65 nm SiGe CMOS via SiP.**  
Proposes an environmentally friendly solution for next-generation medical ultrasonic sensors.  
[📄 ScAlN Ultrasonic Paper (PDF)](../docs/scaln_ultrasonic.pdf)

#### 🤖 Humanoid Control Architecture Research  
**Integration of LLM, FSM, PID, and state-space control.**  
Based on cross-node SoC design and SystemDK validation, presenting a next-generation humanoid control architecture.  
[📄 Humanoid TCST Paper (PDF)](../docs/humanoid_tcst2025.pdf)

#### 🖥️ SystemDK with AITL Paper  
**Runtime-aware DTCO framework with PID+FSM+LLM loops.**  
Compensates RC delay, thermal coupling, and EMI variations in real time, reducing guardbands and enhancing sub-2nm reliability.  
[📄 SystemDK+AITL Main Paper (PDF)](../docs/systemdk_aitl2025.pdf)

#### 🖨️ KNN Bio-Inkjet Printing Study  
**Lead-free KNN actuators applied to biocompatible inkjet systems.**  
Proposes a Bio-Inkjet architecture achieving picoliter droplet generation under ±50 V, targeting applications in biomedical printing such as cell patterning and protein microarrays.  
[📄 Bio-Inkjet Paper (PDF)](../docs/bioinkjet_knn.pdf)

#### 🚀 AITL on Space  
**A robust three-layer architecture with Tri-NVM hierarchy (SRAM / MRAM / FRAM) for long-duration spacecraft autonomy.**  
Proposes an Adaptive Intelligent Triple-Layer (AITL) control architecture integrating **H∞ control, FSM, and AI-based re-design**, implemented on 22 nm FDSOI SoC with FPGA/SystemDK validation.  
[📄 AITL on Space Main Paper (PDF)](../docs/aitl_space.pdf)

---

> ⚠️ **Note**  
> The process information described here is based on **conceptual models for educational purposes**  
> and is not related to actual manufacturing flows or confidential data.

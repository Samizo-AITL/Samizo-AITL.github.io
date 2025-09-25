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

- **DRAM/VSRAM Technology Archive**  
  Participated in ramp-up of 0.25µm DRAM (1998) and VSRAM (2001).  
  **Led process setup, defect analysis, and yield improvement.**  
  [📎 DRAM/VSRAM Technology Archive](https://samizo-aitl.github.io/Edusemi-Plus/archive/paper/dram_vsram/)  
  *Documentation of ramp-up activities for DRAM and VSRAM, including process setup methods, case studies of defect analysis, and yield improvement practices.*

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

#### 🧩 Historical Case Study: 0.25-µm DRAM & VSRAM  
**Case study of 0.25 µm 64M DRAM ramp-up and mobile pseudo-SRAM (VSRAM) mass production.**  
Covers technology transfer at Epson’s Sakata Fab, process ramp-up methodology, yield-improvement cycle, and the historical impact leading to the world’s first camera phone. Also discusses why 0.18 µm trench VSRAM was abandoned, marking the end of 1T-1C pseudo-SRAM.  
[📄 DRAM & VSRAM History Paper (PDF)](../docs/dram_vsram_history.pdf)


#### 🧪 Historical Case Study on Ti Silicide (TiSi₂) Reliability Issues  
**Case study of TiSi₂ phase-transition instability at the 0.25 µm CMOS node for LCD driver ICs.** 
Analyzes incomplete C49→C54 transformation aggravated by boron absorption, which caused localized high-resistance spots and yield loss in 1 Mbit SRAM macros. Discusses redundancy limitations in embedded macros, provisional countermeasures (etch tuning), and permanent solutions (optimized RTA). Highlights educational lessons on scaling risks, HV compatibility, and the intersection of process technology and reliability.  
[📄 TiSi₂ Reliability Case Paper (PDF)](../docs/tisalicide_case.pdf)

#### 🎯 Process-Based Differentiation for Analog CMOS  
**Process-based differentiation achieving >50% reduction in MOSFET 1/f noise at the 0.18 µm CMOS node.**  
Presents a combined strategy of epitaxial substrate, optimized well doping, controlled oxide thickness with pre-clean, hydrogen anneal, and suitable device geometry. Demonstrates noise reduction robust across temperature (25–125 °C) and long-term aging (1000 h at 85 °C). Highlights implications for biomedical circuits, sensors, automotive/industrial analog, and precision instrumentation, while emphasizing educational value in linking process/device optimization to analog circuit performance.  
[📄 CMOS 0.18 µm Noise Reduction Paper (PDF)](../docs/cmos018_noise.pdf)

#### 🔋 Low-Cost Integration of 1.8-V FeFET on 0.18-µm CMOS  
**FeFET integration into 0.18 µm CMOS baseline with +1 mask and a single ALD tool.**  
Demonstrated endurance >10^5 cycles and retention >10 years at 85 °C, enabling SRAM backup and secure key storage for IoT/automotive.  
[📄 fefet_cmos018_reliability.pdf](../docs/fefet_cmos018_reliability.pdf)

#### ⚡ On-Chip Magnetic-Laminated Inductor in 0.18-µm CMOS  
**On-chip laminated inductor with patterned ground shield (PGS) integrated into 0.18 µm CMOS.**  
Combined with a hybrid Buck–LDO regulator, this approach achieves >80% efficiency, wideband response, and low noise, providing a competitive alternative to external inductors for automotive and IoT SoCs.  
[📄 CMOS018 Inductor + LDO Paper (PDF)](../docs/cmos018_inductor_ldo.pdf)

#### 🌊 ScAlN MEMS Ultrasonic Sensor Study  
**Pb-free ScAlN MEMS array integrated with 65 nm SiGe CMOS via SiP.**  
Proposes an environmentally friendly solution for next-generation medical ultrasonic sensors.  
[📄 ScAlN Ultrasonic Paper (PDF)](../docs/scaln_ultrasonic.pdf)

#### 🖨️ KNN Bio-Inkjet Printing Study  
**Lead-free KNN actuators applied to biocompatible inkjet systems.**  
Proposes a Bio-Inkjet architecture achieving picoliter droplet generation under ±50 V, targeting applications in biomedical printing such as cell patterning and protein microarrays.  
[📄 Bio-Inkjet Paper (PDF)](../docs/bioinkjet_knn.pdf)

#### 🖥️ SystemDK for 3D-IC  
**Constraint-driven design framework integrating multi-physics into EDA.**  
Maps FEM thermal/stress simulations and S-parameter EMI analysis into EDA constraints (STA derates, placement blockages, CTS shielding). Case studies on a 4-die TSV stack demonstrated **87% slack recovery, 11 °C hotspot reduction, and 23% eye-opening improvement**, validating SystemDK as a physically consistent DTCO methodology.  
[📄 SystemDK for 3D-IC Paper (PDF)](../docs/systemdk_3dic.pdf)

#### 💾 LPDDR+FeRAM Chiplet Integration  
**Hybrid memory architecture combining low-power LPDDR and non-volatile FeRAM.**  
Achieves reduced standby power and instant resume through SystemDK top-down co-design of chiplets, controllers, and OS.  
[📄 LPDDR+FeRAM Integration (PDF)](../docs/LPDDR_FeRAM.pdf)

#### 📘 Educational Tutorial Paper on CFET  
**An educational overview of Complementary FET (CFET) technology.**  
Reviews the evolution Planar → FinFET → GAA → CFET, structural concepts, design impacts, manufacturing challenges, EDA limitations, and educational value.  
[📄 CFET Tutorial Paper (PDF)](../docs/cfet_tutorial_main.pdf)

#### 🖥️ SystemDK with AITL Paper  
**Runtime-aware DTCO framework with PID+FSM+LLM loops.**  
Compensates RC delay, thermal coupling, and EMI variations in real time, reducing guardbands and enhancing sub-2nm reliability.  
[📄 SystemDK+AITL Main Paper (PDF)](../docs/systemdk_aitl2025.pdf)

#### ⚙️ Control-Integrated CFET Study  
**Proof-of-concept for cross-layer CFET control.**  
Demonstrates real-time compensation of interconnect delay and thermal coupling using PID+FSM+LLM supervision.  
[📄 CFET Control Main Paper (PDF)](../docs/cfet_ctrl2025.pdf)

#### 🤖 Humanoid Control Architecture Research  
**Integration of LLM, FSM, PID, and state-space control.**  
Based on cross-node SoC design and SystemDK validation, presenting a next-generation humanoid control architecture.  
[📄 Humanoid TCST Paper (PDF)](../docs/humanoid_tcst2025.pdf)

#### 🚀 AITL on Space  
**A robust three-layer architecture with Tri-NVM hierarchy (SRAM / MRAM / FRAM) for long-duration spacecraft autonomy.**  
Proposes an Adaptive Intelligent Triple-Layer (AITL) control architecture integrating **H∞ control, FSM, and AI-based re-design**, implemented on 22 nm FDSOI SoC with FPGA/SystemDK validation.  
[📄 AITL on Space Main Paper (PDF)](../docs/aitl_space.pdf)

#### ✈️ SkyEdge High-Altitude Drone Platform  
**Reference design of SkyEdge: a secure high-altitude UAV integrating H∞ control, domestically manufactured devices, and advanced mechanical design.**  
Features sensor fusion, variable-pitch rotor scheduling, PQC-based security, and FSM/LLM-assisted control optimization, targeting robust disturbance rejection and reliable operation up to 10 km.  
[📄 SkyEdge Drone Paper (PDF)](../docs/skyedge_drone.pdf)

#### 🧮 Post-CFET Device Architectures: Materials, Integration, and Design Perspectives  
**Comprehensive survey of post-CFET device options and roadmap (2030–2045).**  
Covers 2D material FETs, Monolithic 3D integration, Spintronics/Quantum devices, and Heterogeneous atomic-scale integration. Discusses physical principles, integration challenges, reliability issues, EDA/PDK requirements, educational perspectives, and provides a **2030–2045 roadmap**.  
[📄 Post-CFET Main Paper (PDF)](../docs/post_cfet.pdf)

---

> ⚠️ **Note**  
> The process information described here is based on **conceptual models for educational purposes**  
> and is not related to actual manufacturing flows or confidential data.

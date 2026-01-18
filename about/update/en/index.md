---
layout: default 
title: Update Log
---

# 🕘 Update Log

This page documents the update history of the "Technical Portfolio by Shinichi Samizo,"  
including GitHub Pages site updates, new materials, architecture revisions,  
and improvements to documentation across all repositories.

| Date       | Description                                                                 |
|------------|-----------------------------------------------------------------------------|
| **2026-01-14** | **Legacy Technology (Failure & Recovery Archive) officially added.**<br>・Systematized failure-and-recovery case studies centered on 0.25µm DRAM (1998) and VSRAM (2001)<br>・Explicitly documented causal chains linking physical mechanisms, process integration, and usage conditions to failures, yield recovery, and strategic termination decisions<br>・Positioned as the real-world evidence layer supporting why AITL and the AI Control Safety Package strictly separate real-time control from AI/LLM involvement |
| **2026-01-11** | **Started preparation of AI Control Safety Package (practice-oriented design & review package).**<br>• Consolidates control architecture concepts such as Envelope Control, Recovery Control, and AITL into a practical framework<br>• Targets Go / No-Go design judgment, safety envelope definition, and deterministic recovery control for AI / LLM-based control systems<br>• Positioned as a practice-oriented package focusing on design responsibility and boundary definition, not as educational material or PoC |
| **2026-01-10** | **Physical Interface Abstraction for Inkjet Driver ICs defined and documented.**<br>• Clarified physical boundaries between electrical (HV driver), mechanical (MEMS / piezo), and fluid domains<br>• Defined which aspects can be abstracted at the IC design level and which must rely on physical / FEM models<br>• Positioned as a unifying design concept across gf180-inkjet-driver, mems-ana, and inkjet-timing |
| **2026-01-09** | **Official architecture definition and reliability boundary specification of the AITL Controller (A-Type) released.**<br>• Official specification page finalized: https://samizo-aitl.github.io/aitl-controller-a-type/<br>• Explicit responsibility separation defined: real-time control (PID × FSM), bounded real-time adaptive assistance (NN / RL), and non-real-time design support (LLM)<br>• Established as the Architecture Canon of AITL |
| **2026-01-07** | **Added related manuscript (preprint) link to the portal.**<br>• Added a *Related Manuscript (Preprint)* section to both the Japanese and English portal pages<br>• Clearly indicated the manuscript status to avoid implying prior publication or presentation<br>• Linked the preprint PDF (`/assets/paper/2026_fie_pdh_portal.pdf`) and positioned it immediately before the Update Log to establish the flow: implementations → primary manuscript → operational history |
| **2026-01-06** | **Clarified licensing framework and added Full Code Mechanical Design to the portal.**<br>• Organized the portal-wide usage conditions under a hybrid licensing scheme, clearly distinguishing code, textual materials, and figures<br>• Integrated **Full Code Mechanical Design** into the portal as a *Design Methodology / Architecture* layer<br>• Positioned it not as a tutorial, but as the mechanical-side foundational methodology supporting the AITL architecture |
| **2026-01-05** | **Added Interactive Verification (Designer-Oriented Playground).**<br>・Introduced a dedicated playground for designers to interactively explore models, control structures, and design parameters<br>・Shifted the portal from passive learning to active design exploration, comparison, and reasoning<br>・Positioned as a design-time verification and thinking space aligned with the AITL (PID × FSM × LLM) architecture |
| **2026-01-03** | **Added SystemDK design handling for physical constraints (SI/PI, thermal, stress, EMI/EMC).** |
| **2026-01-01** | **Added Control Architecture Concepts (Envelope Control / Design Recovery Control) to the portal.**<br>・Explicitly separated runtime operation from design-time recovery<br>・Envelope Control: runtime enforcement of safe operating envelopes under uncertainty<br>・Design Recovery Control: offline recovery of violated control design assumptions<br>・Fixed the complementary (non-alternative) relationship and aligned with the AITL (PID × FSM × LLM) structure |
| **2025-12-31** | **Added AITL Control Flow Demo (PID × FSM × LLM layered control) to the portal.**<br>• Visualized the time-domain interaction of PID, FSM, and LLM as the core AITL control architecture<br>• Explicitly demonstrated FSM-based degradation detection and LLM-triggered PID gain retuning (Kp retune)<br>• Solidified the AITL principle that LLM intervenes at the design level only, not as a real-time controller |
| **2025-12-30** | **Added openlane2-sram (OpenLane2 + SRAM Hard Macro Integration) educational project.**<br>• Demonstrated a complete RTL → GDS flow using OpenLane2 (v2)<br>• Integrated SRAM as an external hard macro (blackbox / LEF / GDS)<br>• Explicitly documented macro-aware floorplanning with FIXED placement and halo / keepout<br>• Published GDS layout evidence (block-level and standard-cell-level views), clarifying standard SoC practice that SRAM internal transistor layouts are not inspected |
| **2025-12-29** | **Added Inkjet Timing (Droplet Ejection Timing) teaching material / PoC.**<br>• Organized the relationship between V–I–time drive waveforms of piezoelectric actuators and droplet formation behavior<br>• Clarified the ejection sequence from an FSM perspective (Charge / Hold / Release)<br>• Positioned as a foundational Inkjet archive material bridging physical principles, control logic, and implementation |
| **2025-12-28** | **Published the unified AITL Structure Map (full architecture) as a single reference PNG.**<br>• Consolidated the overall AITL architecture (DevEnv / CodeGen / Docs / Archives) into a single visual reference<br>• Fixed the previously distributed structural explanations into an authoritative, referenceable diagram<br>• From this point forward, textual descriptions serve as supplements to this diagram, not replacements |
| **2025-12-24** | **Restored missing navigation elements and aligned JP/EN portal structures.**<br>• Restored explicit links to **Update Log** and **AITL Animation Demos** on the top pages (JP/EN)<br>• Added **AITL Animation Demos** as a first-class supplementary reference for visualizing layered control concepts<br>• Standardized the **Author** section to use explicit Markdown links (removed reliance on auto-linking)<br>• Added clear cross-links between **Japanese and English Update Log pages** to ensure bidirectional traceability |
| 2025-12-20 | **Introduced the MEMS layer (“Bringing Abstraction Back to Physics”) into the Supplementary Layer.**<br>• Clarified the role of MEMS as a boundary domain where abstract models from semiconductors and control are tested against physical structures<br>• Officially integrated the MEMS pre-FEM design exploration tool **mems-ana** (Site / Repo links added)<br>• Updated both Japanese and English portals to organize the overall structure as “Semiconductors → Control → MEMS” |
| **2025-12-19** | **Formally marked AITL-H as Discontinued and archived as a design-study record.**<br>• The PID × FSM × LLM three-layer architecture is preserved for architectural discussion and educational reference only<br>• Classified as an **Archived Project** within the Supplementary Layer<br>• No further feature additions, PoC expansion, or active development will be performed |
| **2025-12-14** | **Added vi-control-asic-sky130 — an end-to-end educational control ASIC project.**<br>• Introduced a V–I (Voltage–Current) based digital control example using PID + FSM architecture<br>• Demonstrated a complete flow from control theory → fixed-point arithmetic → Verilog RTL → OpenLane → SkyWater SKY130 → GDS<br>• Highlighted fundamental differences between MCU-based control and ASIC-based deterministic control (timing, safety, structural transparency)<br>• Integrated into the **Applied Layer** of the Samizo-AITL Portal (EN), connecting control theory directly to real silicon implementation |
| **2025-12-09** | **Refined the positioning of AITL and clarified its role within the portfolio.**<br>• Repositioned AITL (PID × FSM × LLM) as a **supportive design and reasoning framework**, not a replacement for conventional control methods<br>• Explicitly stated that existing control techniques (PID / FSM) sufficiently cover most real-world systems<br>• Updated the JP/EN top pages to emphasize semiconductor device technology as the primary focus |
| **2025-12-09** | **Reorganized the portal layer structure to better reflect realistic engineering practice.**<br>• Clarified AITL-Controller-A-Type as an **experimental and conceptual controller**, not a production-ready solution<br>• **Moved AITL-Silicon-Pathway and AITL-H from the Applied Layer to the Supplementary Layer**<br>• Strengthened the separation between core semiconductor education and exploratory control/AI materials |
| **2025-12-09** | **Synchronized the English portal content with the revised Japanese philosophy.**<br>• Adjusted tone to avoid overstating AI/LLM-driven control capabilities<br>• Reframed AITL as a secondary, applied concept that supports design thinking<br>• Removed implications that AITL supersedes established control theory |
| **2025-12-08** | **Added AITL-Controller — a new three-layer control architecture (PID × FSM × LLM).**<br>• Published new GitHub repository<br>• Completed Python package structure (`src/aitl_controller/`)<br>• Added four demo simulations (simple / disturbance / tracking / tuning)<br>• Added full pytest test suite<br>• Added GitHub Pages documentation under `/docs`<br>• Added architecture diagram, minimal examples, and polished README |
| **2025-12-07** | Fully restructured the Samizo-AITL Portal.<br>• Redefined the three core repositories as **Edusemi-v4x / SemiDevKit / Edusemi-Plus**<br>• Redesigned the top page into a three-layer structure (Core / Applied / Supplement)<br>• Added JP/EN language-switch badges<br>• Streamlined the Author and Update Log sections<br>• Unified descriptions and visual design across all projects |
| 2025-12-06 | Added SemiDevKit — integrated materials from device physics → BSIM4 modeling → SPICE → reliability (NBTI/HCI) → VLSI layout. |
| 2025-08-26 | Replaced the final **Flagship PoC: Humanoid Robot Control** illustration with an updated architecture diagram (cross-node + control integration). |
| 2025-08-23 | Updated portal site layout (improved navigation, unified styling). |
| 2025-08-14 | Added English version of the main portal (`/en/`). |
| 2025-08-14 | Added English “Career Summary” page. |
| 2025-08-14 | Added English version of this Update Log page. |
| 2025-08-13 | Updated “Proposal” section with new unified orange badge styling. |
| 2025-08-13 | Updated link tables across portal to support dual-language JP/EN navigation. |
| 2025-08-12 | Added bilingual Author section and English Career Summary to the portfolio. |
| 2025-08-12 | Added high-resolution version of the Technology Architecture diagram. |
| 2025-08-11 | Adjusted badge colors for consistency (Repo = blue, Site = green). |
| 2025-08-10 | Revised “Projects Overview” table structure. |
| 2025-08-01 | Added English FeRAM materials (0.18µm PZT process). |
| 2025-08-01 | Added DRAM wafer test classification archive (Bin5/Bin6). |
| 2025-07-31 | Added bilingual materials on LDMOS and HV-CMOS structures. |
| 2025-07-30 | Added concept notes on 0.18µm AMS design (poly resistor variation). |
| 2025-07-29 | Added comparative materials on FinFET vs. Gate-All-Around structures. |
| 2025-07-28 | Added MOS reliability section (TDDB, Qbd, breakdown mechanisms). |
| 2025-07-27 | Added bilingual document on 0.18µm logic process flow. |
| 2025-07-21 | Added EduLms (ISO: Quality / Environment / Training). |
| 2025-07-20 | Added AITL-Strategy-Proposal repository (national tech policy concept). |
| 2025-07-19 | Added Edusemi-Plus to portfolio and reorganized index structure. |
| 2025-07-18 | Added Inkjet Technology Archive. |
| 2025-07-17 | Added SemiTechBot (Semiconductor Q&A Chatbot) inside SamizoGPT. |
| 2025-07-15 | Added EduMecha (Creo-based mechanical design materials). |
| 2025-07-15 | Added AssetPortfolio (ETF/NISA investment guide for engineers). |
| 2025-07-12 | Added SamizoGPT section to the portfolio. |
| 2025-07-11 | Switched Rekiden references to Japanese README. |
| 2025-07-10 | Added EduController (Control theory × AI materials). |
| 2025-07-10 | Localized Rekiden for Japanese readers. |
| 2025-07-08 | Integrated AITL-H (FSM × PID × LLM PoC architecture). |
| 2025-07-07 | Refactored Edusemi structure for portfolio integration. |
| 2025-07-01 | Initial publication of the portfolio. |

---

> 🗂️ Japanese version available 👉 [日本語版 更新履歴](https://samizo-aitl.github.io/about/update/)

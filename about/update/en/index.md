---
layout: default 
title: Update Log
---

---

# 🕘 Update Log
[![Back to Samizo-AITL Portal](https://img.shields.io/badge/Back%20to%20Samizo--AITL%20Portal-brightgreen)](https://samizo-aitl.github.io/en/) 

This page documents the update history of the "Technical Portfolio by Shinichi Samizo,"  
including GitHub Pages site updates, new materials, architecture revisions,  
and improvements to documentation across all repositories.

| Date       | Description                                                                 |
|------------|-----------------------------------------------------------------------------|
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

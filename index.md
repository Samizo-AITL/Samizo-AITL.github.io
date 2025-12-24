---
layout: default
title: Samizo-AITL Portal
description: 半導体・MEMS・制御を貫く物理基盤技術と知能化アーキテクチャの統合ポータル
---

# 🎓 Samizo-AITL Portal  
> **「物理からデバイス、制御、知能化までを一つの構造で示す」**  
> *A structured portal connecting physics, devices, systems, and intelligent control.*

[![GitHub](https://img.shields.io/badge/GitHub-Samizo--AITL-black?logo=github)](https://github.com/Samizo-AITL)

## 🌐 Language / 言語
[![English Version](https://img.shields.io/badge/English-Version-blue?logo=github)](https://samizo-aitl.github.io/en/)
[![Japanese Version](https://img.shields.io/badge/Japanese-Version-brightgreen?logo=github)](https://samizo-aitl.github.io/)

---

## 🧭 What is Samizo-AITL?

**Samizo-AITL ポータル**は、三溝真一による  
**半導体デバイス・MEMS・制御工学を「共通の物理基盤」から再統合するための技術アーカイブ**です。

本ポータルの目的は、  
工学システムを構成する要素を次の因果鎖で整理し、

**物理 → 構造 → デバイス → プロセス → モデル → システム → 制御 → 知能化**

という **一貫した設計構造として理解・再利用できる形で提示すること**にあります。

個別技術の百科事典ではなく、  
**設計判断の背後にある構造そのもの**を主題としています。

---

## 🎯 Who is this portal for?

Samizo-AITL は、次のような技術者・研究者を主対象としています。

- 半導体・MEMS・制御分野で **物理モデル起点の設計**を行いたい方  
- AI / LLM を **制御や設計の「外側」に正しく配置したい方**  
- 分野横断で **因果構造を崩さずに再構築したい方**

※ 初学者向けの入門サイトではありません。  
本ポータルは **理解するためではなく、設計に使うための技術基盤**です。

---

## 🧠 Positioning of Intelligence (AITL)

AI・LLM は万能解ではありません。  
本ポータルでは、知能化技術を次のように位置づけます。

- **内側**：物理・デバイス・MEMS（制約を生む層）  
- **中間**：モデル・制御理論（振る舞いを決める層）  
- **外側**：知能化・適応・再設計（判断と更新の層）

この多層構造を  
**AITL（Adaptive Intelligent Technology Loop）** と呼び、

> *「物理モデルを正しく理解し、使い切るための最外層」*

として LLM を扱います。

---

## 🗺 How to read this portal

本ポータルは、次の順で読むことを想定しています。

1. **設計思想の把握**  
   → Physical-First 工学と AITL 全体像  
2. **Main Core（物理・デバイス基盤）**  
   → 半導体・MEMS の制約とモデル  
3. **Applied Layer（制御・知能化）**  
   → PID / FSM / LLM の役割分担  
4. **PoC・実装例**  
   → 実装された構造としての確認

「どこから読めばよいか分からない」状態を作らないため、  
**思想 → 物理 → 制御 → 知能** の順を推奨します。

---

# 💠 Main Core（中核教材）
**半導体デバイス技術を物理起点で体系化する基幹教材群**

---

## 1️⃣ Edusemi-v4x
**半導体プロセス・デバイス・回路設計を一貫構造で扱う基幹教材。**

- MOS 構造・物理
- プロセスフロー
- デバイスモデル
- 回路設計・PDK
- SystemDK による熱・応力・SI/PI・EMI 解析

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/Edusemi-v4x/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/Edusemi-v4x)

---

## 2️⃣ SemiDevKit
**物理モデルから SPICE・信頼性・レイアウトまでを接続する実装キット。**

- Poisson / Drift-Diffusion solver  
- BSIM4  
- NBTI / HCI  
- OpenLane-Lite

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/SemiDevKit/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/SemiDevKit)

---

## 3️⃣ Edusemi-Plus
**材料・装置・産業構造を物理視点で接続する拡張教材。**

- SiC / GaN  
- EUV  
- 製造装置  
- ファブ運営・サプライチェーン

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/Edusemi-Plus/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/Edusemi-Plus)

---

# 🎛 Applied Layer（制御・知能化）

## 4️⃣ EduController
PID・FSM を中心に **制御構造の基本を整理する教育教材。**

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/EduController/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/EduController)

---

## 5️⃣ AITL-Controller-A-Type
**PID × FSM × LLM 三層構造の最小実装 PoC。**

- 制御と判断の分離
- 劣化・不確実性下での挙動確認
- Reliability 視点の評価

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/aitl-controller-a-type/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/aitl-controller-a-type)

---

## 6️⃣ V-I Control ASIC on SKY130
**V–I 制御（PID + FSM）を RTL → GDS まで実装する ASIC 教材。**

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/vi-control-asic-sky130/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/vi-control-asic-sky130)

---

# ⚙️ MEMS（抽象の限界を可視化）

## 7️⃣ mems-ana
**pre-FEM 構造検証ツール**

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/mems-ana/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/mems-ana)

---

## 8️⃣ Inkjet Printing Models
**画質 × 速度 × ドット挙動の因果モデル化。**

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/inkjet-dts/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/inkjet-dts)

---

# 👤 Author

**三溝 真一（Shinichi Samizo）**  
独立系半導体研究者  

- GitHub: https://github.com/Samizo-AITL  
- Career Summary: https://samizo-aitl.github.io/about/career-summary/

---

> **Samizo-AITL は  
> 技術を「説明」するための場所ではなく、  
> 技術を「設計するための構造」を公開するアーカイブです。**

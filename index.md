---
layout: default
title: Samizo-AITL Portal
description: 半導体・MEMS・制御を貫く物理基盤技術と知能化アーキテクチャの統合ポータル
---

# 🎓 Samizo-AITL Portal  
> **Directory is the design philosophy.**  
> *Structure-first engineering portal from physics to intelligent control.*

[![GitHub](https://img.shields.io/badge/GitHub-Samizo--AITL-black?logo=github)](https://github.com/Samizo-AITL)
[![Zenn](https://img.shields.io/badge/Zenn-Articles-blue?logo=zenn)](https://zenn.dev/samizo_aitl)

---

## 🗂 Samizo-AITL Directory Map（これが全体像）

> **このポータルは「図で説明しません」。  
> ディレクトリ構成そのものが設計思想です。**

```text
Samizo-AITL/
├─ 01_DevEnv/        環境・再現性
│   └─ VSCode / Python / Toolchain
│
├─ 02_CodeGen/       実装・制御・生成
│   ├─ PID           実時間制御（安定化・V–I 制御）
│   ├─ FSM           状態遷移・モード管理
│   └─ LLM           監督・再設計・適応（非実時間）
│
├─ 03_Docs/          理解・教育・設計思想
│   ├─ Edusemi-v4x
│   ├─ EduController
│   └─ Edusemi-Plus
│
└─ 04_Archives/      PoC・履歴・技術資産
```

**初めての方は  
`01_DevEnv → 02_CodeGen → 03_Docs` の順で辿ってください。**

---

## 🌐 Language / 言語
[![English Version](https://img.shields.io/badge/English-Version-blue?logo=github)](https://samizo-aitl.github.io/en/)
[![Japanese Version](https://img.shields.io/badge/Japanese-Version-brightgreen?logo=github)](https://samizo-aitl.github.io/)

---

## 🧭 What is Samizo-AITL?

**Samizo-AITL** は、三溝真一による  
**半導体・MEMS・制御工学を共通の物理基盤から再統合する技術アーカイブ**です。

工学システムを、

**物理 → 構造 → デバイス → プロセス → モデル → システム → 制御 → 知能化**

という **因果構造**で整理し、  
分野横断でも **設計に再利用できる理解** を目的としています。

---

## 🎯 Who is this portal for?

- 物理モデル起点で設計したい半導体・MEMS・制御系エンジニア  
- AI / LLM を **制御の代替ではなく、監督・再設計層として使いたい人**  
- 分野横断でも **因果構造を壊さずに理解したい人**

※ 初学者向けサイトではありません。  
**設計者向け構造アーカイブ**です。

---

## 🧠 AITL（Adaptive Intelligent Technology Loop）

AITL では、知能化を次の階層として扱います。

- **内側**：物理・デバイス・MEMS（制約）
- **中間**：モデル・制御理論（挙動）
- **外側**：FSM / LLM（判断・再設計）

AI / LLM は **実時間制御ループの外側**にのみ配置されます。

---

# 💠 Main Core（中核教材）

## Edusemi-v4x  
物理起点で半導体プロセス・デバイス・回路設計を体系化する基幹教材。  
[Site](https://samizo-aitl.github.io/Edusemi-v4x/) / [Repo](https://github.com/Samizo-AITL/Edusemi-v4x)

## SemiDevKit  
物理モデルから SPICE・信頼性・レイアウトまでを接続する実装キット。  
[Site](https://samizo-aitl.github.io/SemiDevKit/) / [Repo](https://github.com/Samizo-AITL/SemiDevKit)

## Edusemi-Plus  
材料・装置・産業構造を物理視点で拡張する補助教材。  
[Site](https://samizo-aitl.github.io/Edusemi-Plus/) / [Repo](https://github.com/Samizo-AITL/Edusemi-Plus)

---

# 🎛 Applied Layer（制御・知能化）

## EduController  
PID・FSM を中心に制御構造を理解する教材。  
[Site](https://samizo-aitl.github.io/EduController/) / [Repo](https://github.com/Samizo-AITL/EduController)

## AITL-Controller-A-Type  
PID × FSM × LLM 三層構造の最小 PoC。  
[Site](https://samizo-aitl.github.io/aitl-controller-a-type/) / [Repo](https://github.com/Samizo-AITL/aitl-controller-a-type)

## V–I Control ASIC on SKY130  
V–I 制御（PID + FSM）を RTL → GDS まで実装する ASIC 教材。  
[Site](https://samizo-aitl.github.io/vi-control-asic-sky130/) / [Repo](https://github.com/Samizo-AITL/vi-control-asic-sky130)

---

# ⚙️ MEMS / Physical Boundary

## mems-ana  
pre-FEM による MEMS 抽象解析ツール。  
[Site](https://samizo-aitl.github.io/mems-ana/) / [Repo](https://github.com/Samizo-AITL/mems-ana)

## Inkjet Printing — Design Trade-off Models  
インクジェットの設計トレードオフ最小モデル教材。  
[Site](https://samizo-aitl.github.io/inkjet-dts/) / [Repo](https://github.com/Samizo-AITL/inkjet-dts)

---

# 🎞 AITL Animation Demos
AITL 概念を可視化する試験的デモ集。  
[View Demos](https://samizo-aitl.github.io/aitl-animation-demos/)

---

# 🕘 Update Log

**サイトおよび教材の更新履歴はこちらに集約しています。**  
設計思想・教材構成・PoC の更新は、必ずログとして残します。

- [📄 更新履歴を見る](https://samizo-aitl.github.io/about/update/)

---

# 👤 Author

**三溝 真一（Shinichi Samizo）**  
独立系半導体研究者  

- GitHub: [https://github.com/Samizo-AITL](https://github.com/Samizo-AITL)
- Zenn: [https://zenn.dev/samizo_aitl](https://zenn.dev/samizo_aitl)  
- Career Summary: [https://samizo-aitl.github.io/about/career-summary/](https://samizo-aitl.github.io/about/career-summary/)

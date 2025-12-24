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
**半導体デバイス、MEMS、制御工学を共通の物理基盤から再統合するための技術アーカイブ**です。

工学システムを構成する要素を、

**物理 → 構造 → デバイス → プロセス → モデル → システム → 制御 → 知能化**

という **一貫した因果構造**で整理し、  
**分野横断で再利用可能な設計理解**を目的としています。

---

## 🎯 Who is this portal for?

Samizo-AITL は、以下の技術者・研究者を対象としています。

- 物理モデル起点で設計を行いたい半導体・MEMS・制御系エンジニア  
- AI / LLM を **制御の代替ではなく、設計・監督層として使いたい人**  
- 分野横断で **因果構造を崩さずに理解・再構築したい人**

※ 初学者向け入門サイトではありません。  
本ポータルは **設計のための構造アーカイブ**です。

---

## 🧠 AITL（Adaptive Intelligent Technology Loop）の位置づけ

AITL では、知能化技術を次のように位置づけます。

- **内側**：物理・デバイス・MEMS（制約を生む層）  
- **中間**：モデル・制御理論（挙動を決める層）  
- **外側**：知能化・適応・再設計（判断と更新の層）

AI / LLM は **実時間制御ループの外側**に配置され、  
物理モデルを正しく「使い切る」ための監督層として扱われます。

---

## 🗺 How to use this portal（読み方ガイド）

1. **設計思想の把握**  
   → Physical-First 工学と AITL 全体像  
2. **Main Core（物理・デバイス基盤）**  
   → 半導体・MEMS の制約とモデル  
3. **Applied Layer（制御・知能化）**  
   → PID / FSM / LLM の役割分担  
4. **PoC・実装例**  
   → 実装された構造として確認

推奨順：  
**思想 → 物理 → 制御 → 知能**

---

# 💠 Main Core（中核教材）

---

## 1️⃣ Edusemi-v4x
**半導体プロセス・デバイス・回路設計を物理起点で体系化する基幹教材。**

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/Edusemi-v4x/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/Edusemi-v4x)

---

## 2️⃣ SemiDevKit
**物理モデルから SPICE・信頼性・レイアウトまでを接続する実装キット。**

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/SemiDevKit/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/SemiDevKit)

---

## 3️⃣ Edusemi-Plus
**材料・装置・産業構造を物理視点で拡張する補助教材。**

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/Edusemi-Plus/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/Edusemi-Plus)

---

# 🎛 Applied Layer（制御・知能化）

---

## 4️⃣ EduController
**PID・FSM を中心に制御構造を理解するための教材。**

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/EduController/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/EduController)

---

## 5️⃣ AITL-Controller-A-Type
**PID × FSM × LLM 三層構造の最小 PoC。**

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/aitl-controller-a-type/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/aitl-controller-a-type)

---

## 6️⃣ V–I Control ASIC on SKY130
**V–I 制御（PID + FSM）を RTL → GDS まで実装する ASIC 教材。**

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/vi-control-asic-sky130/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/vi-control-asic-sky130)

---

# ⚙️ MEMS / Physical Boundary

---

## 7️⃣ mems-ana
**抽象モデルの限界を確認する pre-FEM MEMS 解析ツール。**

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/mems-ana/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/mems-ana)

---

## 8️⃣ Inkjet Printing — Design Trade-off Models
**画質・速度・ドット挙動の因果関係を最小モデルで可視化する教材。**

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/inkjet-dts/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/inkjet-dts)

---

# 🎞 AITL Animation Demos
**AITL 概念を可視化するための試験的アニメーションデモ集。**

[![View Demos](https://img.shields.io/badge/View-Demos-brightgreen?logo=github)](https://samizo-aitl.github.io/aitl-animation-demos/)

---

# 🕘 Update Log
**サイトおよび教材の更新履歴。**

[📄 更新履歴を見る](https://samizo-aitl.github.io/about/update/)

---

# 👤 Author

**三溝 真一（Shinichi Samizo）**  
独立系半導体研究者  

- GitHub: [https://github.com/Samizo-AITL](https://github.com/Samizo-AITL)  
- Career Summary: [https://samizo-aitl.github.io/about/career-summary/](https://samizo-aitl.github.io/about/career-summary/)

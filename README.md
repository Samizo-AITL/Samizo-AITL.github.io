# 🎓 Samizo-AITL Portal  
> **「半導体デバイス技術の全体像を構造的に示す」**  
> *“A structured portal for understanding the full landscape of semiconductor device technology.”*

## 🌐 Language / 言語
[![English Version](https://img.shields.io/badge/English-Version-blue?logo=github)](https://samizo-aitl.github.io/en/)
[![Japanese Version](https://img.shields.io/badge/Japanese-Version-brightgreen?logo=github)](https://samizo-aitl.github.io/)

---

**Samizo-AITL ポータル**は、三溝真一による  
**半導体デバイス技術（構造・物理・製造・設計・産業）の全体像を体系的に学ぶための統合ポータル**です。

本ポータルの主眼は、  
半導体技術を **「構造 → 物理 → プロセス → モデル → 回路 → システム → 産業」**  
という因果構造で理解できるよう整理することにあります。

AI・制御・LLM といった要素は、  
**この物理基盤の理解を前提とした「応用的・補助的レイヤ」**として扱います。

---

# 🧩 Main Core（中核教材）
半導体デバイス技術そのものを体系的に理解するための基幹教材群。

---

## 1️⃣ Edusemi-v4x
**半導体プロセス・デバイス・回路設計を体系的に学ぶための基幹教材。**

- MOS 構造・物理
- プロセスフロー
- デバイスモデル
- 回路設計
- PDK
- SystemDK による  
  **熱・応力・SI/PI・EMI などの物理制約解析**

までを一貫して扱います。

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/Edusemi-v4x/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/Edusemi-v4x)

---

## 2️⃣ SemiDevKit
**物理モデルから SPICE、信頼性、レイアウトまでを一貫して扱う  
デバイス開発実装キット。**

- Poisson / Drift-Diffusion solver
- BSIM4 モデル
- NBTI / HCI 信頼性解析
- OpenLane-Lite によるレイアウト生成

など、**「物理が回路になるまで」**を実装レベルで追体験できます。

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/SemiDevKit/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/SemiDevKit)

---

## 3️⃣ Edusemi-Plus（技術拡張教材）
**材料・装置・パッケージ・産業構造など、  
半導体技術の周辺領域を基幹体系へ接続する拡張教材。**

- SiC / GaN
- EUV
- 製造装置
- ファブ運営
- サプライチェーン

などを、物理・デバイス視点から整理します。

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/Edusemi-Plus/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/Edusemi-Plus)

---

# 🎛️ Applied Layer（制御・AI / 応用層）
Main Core の物理基盤を前提に、  
**「動き」「制御」「適応」をどう設計するか**を考える応用レイヤ。

ここでは、既存の制御工学（PID・FSM）を尊重し、  
AI/LLM は **設計や判断を補助する位置づけ**で扱います。

---

## EduController
**制御工学の基礎を中心とした教育用教材。**

- PID 制御
- FSM（状態遷移）
- 制御設計の考え方
- HDL テンプレート生成（補助的）

を通じて、**制御の基本構造を理解すること**を目的とします。

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/EduController/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/EduController)

---

## AITL-Controller-A-Type
**PID・FSM・LLM の三層構造を  
最小構成の Python 実装で検証するための実験用コントローラ。**

本リポジトリは、

- 新しい制御手法の提案
- PID の代替

を目的とするものではなく、  
**「制御・判断・再設計を分離して考えるための思考実験」**として位置付けています。

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/aitl-controller-a-type/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/aitl-controller-a-type)

---

## V-I Control ASIC on SKY130
**V–I 制御（PID + FSM）を RTL → GDS まで一気通貫で実装する  
デジタル制御 ASIC 教材。**

- 制御理論 → 固定小数点 → Verilog → OpenLane → SKY130
- MCU 制御と ASIC 制御の決定的違いを可視化
- 教育用途・実務試作の両立を目的とした最小構成

[![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/vi-control-asic-sky130/)
[![Repo](https://img.shields.io/badge/View-Repo-blue?logo=github)](https://github.com/Samizo-AITL/vi-control-asic-sky130)

---

# 📚 Supplementary Layer（補助・周辺教材）
Main Core や Applied Layer を補完する周辺教材・試作・PoC 群。

---

| プロジェクト | 内容 | Link |
|--------------|------|------|
| **AITL-Silicon-Pathway** | 制御構造を Python → RTL → GDSII → SPICE まで接続する実験教材 | [![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/aitl-silicon-pathway/) |
| **AITL-H** | PID × FSM × LLM 三層構造の概念実証（PoC） | [![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/AITL-H/) |
| **EduMecha** | Creo を用いた機械設計教材 | [![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/EduMecha/) |
| **Inkjet** | 薄膜ピエゾ構造アーカイブ | [![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/Inkjet/) |
| **EduLms** | ISO・品質教育を含む学習管理教材 | [![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/EduLms/) |
| **SamizoGPT** | プロンプト設計・AI活用整理 | [![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/SamizoGPT/) |
| **SemiTechBot** | 半導体 Q&A チャットボット | [![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/SamizoGPT_SemiTechBot/) |
| **Rekiden** | 歴史 × AI シミュレーション教材 | [![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/Rekiden/) |
| **AssetPortfolio** | 技術者向け資産運用教材 | [![Site](https://img.shields.io/badge/View-Site-brightgreen?logo=github)](https://samizo-aitl.github.io/AssetPortfolio-StartGuide/) |

---

# 👤 Author

| Item | Details |
|------|--------|
| **Name** | 三溝 真一（Shinichi Samizo） |
| **Title** | 独立系半導体研究者 |
| **Links** | [Email](mailto:shin3t72@gmail.com) / [X](https://x.com/shin3t72) / [GitHub](https://github.com/Samizo-AITL) |

[📄 Career Summary](https://samizo-aitl.github.io/about/career-summary/)

---

# 🕘 Update Log
[📄 View Update Log](https://samizo-aitl.github.io/about/update/)

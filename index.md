本サイトは、**三溝 真一（Shinichi Samizo）** による教育・研究開発プロジェクト群の統合ポータルです。

```mermaid
graph TD
  A[Samizo-AITL Portal<br>https://samizo-aitl.github.io/] --> B[AITL-H<br>知能制御アーキテクチャ]
  A --> C[SamizoGPT_SemiTechBot<br>半導体技術Bot]
  A --> D[教育教材群 Edu-Series]

  %% 教材群分岐
  D --> D1[Edusemi-v4x<br>半導体基礎教材]
  D --> D2[Edusemi-Plus<br>応用教材（AI・地政学）]
  D --> D3[EduController<br>制御理論・AI制御]
  D --> D4[EduMecha<br>機械設計（Creo）]
  D --> D5[EduLms<br>ISO教育訓練LMS]

  %% AITL-H構成連携
  B --> B1[FSM層<br>状態遷移設計]
  B --> B2[PID層<br>連続制御]
  B --> B3[LLM層<br>ChatGPT統合]

  %% SamizoGPT連携
  C --> C1[設計支援テンプレート]
  C --> C2[半導体QAプロンプト]

  %% AITL戦略提言
  A --> E[AITL戦略提言書]
  E --> E1[教育→設計→PoC→起業]
  E --> E2[政策・地域導入モデル]

  %% 開発PoC連携
  B --> F[PoC実装群]
  F --> F1[ジンバル制御PoC]
  F --> F2[Verilog自動生成PoC]
```
  
<p align="center">
  <img src="https://raw.githubusercontent.com/Samizo-AITL/Samizo-AITL.github.io/main/images/A_vector-based_digital_graphic_logo_features_the_n.png" alt="Samizo-AITL Logo" width="300"/>
</p>

> 🌐 [View English Version](./en/index.md)

---

## 🔍 プロジェクト一覧 | Projects Overview

| アイコン | プロジェクト名 | 分野 | 内容 |
|---------|----------------|------|------|
| 🧠 | [SamizoGPT](https://samizo-aitl.github.io/SamizoGPT/) | [🟨 AI] | ChatGPTプロンプト設計・プロジェクト支援テンプレート集 |
| 📡 | [SemiTechBot](https://samizo-aitl.github.io/SamizoGPT_SemiTechBot/) | [🟦 半導体] [🟨 AI] | 半導体技術支援チャットボット（SamizoGPT応用）<br>⚠️ FlaskベースのBotアプリは現在整備中です |
| 📘 | [Edusemi-v4x](https://samizo-aitl.github.io/Edusemi-v4x/) | [🟦 半導体] | プロセス・設計・PDK演習などを体系化した半導体教材 |
| ➕ | [Edusemi-Plus](https://samizo-aitl.github.io/Edusemi-Plus/) | [🟦 半導体] [🟥 材料] [🟨 AI] [🟧 投資] [🟫 地政学] | 材料・先端技術・地政学・投資と半導体の交差点教材 |
| 🎛️ | [EduController](https://samizo-aitl.github.io/EduController/) | [🟥 制御] [🟨 AI] | 制御理論＋AI制御教材（PID〜LLM統合） |
| 🛠️ | [EduMecha](https://samizo-aitl.github.io/EduMecha/) | [🔵 機械] | Creoを用いた機械設計・筐体構造教材<br>※⚠️演習用ファイル（.prt / .asm）は未収録 |
| 🧠 | [EduLms](https://samizo-aitl.github.io/EduLms/) | [🟩 教育] | ISO品質・環境・教育訓練を統合した教材（LMS対応） |
| 🤖 | [AITL-H](https://samizo-aitl.github.io/AITL-H/) | [🟨 AI] [🟥 制御] | FSM×PID×LLMによる知能制御アーキテクチャ |
| 🖨️ | [Inkjet](https://samizo-aitl.github.io/Inkjet/) | [⚙️ 製品技術] | インクジェット構造・波形・評価アーカイブ |
| 💰 | [AssetPortfolio](https://samizo-aitl.github.io/AssetPortfolio-StartGuide/) | [🟧 投資] | テクノロジー分野特化の資産運用教材（ETF・NISA） |
| 🎮 | [Rekiden](https://samizo-aitl.github.io/Rekiden/) | [🟪 歴史] [🧠 LLM] | ChatGPT連携型・歴史シミュレーション教材 |
| 🧩 | [AITL-Strategy-Proposal](https://samizo-aitl.github.io/AITL-Strategy-Proposal/) | [🏛️ 政策提言] | AITL構想に基づく国家戦略提言（教育×AI×制御） |

---

## 🧠 AITL統合思想の背景

Samizo-AITLは、以下のような**異分野統合アーキテクチャ**を目指しています：

- **半導体 × 制御理論 × 機械設計 × AI × 教育技術**
- **ChatGPT / LLMと連携した設計・学習・実装支援**
- 教材・PoC構成・テンプレート類を **MITライセンス** で公開

> 💡 特に [Edusemi-v4x](https://samizo-aitl.github.io/Edusemi-v4x/) は、実務経験に基づく中核教材です。

---

## 📘 中核教材・PoCの構造的整理

| 中核教材 | 解説 |
|----------|------|
| 📘 [Edusemi-v4x](https://samizo-aitl.github.io/Edusemi-v4x/) | プロセス・デバイス・設計・テスト・信頼性を体系的に学ぶ |
| 🎛️ [EduController](https://samizo-aitl.github.io/EduController/) ＋ [SoC_DesignKit](https://samizo-aitl.github.io/EduController/SoC_DesignKit_by_ChatGPT/) | FSM・PID・LLMによる制御教材＋HDLテンプレート一式 |
| 🤖 [AITL-H](https://samizo-aitl.github.io/AITL-H/) ＋ [PoCマニュアル](https://samizo-aitl.github.io/AITL-H/docs/) | 知能制御アーキテクチャをPoCで再現（FSM × PID × LLM） |

---

## 🏛️ 提言・連携・国際協働に向けて

以下では、**産業政策・技術連携・LLM導入事例**の提案を示しています：

- 🧩 [国家提言：AITL構想](https://samizo-aitl.github.io/AITL-Strategy-Proposal/)  
　教育×AI×制御を軸とする長期戦略的ビジョン

- 🤝 [OpenAI向けメッセージ](./about/openai-message.md)  
　SamizoGPT/AITL-Hを通じたChatGPT統合設計の実例と提案

---

## 📚 補足資料・更新履歴

| 項目 | 内容 |
|------|------|
| 🕘 [更新履歴](./about/update.md) | 教材更新・構成変更履歴 |
| 🧠 [ChatGPT活用レベル診断](./about/chatgpt-skill-eval.md) | LLMスキルレベル（Lv5.0）自己評価 |
| 📋 [Geminiレビュー](./about/gemini-review.md) | Google Geminiによるポートフォリオ評価 |
| 🌐 [English Version](./en/index.md) | 英語ポータルへのリンク |

---

## 👤 執筆者 / Author

**三溝 真一（Shinichi Samizo）**  
- 信州大学大学院 電気電子工学 修了  
- 元 セイコーエプソン株式会社 技術者（1997年〜）  

📌 **経験領域**：   📘 [キャリア要約](./about/career-summary.md)
- 半導体デバイス（ロジック／メモリ／高耐圧混載）  
- 薄膜ピエゾアクチュエータ  
- PrecisionCoreプリントヘッド製品化・構成管理・教育設計

📬 **連絡先**
- ✉️ Email: [shin3t72@gmail.com](mailto:shin3t72@gmail.com)  
- 🐦 X (Twitter): [https://x.com/shin3t72](https://x.com/shin3t72)  
- 💻 GitHub: [https://samizo-aitl.github.io/](https://samizo-aitl.github.io/)

---

© 2025 Shinichi Samizo — MIT License  
教材・コード・図面・テンプレートは、MITライセンスのもと自由にご利用いただけます。

---

### 🖼️ 技術統合アーキテクチャ図（写実版）

![技術統合アーキテクチャ](./images/technology_architecture_realistic_version.png)

---

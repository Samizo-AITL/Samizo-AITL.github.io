**Samizo-AITL ポータル**

> このサイトは、**三溝真一（Shinichi Samizo）** による、**教育・設計・PoC（概念実証）・AI統合**をテーマとしたプロジェクトのポータルです。

- 🌐 **[English Version](./en/index.md)**
- 🔗 **[GitHubリポジトリ一覧](https://github.com/Samizo-AITL/)**  

---

## 🔍 **プロジェクト一覧 | Projects Overview**

| アイコン | **プロジェクト名** | 分野 | 内容 |
|---------|--------------------|------|------|
| 🧠 | **[SamizoGPT](https://samizo-aitl.github.io/SamizoGPT/)** | [🟨 AI] | ChatGPTの **プロンプト設計** と **支援テンプレート** 集（※一部にAI支援を活用していますが、構成・検証・記述責任はすべて筆者が担っています） |
| 📡 | **[SemiTechBot](https://samizo-aitl.github.io/SamizoGPT_SemiTechBot/)** | [🟦 半導体] [🟨 AI] | **半導体技術支援** に特化した **チャットボット**（SamizoGPT応用）<br>⚠️ FlaskベースのBotアプリは現在 **開発中** です（※UI設計およびFlask連携を整備中。順次公開予定） |
| 📘 | **[Edusemi-v4x](https://samizo-aitl.github.io/Edusemi-v4x/)** | [🟦 半導体] | **プロセス・設計・PDK演習** を体系的に学べる **半導体教材** |
| ➕ | **[Edusemi-Plus](https://samizo-aitl.github.io/Edusemi-Plus/)** | [🟦 半導体] [🟥 材料] [🟨 AI] [🟧 投資] [🟫 地政学] | **材料・先端技術・地政学・投資** の観点を交差的に学ぶ **応用教材** |
| 🎛️ | **[EduController](https://samizo-aitl.github.io/EduController/)** | [🟥 制御] [🟨 AI] | **PID制御〜LLM統合** までを扱う **制御×AI教材**（※FSMやLLM制御に関するHDL記述はAI支援に基づき、構造設計・教育目的で構成） |
| 🛠️ | **[EduMecha](https://samizo-aitl.github.io/EduMecha/)** | [🔵 機械] | **Creoによる機械設計演習**（**筐体構造設計**）<br>※⚠️ **CADファイル**（.prt / .asm）は未収録です（※著作権・互換性の都合により現時点では非公開） |
| 🧠 | **[EduLms](https://samizo-aitl.github.io/EduLms/)** | [🟩 教育] | **ISO準拠の品質・環境・教育訓練** を統合した **LMS対応教材** |
| 🤖 | **[AITL-H](https://samizo-aitl.github.io/AITL-H/)** | [🟨 AI] [🟥 制御] | **FSM × PID × LLM** による **三層型知能制御アーキテクチャ**（※実装コードよりも教育的理解と構造設計を重視） |
| 🖨️ | **[Inkjet](https://samizo-aitl.github.io/Inkjet/)** | [⚙️ 製品技術] | **インクジェット構造・駆動波形・評価データ** のアーカイブ |
| 💰 | **[AssetPortfolio](https://samizo-aitl.github.io/AssetPortfolio-StartGuide/)** | [🟧 投資] | **ETF・NISA** を活用した **技術者向け資産運用教材** |
| 🎮 | **[Rekiden](https://samizo-aitl.github.io/Rekiden/)** | [🟪 歴史] [🧠 LLM] | ChatGPT連携の **歴史シミュレーション教材** |
| 🧩 | **[AITL-Strategy-Proposal](https://samizo-aitl.github.io/AITL-Strategy-Proposal/)** | [🏛️ 政策提言] | **教育 × AI × 制御** を軸とした **国家戦略提言** |

---

## 🧠 **AITL統合思想の背景**

**Samizo-AITL** は、以下のような **異分野の技術統合アーキテクチャ** を基盤としています：

- **半導体 × 制御理論 × 機械設計 × AI × 教育技術**
- **ChatGPT** や **LLM（大規模言語モデル）** との連携による **設計・学習・実装支援**（※AI支援は補助的に活用し、全体の整合性・構成・責任は筆者が担っています）
- 教材やPoC構成、テンプレートを **MITライセンス** のもと公開

> 💡 特に **[Edusemi-v4x](https://samizo-aitl.github.io/Edusemi-v4x/)** は、**実務経験に基づく中核教材** です（※内容は教育目的に再構成されており、特定製品や企業とは無関係です）。

---

## 📘 **中核教材・PoCの構造的整理**

| **中核教材** | 解説 |
|--------------|------|
| **[Edusemi-v4x](https://samizo-aitl.github.io/Edusemi-v4x/)** | **半導体プロセス・デバイス・設計・テスト・信頼性** を体系的に学べる基盤教材。|
| ┗ 📦 **[SystemDK編（特別編 第2a章）](https://github.com/Samizo-AITL/Edusemi-v4x/tree/main/f_chapter2a_systemdk)** | **SI/PI・熱・応力・EMI/EMC** の物理制約を統合設計し、<br>**GAA / AMS / MRAM** を活用した異種統合PoCを扱う特別編教材（Edusemi-v4x内包） |
| **[EduController](https://samizo-aitl.github.io/EduController/)** ＋ **[SoC_DesignKit](https://samizo-aitl.github.io/EduController/SoC_DesignKit_by_ChatGPT/)** | **FSM・PID・LLM制御** を段階的に学ぶ教材と、**HDL記述テンプレート** 一式。<br>※Verilog/Cコード生成はAI支援、筆者は制御構成を担当 |
| **[AITL-H](https://samizo-aitl.github.io/AITL-H/)** ＋ **[PoCマニュアル](https://samizo-aitl.github.io/AITL-H/docs/)** | **三層型知能制御アーキテクチャ（FSM×PID×LLM）** を概念実証（PoC）として再現可能な統合教材 |

<div align="center">
  <img src="./images/core_materials_clean.svg" alt="Core Materials Structure" width="75%">
  <p><em><strong>
    半導体・制御・AIを統合し、知能制御の応用例を実装・評価する三層構成の教材です。
  </strong></em></p>
</div>

---

## 🏛️ **提言・連携・国際協働に向けて**

以下では、**政策・技術連携・LLM導入** に関する構想や提案を示しています：

- 🧩 **[国家提言：AITL構想](https://samizo-aitl.github.io/AITL-Strategy-Proposal/)**  
　**教育 × AI × 制御** を軸とした **中長期的ビジョン**（※AI活用の教育導入とPoC設計連携の提案を含む）

- 🤝 **[OpenAI向けメッセージ](./about/openai-message.md)**  
　**ChatGPT活用事例** と **統合設計への提案**（※教材整備・国際展開への活用方法も含まれています）

---

## 📚 **補足資料・更新履歴**

| 項目 | 内容 |
|------|------|
| 🕘 **[更新履歴](./about/update.md)** | 教材の **更新履歴・構成変更** ログ |
| 🧠 **[ChatGPT活用レベル診断](./about/chatgpt-skill-eval.md)** | 本サイト運営者の**LLM活用スキル（レベル5）評価レポート**です。構造設計・記憶活用・教材生成の視点から評価されています。 |
| 📋 **[Geminiレビュー](./about/gemini-review.md)** | **Google Gemini** による **教材評価レポート** |
| 🌐 **[English Version](./en/index.md)** | 英語ポータルへのリンク |

---

## 👤 **執筆者 / Author**

**三溝真一（Shinichi Samizo）**  
- **信州大学大学院 電気電子工学** 修了  
- 元 **セイコーエプソン株式会社** 技術者（1997年〜）

📌 **経験領域** → 📘 **[キャリア要約を見る](./about/career-summary.md)**  
- **半導体デバイス（ロジック・メモリ・高耐圧混載）**  
- **インクジェット薄膜ピエゾアクチュエータ**  
- **PrecisionCoreプリントヘッド製品化・BOM管理・ISO教育**

📬 **連絡先**
- ✉️ Email: [shin3t72@gmail.com](mailto:shin3t72@gmail.com)  
- 🐦 X: [https://x.com/shin3t72](https://x.com/shin3t72)  
- 💻 GitHub: [https://samizo-aitl.github.io/](https://samizo-aitl.github.io/)

---

© 2025 **Shinichi Samizo** — **MIT License**  
教材・コード・図面・テンプレートは、**MITライセンス** のもとで自由にご活用いただけます（※本サイトは教育・研究用途を主眼としており、商用製品との直接的関連はありません）。

---

## 🖼️ **技術統合アーキテクチャ図（写実版）**

![技術統合アーキテクチャ](./images/technology_architecture_realistic_version.png)

 *図: 半導体・AI・制御・ロボティクスを統合する「Samizo-AITL」の技術構想を象徴的に表現した写実イメージ。人間の指示による知能制御（PID）とAI学習が、ロボットや回路制御と融合する未来を示しています。*

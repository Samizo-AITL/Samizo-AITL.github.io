**Technical Portfolio by Shinichi Samizo**

本サイトは、**三溝真一** による教育・研究開発プロジェクト7本を統合した  
公式GitHubポータルサイトです：

- 🧠 SamizoGPT（ChatGPTプロンプト支援）  
- 📘 Edusemi v4.x（半導体教育教材）  
- 🎛️ EduController（制御理論＋AI制御教材）  
- 🛠️ EduMecha（Creoベースの機械設計・筐体設計教材）  
- 🤖 AITL-H（知能制御アーキテクチャ）  
- 💰 AssetPortfolio（テクノロジー資産運用教材）  
- 🎮 Rekiden（歴史シミュレーション教材）  

これらは、**半導体設計、機械設計、制御理論、AI応用、資産運用、教育、対話型シミュレーション**にまたがる  
オープンソース教材・技術ドキュメントとして展開されています。  

👉 [Click here for English version](./en/index.md)

---

## 🧠 SamizoGPT｜ChatGPT活用・プロンプト設計支援

**SamizoGPT** は、ChatGPTを最大限に活用するための  
プロンプトテンプレート、プロジェクト設計テンプレート、GUIツールを統合した支援フレームワークです。

▶︎ [SamizoGPT サイトページへ](https://samizo-aitl.github.io/SamizoGPT/)  
▶︎ [SamzioGPT GitHubページ（コードとテンプレート）](https://github.com/Samizo-AITL/SamizoGPT)

| 内容 | 概要 |
|------|------|
| 🔤 プロンプト集 | 説明・設計・状態遷移・教育・レビューなど9カテゴリ |
| 🛠 GUI支援ツール | テンプレート選択→生成→保存をGUIで操作可能 |
| 📂 構成指針 | 命名規則、設計分類、拡張案を体系化 |


### 📡 SemiTechBot｜半導体技術支援チャットボット

`SamizoGPT` を応用し、**ChatGPT API × Flask** によって構築された  
**半導体技術者向けのQ&Aチャットボット構築テンプレート**です。

▶︎ [SemiTechBot GitHubページへ](https://github.com/Samizo-AITL/SamizoGPT_SemiTechBot)

| 項目 | 内容 |
|------|------|
| ⚙️ 技術基盤 | Flask + OpenAI API + YAML設定 |
| 🧪 質問例 | 「酸化膜が薄いと何が起こる？」「レイアウト制限とは？」など |
| 📄 README構成 | 起動手順・API例・プロンプト構成まで整備済み |
| 🔒 安全設計 | APIキー除外、`.gitignore` 完備の構成テンプレート付属 |

> 🔰 iPadなどの制約ある環境からでも、**GitHubで構成管理しながら拡張開発**できます。

---

## 📘 Edusemi v4.x｜半導体教育教材

KOSEN・大学・企業向けの分野横断型統合教材プロジェクト。  
設計・物性・テスト・先端技術までを4編で網羅しています。

▶︎ [Edusemi サイトページへ](https://samizo-aitl.github.io/Edusemi-v4x/)
▶︎ [Edusemi GitHubページへ](https://github.com/Samizo-AITL/Edusemi-v4x)

| 編構成   | 主な内容 |
|----------|-----------|
| 基礎編   | 半導体物性、論理回路、MOS/SoC設計、テスト基礎 |
| 応用編   | 高耐圧、ESD、レイアウト、アナログ設計、PDK対応 |
| 実践編   | Sky130／OpenLane設計、Python自動化、PoC評価 |
| 特別編   | FinFET・GAA、チップレット、FSM×PID×LLM構造の実装 |

📎 **拡張教材あり：** 半導体産業を取り巻く地政学・戦略・製品進化などを扱う応用教材  
👉 [➕ Edusemi-Plus サイトページへ](https://samizo-aitl.github.io/Edusemi-Plus/)

---

## 🎛️ EduController｜制御理論 × AI統合教材

**EduController** は、古典制御・現代制御からAI制御までを体系的に学べるPythonベースの教材です。  
PIDや状態空間制御から、ニューラルネット、強化学習、LLM統合までを実装を通じて学びます。

︎▶︎ [EduController サイトページへ](https://samizo-aitl.github.io/EduController/)
▶︎ [EduController GitHubページへ](https://github.com/Samizo-AITL/EduController)

> 📚 全9章構成（制御理論5章＋AI制御4章)

| 系統       | 内容 |
|------------|------|
| 🎓 制御理論系 | PID、状態空間、ロバスト制御、デジタル制御、実装編 |
| 🤖 AI制御系   | NN制御、強化学習、データ駆動、LLM統合制御 |

---

## 🛠️ EduMecha｜Creoベースの機械設計・筐体設計教材

**EduMecha** は、パラメトリック3D CAD（PTC Creo）を用いて、機械設計・筐体構造設計・図面生成を学ぶ教育教材です。  
FSMやPID制御を搭載する筐体構造との連携を通じて、**設計意図の可視化 × 制御対象の設計** を一貫して学習できます。

▶︎ [EduMecha サイトページへ](https://samizo-aitl.github.io/EduMecha/)  
▶︎ [EduMecha GitHubページへ](https://github.com/Samizo-AITL/EduMecha)

| 構成         | 内容概要 |
|--------------|----------|
| 📗 Creo入門     | 押し出し・穴あけ・拘束などのパラメトリック設計演習 |
| 🧩 アセンブリ設計 | 組立構造・拘束条件の理解と再現 |
| 📄 図面生成     | 三面図・寸法記入・PDF出力まで |
| 🤖 筐体設計     | FSM×PID×LLM制御を搭載する筐体モデル（AITL-Hと連動） |

---

## 🤖 AITL-H｜Hybrid型構造制御アーキテクチャ

**AITL-H（All-in-Theory Logic - Hybrid）** は、  
FSM（本能）＋ PID（理性）＋ LLM（知性）の三層制御によって、柔軟かつ安定した知能制御を実現するアーキテクチャです。

災害対応・介護支援・自己改善などの応用を想定し、PoC設計・検証を公開しています。  
RTL-to-GDSII などのSoC連携は Edusemi 特別編と連動しています。

▶︎ [AITL-H サイトページへ](https://samizo-aitl.github.io/AITL-H/)
▶︎ [AITL-H GitHubページ](https://github.com/Samizo-AITL/AITL-H)  

📎 詳細なPoCマニュアルは以下をご覧ください：  
👉 [AITL-H PoCマニュアル（docs/）](https://samizo-aitl.github.io/AITL-H/docs/)

---

## 💰 AssetPortfolio｜テクノロジー時代の資産運用教材

**AssetPortfolio-StartGuide** は、インフレ時代に対応した「テクノロジー分野に注目した資産運用」の学習教材です。  
NISA・ETF・ChatGPTを活用して、投資初心者でも「自分で考え、判断する力」を育てられる2部構成になっています。

▶︎ [AssetPortfolio サイトページへ](https://samizo-aitl.github.io/AssetPortfolio-StartGuide/)  
▶︎ [AssetPortfolio GitHubページへ](https://github.com/Samizo-AITL/AssetPortfolio-StartGuide)

| 構成         | 内容概要 |
|--------------|----------|
| 📗 第1部      | 投資の基礎、NISA制度、証券口座の開設、商品選定、リバランスなど |
| 📘 第2部      | テクノロジー分野の銘柄分析、ETF逆引き、ChatGPTによる比較分析と判断演習 |
| 🧠 実践支援   | ChatGPTテンプレートをそのまま貼り付けて使える形式で提供 |

---

## 🎮 Rekiden｜歴史シミュレーションゲーム（ChatGPT連携）

**Rekiden** は、Markdownベースで構成された**ChatGPT連携型の歴史シミュレーションゲーム**です。  
戦国〜幕末の歴史的転機において、ユーザーが武将となって「if」を体験します。

▶︎ [Rekiden サイトページへ](https://samizo-aitl.github.io/Rekiden/)
▶︎ [Rekiden Githubページ](https://github.com/Samizo-AITL/Rekiden/blob/main/README.md)

| 特徴                 | 内容 |
|----------------------|------|
| 🤖 ChatGPT進行役       | GPTがストーリーと分岐を生成 |
| 📄 Markdownシナリオ   | 編集・拡張しやすい透明な構造 |
| 🎓 教育的な設計       | 戦略・外交・歴史的判断の学習にも対応 |
| 🌍 英語対応（海外展開）| 英語版README・国際仕様も整備中 |

---

## 📫 連絡先 / Contact

技術監修・執筆：**三溝 真一（Shinichi Samizo）**  
- GitHub: [@Samizo-AITL](https://github.com/Samizo-AITL)  
- Email: [shin3t72@gmail.com](mailto:shin3t72@gmail.com)  
> 🧠 ChatGPT活用レベル：Lv.5（補助AI設計者）  
> 👉 [▶ 日本語版診断シート](/docs/_chatgpt-skill-eval.md) / [English version](/docs/_chatgpt-skill-eval-en.md)

---

## 🤝 OpenAI関係者の方へ（For OpenAI Team）

本サイトは、ChatGPTの活用によって構築された教育・設計支援プロジェクト群を統合した成果物です。  
OpenAI APIとのさらなる連携や、グローバル教育展開のご提案・ご相談も歓迎しております。

> 👉 ご質問・ご連絡はこちら：shin3t72@gmail.com（Shinichi Samizo） 
> 👉 または OpenAIサポートチャット経由でご覧いただいた方は、ぜひフィードバックをお寄せください。

---

## 📄 ライセンス / License

© 2025 Shinichi Samizo — MIT License  
本サイト上の教材・設計資料・構成図・プロンプト類は **MITライセンス** に基づき、自由に再利用可能です。

---

## 🕘 更新履歴 / Update Log

| 日付 | 内容 |
|------|------|
| 2025-07-17 | SemiTechBot（半導体技術チャットボット）セクションをSamizoGPT内に追加 |
| 2025-07-15 | EduMecha（機械設計・Creo教材）セクションを追加 |
| 2025-07-15 | AssetPortfolio（テクノロジー資産運用教材）セクションを追加 |
| 2025-07-12 | SamizoGPT セクションをトップポートフォリオに追加 |
| 2025-07-11 | Rekidenの参照リンクを日本語READMEに変更 |
| 2025-07-10 | EduControllerセクション追加（制御理論＋AI教材） |
| 2025-07-10 | Rekidenセクションを英語から日本語化（国内向け対応） |
| 2025-07-08 | AITL-H特化構成へ統合（FSM×PID×LLM） |
| 2025-07-07 | Edusemi構成をポータル対応へ刷新 |
| 2025-07-01 | 初版ポートフォリオ公開 |

---

💬 [プロジェクト全体へのご意見・ご感想はこちらへ](https://github.com/Samizo-AITL/Samizo-AITL.github.io/discussions)

---
layout: default 
title: 更新履歴（Update Log) 
description: Samizo-AITLおよび関連教材の改訂履歴（GitHub Pagesポートフォリオ更新履歴）
---

---

# 🕘 更新履歴（Update Log)

このページでは、「Technical Portfolio by Shinichi Samizo」および  
**Samizo-AITL ポータルと関連教材群の改訂履歴**を記録しています。

主な更新対象は以下を含みます。

- GitHub Pages サイト構成の変更  
- 教材・PoC の追加／整理  
- 設計思想・構造の再定義  
- README・解説文書の改訂  

---

| 日付       | 内容 |
|------------|------|
| 2026-01-08 | **AITL関連論文（原稿／プレプリント）導線をポータルに追加。**<br>・日本語版／英語版トップページに「関連論文（プレプリント）」セクションを新設（※発表済みと誤解されない表現に統一）<br>・論文PDFへの導線を追加：`/assets/paper/2026_fie_pdh_portal.pdf`<br>・配置順を「実体（教材・PoC）→ 一次資料（論文）→ Update Log」に固定し、AITLの読み順を明確化 |
| 2026-01-08 | **AITLのライセンス体系を明確化し、設計方法論を基盤レイヤとして統合。**<br>・AITLポータル全体の利用条件をハイブリッドライセンス方式として整理（コード／教材テキスト／図表の区分を明示）<br>・設計方法論プロジェクト **Full Code Mechanical Design** を、AITLを下支えする「Design Methodology / Architecture」レイヤとしてポータルに統合 |
| 2026-01-07 | **関連論文（原稿／プレプリント）リンクをポータルに追加。**<br>・日本語版／英語版トップページに「関連論文（プレプリント）」セクションを追加（発表済みと誤解されない表現に修正）<br>・論文PDFへの導線を追加：`/assets/paper/2026_fie_pdh_portal.pdf`<br>・Update Log の直前に配置し、「実体（教材・PoC）→ 一次資料（論文）→ 運用ログ」の読み順を確定 |
| 2026-01-06 | **ライセンス体系の明確化および Full Code Mechanical Design をポータルに追加。**<br>・ポータル全体の利用条件をハイブリッドライセンス方式として整理（コード／教材テキスト／図表の区分を明示）<br>・設計方法論プロジェクト **Full Code Mechanical Design** を「Design Methodology / Architecture」レイヤとしてポータルに統合<br>・教材ではなく、AITL を下支えする機械設計側の基盤方法論として位置づけを固定 |
| 2026-01-05 | **▶ インタラクティブ検証（設計者向け Playground）を追加。**<br>・設計者がモデル・制御構造・設計パラメータを対話的に検証するための検証エリアを新設<br>・教材閲覧に留まらず、「試す・比較する・考察する」ための設計者向け思考実験環境を提供<br>・AITL（PID × FSM × LLM）構造における Design-time 検証・理解深化を目的とした Playground として位置づけ |
| 2026-01-03 | **SystemDK に熱・応力・ノイズ（SI/PI, 熱, 応力, EMI/EMC）の物理制約設計対応を追加。** |
| 2026-01-01 | **Control Architecture Concepts（Envelope Control / Design Recovery Control）をポータルに追加。**<br>・Runtime（運用）と Design-time（設計）を分離する制御アーキテクチャ概念として両者を明示<br>・Envelope Control：不確実性下での安全運転範囲（Envelope）を実行時に拘束<br>・Design Recovery Control：破綻した制御設計前提を非実時間で回復<br>・両概念を補完関係（非代替）として定義し、AITL（PID × FSM × LLM）構造との関係を固定化 |
| 2025-12-31 | **AITL Control Flow Demo（PID × FSM × LLM 三層制御デモ）をポータルに追加。**<br>・AITL制御の中核である PID × FSM × LLM の役割分担を、時間応答アニメーションとして可視化<br>・FSMによる劣化検出と、LLMによるPIDゲイン再同定（Kp retune）の介入タイミングを明示<br>・LLMは常時制御せず「設計再構成」にのみ関与するという AITL 制御思想をデモとして固定化 |
| 2025-12-30 | **openlane2-sram（OpenLane2 + SRAM Hard Macro 統合）教材を追加。**<br>・OpenLane2（v2）を用いた RTL → GDS 完走フローを実証<br>・SRAM を external hard macro（blackbox / LEF / GDS）として統合<br>・FIXED 配置・halo / keepout を含む macro-aware floorplanning を明示<br>・GDS 図（ブロックレベル／標準セルレベル）を証拠として掲載し、SoC 物理設計における「SRAM 中身は見ない」設計作法を明文化 |
| 2025-12-29 | **Inkjet Timing（インクジェット吐出タイミング）教材／PoC を追加。**<br>・圧電アクチュエータ駆動における V–I–時間波形と液滴形成の関係を整理<br>・FSM 視点での吐出シーケンス（Charge / Hold / Release）を明確化<br>・制御・物理・実装を結ぶ Inkjet 系アーカイブの基点教材として位置付け |
| 2025-12-28 | **AITL Structure Map（全体構造）の統合PNG図をポータルに正式掲載。**<br>・Samizo-AITL 全体構造（DevEnv / CodeGen / Docs / Archives）を単一視覚図として明示<br>・分散していた構造説明を「参照可能な確定図」として固定化<br>・以降、構造説明は本図を正とし、文章側は補足に限定 |
| 2025-12-24 | **ポータル（JP/EN）導線の欠落を修正し、トップページと更新履歴の整合を回復。**<br>・Top（JP/EN）に **AITL Animation Demos** への導線を正式追加<br>・Top（JP/EN）に **Update Log** への導線を復活<br>・Author セクションのリンク表記を Markdown リンクに統一（自動リンク依存を排除）<br>・Update Log（JP）に **英語版更新履歴へのクロスリンク**を明示 |
| 2025-12-20 | **MEMS（抽象を物理に引き戻す）レイヤを Supplementary Layer に新設。**<br>・半導体／制御で扱った抽象モデルを物理構造で検証する位置づけを明確化<br>・MEMS pre-FEM 設計探索ツール **mems-ana** を正式統合（Site / Repo リンク追加）<br>・日本語／英語ポータル双方に MEMS セクションを追加し、全体構造を「半導体 → 制御 → MEMS」の流れで整理 |
| 2025-12-19 | **AITL-H を設計アーカイブとして正式に Discontinued（開発終了）と位置づけ。**<br>・PID × FSM × LLM 三層構造は実装対象ではなく、設計思想・限界検討の記録として保存<br>・Supplementary Layer 内の **Archived Project** として明示<br>・以降の機能追加・PoC拡張は行わない方針を明確化 |
| 2025-12-14 | **V–I制御ASIC教材「vi-control-asic-sky130」を新規追加。**<br>・PID＋FSM による V–I（電圧・電流）ベースのデジタル制御を題材とした教育用 ASIC プロジェクト<br>・制御理論 → 固定小数点 → Verilog RTL → OpenLane → SKY130 → GDS までの一気通貫教材を構築<br>・MCU制御と ASIC制御の本質的差異（確定遅延・安全性・構造可視性）を明示<br>・Samizo-AITL ポータル（JP/EN）の **Applied Layer** に統合 |
| 2025-12-09 | **Samizo-AITLポータルの思想整理およびAITL位置づけを再定義。**<br>・AITL（PID × FSM × LLM）を「制御手法」ではなく **設計・判断を整理する補助的フレーム**として再位置づけ<br>・半導体デバイス技術（構造・物理・プロセス・モデル）を主軸とする方針を明確化<br>・Topページ（JP/EN）にて「既存制御（PID/FSM）が十分機能する領域を尊重する」記述を追加<br>・AITLの誇張的表現（制御置換・万能性を示唆する表現）を削除・修正 |
| 2025-12-09 | **ポータル構成の階層整理を実施（Applied / Supplementary 再編）。**<br>・AITL-Controller-A-Type を「実験用・思考整理用コントローラ」として明示<br>・**AITL-Silicon-Pathway / AITL-H を Applied Layer から Supplementary Layer へ移動**<br>・AITL関連教材を「補助・周辺教材」として整理し、主軸教材との役割分離を明確化 |
| 2025-12-09 | **英語版ポータル（/en）を日本語版と同一思想で全面改訂。**<br>・AITLを「secondary / applied concept」として再定義<br>・Semiconductor device technology を主語とする記述へ全面修正<br>・“AITL control architecture” を研究・教育用フレームとして限定的に説明 |
| 2025-12-08 | **AITL-Controller（PID × FSM × LLM 三層制御アーキテクチャ）を新規追加。**<br>・GitHubリポジトリ公開<br>・Pythonパッケージ構成（src/aitl_controller）確立<br>・4つのデモ（simple/disturbance/tracking/tuning）追加<br>・pytestテストスイート整備<br>・GitHub Pages（docs/）公開<br>・最小動作例、アーキテクチャ図、README整備 |
| 2025-12-07 | Samizo-AITLポータルを全面再構成。<br>・中核教材を **Edusemi-v4x / SemiDevKit / Edusemi-Plus** の3本柱に再定義<br>・Topページ構成を全面刷新（Core / Applied / Supplementの3層構造）<br>・言語切替バッジ（JP/EN）をHero直下に導入<br>・Author/Update Logセクションを軽量化<br>・全プロジェクト説明を整理し、統一デザインに再編<br>・旧AITL-Strategy-Proposalは今後リニューアル予定として位置付け |
| 2025-12-06 | SemiDevKit（半導体8モジュール統合教材スイート）をポートフォリオに追加 |
| 2025-08-26 | ポータルサイト末尾の **フラッグシップPoC（人型ロボット制御）** 図解を差し替え（クロスノード設計＋制御アーキテクチャ統合図を採用） |
| 2025-08-23 | ポータルサイトのレイアウトを変更（全体ナビゲーション構成改善、表示統一） |
| 2025-08-14 | 「提言・連携・国際協働」セクションをリニューアル（GitHub Pages/Repoバッジ導入、絶対URL対応）、**経験要約 / Career Summary** ページのリンク構造改善 |
| 2025-08-14 | AITL統合思想の背景ページ見直し、補足注記の簡潔化 |
| 2025-08-14 | `PROJECT_OVERVIEW.md` 構成方針決定（概要＋主要PJ集約専用ページ化） |
| 2025-08-01 | FeRAM教材（0.18μm PZTプロセス）英語版ドキュメントを追加 |
| 2025-08-01 | DRAMウェハテスト分類（Bin5/6）アーカイブ追記 |
| 2025-07-31 | LDMOS・HV-CMOS構造教材（英日併記）を追加 |
| 2025-07-30 | 0.18μm AMS設計教材（Poly抵抗ばらつき）構想メモを追加 |
| 2025-07-29 | FinFET/GAA構造比較教材を追加 |
| 2025-07-28 | MOS特性章に「4.3 信頼性評価（TDDB）」等を追記 |
| 2025-07-27 | 0.18μmロジックプロセスフロー教材（英日併記）を追加 |
| 2025-07-21 | EduLms（ISO品質・環境・教育訓練教材）をポートフォリオに追加 |
| 2025-07-20 | AITL戦略提言リポジトリ「AITL-Strategy-Proposal」追加 |
| 2025-07-19 | Edusemi-Plus セクションをポートフォリオに追加／index.md 再構成 |
| 2025-07-18 | Inkjet（インクジェット技術アーカイブ）セクションを追加 |
| 2025-07-17 | SemiTechBot（半導体技術チャットボット）をSamizoGPT内に追加 |
| 2025-07-15 | EduMecha（機械設計・Creo教材）セクションを追加 |
| 2025-07-15 | AssetPortfolio（テクノロジー資産運用教材）セクションを追加 |
| 2025-07-12 | SamizoGPT セクションをトップポートフォリオに追加 |
| 2025-07-11 | Rekiden参照リンクを日本語READMEに変更 |
| 2025-07-10 | EduController（制御理論＋AI教材）セクション追加 |
| 2025-07-10 | Rekidenセクションを英語から日本語化（国内向け対応） |
| 2025-07-08 | AITL-H特化構成へ統合（FSM×PID×LLM） |
| 2025-07-07 | Edusemi構成をポートフォリオ対応へ刷新 |
| 2025-07-01 | 初版ポートフォリオ公開 |

---

> 🗂️ 英語版更新履歴はこちら 👉 [Update Log (English)](https://samizo-aitl.github.io/about/update/en/)

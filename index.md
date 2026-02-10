---
layout: default
title: Samizo-AITL Portal｜半導体・制御・AIの設計構造アーカイブ
description: 半導体、制御（PID・FSM）、AI設計を物理量（V–I）起点で整理した個人技術アーカイブ。構造図とPortalで横断的に参照可能。
---

# 🎓 Samizo-AITL Portal
> 半導体・制御・AIを「同じ構造図」で整理した個人技術アーカイブ

<div style="margin:1.2em 0; font-size:0.95em;">
  ▶ <a href="/portal/">統合構造 Portal</a>　
  ▶ <a href="/zenn-articles/">Zenn 記事一覧</a>　
  ▶ <a href="https://github.com/Samizo-AITL">GitHub</a>
</div>

<span style="font-size:1.05em; opacity:0.85;">
Architecture for Integrated Technology Logic
</span>

<div style="margin:1.4em 0 1.8em 0; font-size:1.18em; line-height:1.75;">
物理量（V–I など）から、デバイス・制御・AIまでを<br>
<strong>同じ構造図で一貫して理解するための設計構造アーカイブ</strong>
</div>

<div style="margin:1.2em 0 1.0em 0;">
  <a href="https://samizo-aitl.github.io/en/" style="margin-right:12px;">
    <img src="https://img.shields.io/badge/English-Version-brightgreen?logo=github" />
  </a>
  <a href="https://github.com/Samizo-AITL">
    <img src="https://img.shields.io/badge/GitHub-Samizo--AITL-black?logo=github" />
  </a>
</div>

---

## 🧭 統合構造図（AITL）

```mermaid
flowchart TD
    P["物理量<br>(V–I / 力 / 熱)"]
    D["デバイス<br>(半導体 / MEMS / 機構)"]
    C["制御<br>(PID / FSM)"]
    A["設計知能<br>(AI / LLM)"]
    S["性能<br>(安定性 / 応答 / 信頼性)"]

    P --> D
    D --> C
    C --> S
    C -. 再設計支援 .-> A
    A -. モデル更新・再同定 .-> C
```

<div style="margin-top:0.9em; font-size:0.95em; opacity:0.85;">
本サイトのすべての記事・デモ・Portal は、この構造図の
<strong>「箱」または「矢印」</strong>のどれかに対応しています。
</div>

---

## 📚 Articles（Zenn 記事）

<div style="
  margin: 2.6em 0;
  padding: 2.8em 2.0em;
  text-align: center;
  background: linear-gradient(180deg, rgba(37,99,235,0.12), rgba(30,64,175,0.06));
  border-radius: 22px;
">

<a href="/zenn-articles/"
   style="
     display: inline-block;
     padding: 22px 56px;
     font-size: 1.45em;
     font-weight: 900;
     letter-spacing: 0.12em;
     color: #ffffff;
     background: linear-gradient(135deg, #2563eb, #1e40af);
     border-radius: 16px;
     text-decoration: none;
     box-shadow: 0 18px 38px rgba(30,64,175,0.45);
   ">
  ▶ Zenn 記事一覧
</a>

<div style="margin-top:1.6em; font-size:1.05em; line-height:1.75;">
各記事は、上の統合構造図の中から<br>
<strong>特定の構成要素（箱）または関係（矢印）</strong>を切り出して解説しています。
</div>

</div>

---

## 🧩 Portal（構造ナビゲーション）

<div style="
  margin: 3.2em 0;
  padding: 3.0em 2.2em;
  border: 3px solid #1e40af;
  border-radius: 24px;
  text-align:center;
">

<div style="font-size:1.15em; margin-bottom:1.4em;">
Portal は <strong>Samizo-AITL の中核ナビゲーション</strong> です。<br>
構造図を起点に、記事・デモ・設計視点を横断的に辿れます。
</div>

<a href="/portal/"
   style="
     display: inline-block;
     padding: 20px 48px;
     font-size: 1.3em;
     font-weight: 900;
     letter-spacing: 0.10em;
     color: #ffffff;
     background: linear-gradient(135deg, #1e40af, #1e3a8a);
     border-radius: 16px;
     text-decoration: none;
     box-shadow: 0 16px 32px rgba(30,64,175,0.40);
   ">
  ▶ 統合構造 Portal を開く
</a>

<div style="
  margin-top:2.6em;
  max-width:720px;
  margin-left:auto;
  margin-right:auto;
  text-align:left;
  color:#374151;
">

  <div style="margin-bottom:1.2em;">
    <strong>全体構造マップ</strong><br>
    <span style="font-size:0.92em; opacity:0.75;">
      物理量（V–I）から AI までの全体関係を俯瞰します
    </span>
  </div>

  <div style="margin-bottom:1.2em;">
    <strong>制御階層（PID / FSM）</strong><br>
    <span style="font-size:0.92em; opacity:0.75;">
      モデル化・制御構造の整理と位置づけ
    </span>
  </div>

  <div>
    <strong>AI連携・構造デモ</strong><br>
    <span style="font-size:0.92em; opacity:0.75;">
      再設計・知能化が構造のどこに入るかを示します
    </span>
  </div>

</div>

</div>

---

## 🔍 検索クエリ（Google Search Console 実測）

<div style="margin:1.6em 0; font-size:0.95em; color:#374151;">
このセクションは、Google Search Console に実際に記録された<br>
<strong>検索クエリ（表示実績あり）</strong>をそのまま記録するログです。
</div>

<!--
運用ルール：
- Search Console「検索結果 → クエリ」から転記
- 月1回更新
- 表示回数 0 のクエリは載せない
- 加工・選別・言い換えは禁止
-->

| 検索クエリ | 表示回数 | クリック | 平均掲載順位 |
|------------|----------|----------|---------------|
| （例）制御 系 アーキテクチャ 図 | 12 | 1 | 18.4 |
| （例）PID FSM 構造 | 7 | 0 | 22.1 |
| （例）V–I 制御 設計 | 5 | 1 | 15.9 |

<div style="margin-top:1.2em; font-size:0.85em; opacity:0.75;">
※ 本一覧は SEO キーワードではなく、<br>
Google によって実際に観測された検索ログです。
</div>

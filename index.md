---
layout: default
title: Samizo-AITL Portal
description: 物理量からデバイス・制御・AIまでを同一構造で示す設計構造の技術アーカイブ
---

# 🎓 Samizo-AITL Portal
<span style="font-size:1.05em; opacity:0.85;">
Architecture for Integrated Technology Logic
</span>

<div style="margin:1.2em 0 1.6em 0; font-size:1.15em; line-height:1.7;">
物理量（V–I など）から、デバイス・制御・AIまでを<br>
<strong>同じ構造図でつないで示す設計構造の技術アーカイブ</strong>
</div>

<div style="margin:1.2em 0 0.8em 0;">
  <a href="https://samizo-aitl.github.io/en/" style="margin-right:12px;">
    <img src="https://img.shields.io/badge/English-Version-brightgreen?logo=github" />
  </a>
  <a href="https://github.com/Samizo-AITL">
    <img src="https://img.shields.io/badge/GitHub-Samizo--AITL-black?logo=github" />
  </a>
</div>

---

## 🧭 構造図

```mermaid
flowchart TD
    P["物理量<br>(V–I / 力 / 熱)"]
    D["デバイス<br>(半導体 / MEMS / 機構)"]
    C["制御<br>(PID / FSM)"]
    A["AI / 設計支援"]
    S["性能<br>(安定性 / 応答 / 信頼性)"]

    P --> D
    D --> C
    C --> S
    C -.-> A
    A -.-> C
```

<div style="margin-top:0.8em; font-size:0.95em; opacity:0.85;">
この図にある要素（箱）やつながり（矢印）を、1つずつ扱った記事やデモを置いています。
</div>

---

## 📚 Articles（記事）

<div style="
  margin: 2.4em 0;
  padding: 2.6em 1.8em;
  text-align: center;
  background: linear-gradient(180deg, rgba(37,99,235,0.10), rgba(30,64,175,0.05));
  border-radius: 22px;
">

<a href="/zenn-articles/"
   style="
     display: inline-block;
     padding: 22px 54px;
     font-size: 1.4em;
     font-weight: 900;
     letter-spacing: 0.10em;
     color: #ffffff;
     background: linear-gradient(135deg, #2563eb, #1e40af);
     border-radius: 16px;
     text-decoration: none;
     box-shadow: 0 18px 38px rgba(30,64,175,0.45);
   ">
  ▶ Zenn 記事一覧
</a>

<div style="margin-top:1.4em; font-size:1.05em; line-height:1.7;">
各記事は、上の構造図の中から<br>
<strong>特定の箱、または矢印</strong>をテーマにした記述です。
</div>

</div>

---

## 🧩 Portal（構造ビュー）

<div style="
  margin: 3.0em 0;
  padding: 2.8em 2.0em;
  border: 2px solid #1e40af;
  border-radius: 22px;
  text-align:center;
">

<a href="/portal/"
   style="
     display: inline-block;
     padding: 18px 44px;
     font-size: 1.25em;
     font-weight: 800;
     letter-spacing: 0.08em;
     color: #1e40af;
     background: #ffffff;
     border: 3px solid #1e40af;
     border-radius: 14px;
     text-decoration: none;
   ">
  ▶ Portal を開く
</a>

<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px; margin-top:2.0em;">
  <div style="padding:14px; border:1px solid #ddd; border-radius:12px; text-align:center;">
    全体構造マップ
  </div>
  <div style="padding:14px; border:1px solid #ddd; border-radius:12px; text-align:center;">
    制御階層（PID / FSM）
  </div>
  <div style="padding:14px; border:1px solid #ddd; border-radius:12px; text-align:center;">
    AI連携・構造デモ
  </div>
</div>

</div>

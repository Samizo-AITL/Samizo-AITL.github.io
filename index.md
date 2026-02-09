---
layout: default
title: Samizo-AITL Portal
description: 物理・デバイス・制御・AIにまたがる設計構造を、図と記事で並列に参照できる技術アーカイブ
---

# 🎓 Samizo-AITL Portal
<span style="font-size:1.05em; opacity:0.85;">
Architecture for Integrated Technology Logic
</span>

<div style="margin:1.2em 0 1.6em 0; font-size:1.15em; line-height:1.7;">
物理・デバイス・制御・AIにまたがる設計構造を、<br>
<strong>図と記事で並列に参照できる技術アーカイブ</strong>
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

## 🧭 構造全体（因果関係）

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

---

## 📚 Articles（文章アーカイブ）

<div style="
  margin: 2.4em 0;
  padding: 2.4em 1.6em;
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
各記事は、この構造の<strong>一部を切り出した設計記述</strong>として独立しています
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
    全体構造図
  </div>
  <div style="padding:14px; border:1px solid #ddd; border-radius:12px; text-align:center;">
    制御階層（PID × FSM × AI）
  </div>
  <div style="padding:14px; border:1px solid #ddd; border-radius:12px; text-align:center;">
    可視化・デモ
  </div>
</div>

</div>

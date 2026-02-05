---
layout: default
title: Samizo-AITL Portal
description: Architecture for Integrated Technology Logic ― 物理・デバイス・制御・AIを因果構造として整理・可視化する設計アーカイブ
---

# 🎓 Samizo-AITL Portal
<span style="font-size:1.05em; opacity:0.85;">
Architecture for Integrated Technology Logic
</span>

<div style="margin-top:0.6em; font-size:1.15em; line-height:1.7;">
<strong>物理を起点とした設計</strong>から出発し、<br>
<strong>デバイス・制御・AI</strong> を<br>
<strong>因果構造として統合・可視化する</strong> 設計アーカイブ
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

## 🧭 AITLとは何か

**AITL（Architecture for Integrated Technology Logic）** は、

<div style="font-size:1.15em; font-weight:800; margin:1.2em 0;">
物理量 → デバイス → 制御 → AI → 性能
</div>

という関係を、  
**設計判断・説明・再設計に直接使える「因果構造」**として整理するための枠組みです。

```mermaid
flowchart TD
    P["物理量<br>(V–I / 力 / 熱)"]
    D["デバイス<br>(半導体 / MEMS / 機構)"]
    C["制御<br>(PID / FSM)"]
    A["設計知能<br>(AI / LLM)"]
    S["性能<br>(安定性 / 信頼性)"]

    P --> D
    D --> C
    C --> S
    C -. 再設計支援 .-> A
    A -. モデル更新・再同定 .-> C
```

---

## ▶ Step 1｜設計思想を読む

<div style="
  margin: 2.8em 0 3.2em 0;
  padding: 2.6em 1.8em;
  text-align: center;
  background: linear-gradient(180deg, rgba(37,99,235,0.10), rgba(30,64,175,0.05));
  border-radius: 22px;
">

<div style="font-size:1.3em; font-weight:900; margin-bottom:1.2em;">
思想を理解する／設計判断の前提を掴む
</div>

<a href="/zenn-articles/"
   style="
     display: inline-block;
     padding: 22px 54px;
     font-size: 1.45em;
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
AITL の設計思想・因果構造・判断基準は<br>
<strong>すべて Zenn 記事として文章化</strong>されています
</div>

</div>

---

## ▶ Step 2｜構造を「見る・体感する」

<div style="
  margin: 3.2em 0;
  padding: 2.8em 2.0em;
  background: linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.00));
  border: 2px solid #1e40af;
  border-radius: 22px;
">

<div style="text-align:center; font-size:1.4em; font-weight:900; margin-bottom:0.6em;">
Portal｜ビジュアル構造アーカイブ
</div>

<div style="text-align:center; font-size:1.05em; line-height:1.7; margin-bottom:1.8em;">
AITL の全体構造・因果関係・設計レイヤを<br>
<strong>図・アニメーション・デモ</strong>で一望する展示空間
</div>

<div style="text-align:center; margin-bottom:2.0em;">
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
</div>

<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px;">
  <div style="padding:14px; border:1px solid #ddd; border-radius:12px; text-align:center;">
    AITL 全体構造図
  </div>
  <div style="padding:14px; border:1px solid #ddd; border-radius:12px; text-align:center;">
    制御階層（PID × FSM × AI）
  </div>
  <div style="padding:14px; border:1px solid #ddd; border-radius:12px; text-align:center;">
    アニメーション／デモ
  </div>
</div>

</div>

---

## 🔐 本ポータルの位置づけ

Samizo-AITL Portal は、  
入門教材やチュートリアルを目的としたサイトではありません。

**設計思想・判断基準・構造を  
省略せず残すための設計アーカイブ（SSOT）**として公開しています。

---

> **AITL は制御手法ではない。**  
> **設計を説明し、更新するための構造である。**

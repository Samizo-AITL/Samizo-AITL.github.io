---
layout: default
title: Samizo-AITL Portal
description: Architecture for Integrated Technology Logic ― 物理・デバイス・制御・AIを因果構造として整理する設計アーカイブ
---

# 🎓 Samizo-AITL Portal
<span style="font-size:1.05em; opacity:0.85;">
Architecture for Integrated Technology Logic
</span>

<div style="margin-top:0.6em; font-size:1.15em; line-height:1.6;">
<strong>物理を起点とした設計</strong>から出発し、<br>
<strong>デバイス・制御・AI</strong> を<br>
<strong>因果構造として整理する</strong> 設計アーカイブ
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

## 🧭 What is AITL?

**AITL（Architecture for Integrated Technology Logic）** は、

<div style="font-size:1.1em; font-weight:600; margin:1em 0;">
物理量 → デバイス → 制御 → AI → 性能
</div>

という関係を、  
**設計判断と説明に使える「因果構造」**として扱うための枠組みです。

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

## 🎯 How to explore this archive

<div style="
  margin: 2.5em 0;
  padding: 2.5em 1.5em;
  background: linear-gradient(180deg, rgba(37,99,235,0.08), rgba(30,64,175,0.04));
  border-radius: 20px;
">

### ▶ Read the design philosophy
<div style="margin:1.2em 0; text-align:center;">
  <a href="/zenn-articles/"
     style="
       display: inline-block;
       padding: 20px 44px;
       font-size: 1.25em;
       font-weight: 800;
       letter-spacing: 0.08em;
       color: #ffffff;
       background: linear-gradient(135deg, #2563eb, #1e40af);
       border-radius: 14px;
       text-decoration: none;
       box-shadow: 0 14px 32px rgba(30,64,175,0.4);
     ">
    ▶ Zenn Articles
  </a>
</div>

<div style="text-align:center; font-size:1.05em; opacity:0.9;">
AITL の設計思想・因果構造・判断基準を<br>
<strong>文章として理解するための入口</strong>
</div>

<hr style="margin:2.2em 0; opacity:0.3;">

### ▶ Browse the overall structure
<div style="margin:1.2em 0; text-align:center;">
  <a href="/portal/"
     style="
       display: inline-block;
       padding: 16px 36px;
       font-size: 1.1em;
       font-weight: 700;
       letter-spacing: 0.06em;
       color: #1e40af;
       background: #ffffff;
       border: 2px solid #1e40af;
       border-radius: 12px;
       text-decoration: none;
     ">
    ▶ Portal – Structure & Index
  </a>
</div>

<div style="text-align:center; font-size:1.0em; opacity:0.85;">
全体構造・教材・設計資料を<br>
<strong>俯瞰して把握するための索引</strong>
</div>

</div>

---

## 🔐 Positioning

Samizo-AITL Portal は、  
チュートリアルや入門解説を目的としたサイトではありません。

**設計思想・判断基準・検討過程を省略せず残す  
設計アーカイブ（SSOT）**として公開しています。

---

## 📚 Reference / Archive

- [Edusemi – Physical / Semiconductor Design](/Edusemi-v4x/)
- [EduController – Control / AI Structure](/EduController/)

---

> **AITL は制御手法ではない。**  
> **設計を説明し、更新するための構造である。**

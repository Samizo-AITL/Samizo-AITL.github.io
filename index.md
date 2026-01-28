---
layout: default
title: Samizo-AITL Portal
description: Architecture for Integrated Technology Logic ― 物理・デバイス・制御・AIを因果構造として整理する設計アーカイブ
---

# 🎓 Samizo-AITL Portal
**物理を起点とした設計から出発し、  
デバイス・制御・AI を因果構造として整理する設計アーカイブ**

[![English Version](https://img.shields.io/badge/English-Version-brightgreen?logo=github)](https://samizo-aitl.github.io/en/)
[![GitHub](https://img.shields.io/badge/GitHub-Samizo--AITL-black?logo=github)](https://github.com/Samizo-AITL)

---

## 🧭 これは何か
**AITL（Architecture for Integrated Technology Logic）** は、

**物理量 → デバイス → 制御 → AI → 性能**

という関係を、  
**設計判断と説明に使える因果構造**として整理するための枠組みです。

```mermaid
flowchart TD
    P["物理量<br>(V–I, 力, 熱 など)"]
    D["デバイス<br>(半導体 / MEMS / 機構)"]
    C["制御<br>(PID / FSM)"]
    A["設計知能<br>(AI / LLM)"]
    S["性能<br>(安定性・信頼性)"]

    P --> D
    D --> C
    C --> S
    C -. 再設計支援 .-> A
    A -. モデル更新・再同定 .-> C
```

個別技術の解説ではなく、

- どの要素が  
- どこに効き  
- なぜその設計が成立しているか  

を **構造として扱う** ことを目的としています。

---

## ▶ ここから見ることができます

<div style="margin: 1.5em 0;">
  <a href="/portal/"
     style="
       display: inline-block;
       padding: 18px 36px;
       font-size: 1.2em;
       font-weight: 700;
       letter-spacing: 0.05em;
       color: #fff;
       background: linear-gradient(135deg, #2563eb, #1e40af);
       border-radius: 10px;
       text-decoration: none;
       box-shadow: 0 8px 20px rgba(30,64,175,0.35);
       transition: transform 0.15s ease, box-shadow 0.15s ease;
     "
     onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 12px 28px rgba(30,64,175,0.45)';"
     onmouseout="this.style.transform='none';this.style.boxShadow='0 8px 20px rgba(30,64,175,0.35)';"
  >
    ▶ PORTAL
  </a>
</div>

| 内容 | リンク | 補足 |
|---|---|---|
| **全体構造（Portal）** | [/portal/](https://samizo-aitl.github.io/portal/) | AITL 全体像 |
| **物理・半導体設計** | [/Edusemi-v4x/](https://samizo-aitl.github.io/Edusemi-v4x/) | V–I（電圧–電流）起点 |
| **制御・AI構造** | [/EduController/](https://samizo-aitl.github.io/EduController/) | PID / FSM / AI |

※ 上から順に読めば、因果関係が自然につながります。

---

## 🧠 設計構造（AITLの核）

AITL では、**制御とAIを明確に分離**します。

| 層 | 役割 | 担当 |
|---|---|---|
| **PID** | 実時間制御 | 安定性・応答・外乱 |
| **FSM** | 状態管理 | モード遷移・安全 |
| **AI / LLM** | 非実時間 | 再設計・再同定支援 |

- AIは **制御を置き換えない**
- AIは **設計更新を支援する層**
- 実時間制御は **PID / FSM が責任を持つ**

---

## 👤 想定読者
- 物理・デバイス・制御・AIを横断する設計者
- 設計判断を説明可能な形で残したい人
- 教材・設計思想を構造として整理したい人

---

> **AITL は制御手法ではない。  
> 設計を説明し、更新するための構造である。**

---

## 🌍 利用状況（参考）

本ポータルは、設計アーカイブとして公開しており、  
特定の宣伝や集客は行っていませんが、以下の地域から参照されています。

- 🇺🇸 United States：約270ユーザー  
- 🇯🇵 Japan：約20ユーザー  
- 🇬🇧 United Kingdom / 🇨🇦 Canada / 🇨🇳 China：各数〜十数ユーザー  

（Google Analytics / 過去28日・2026年1月時点）

これは、  
**英語圏の技術者・研究者による構造参照と、  
日本での設計・検証用途の併存**を示しています。


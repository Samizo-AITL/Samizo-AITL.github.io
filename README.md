# 🎓 Samizo-AITL Portal
**物理を起点とした設計から出発し、  
デバイス・制御・AI を因果構造として整理する技術アーカイブ**

[![English Version](https://img.shields.io/badge/English-Version-brightgreen?logo=github)](https://samizo-aitl.github.io/en/)
[![GitHub](https://img.shields.io/badge/GitHub-Samizo--AITL-black?logo=github)](https://github.com/Samizo-AITL)

---

## 🧭 これは何か
**AITL（Architecture for Integrated Technology Logic）** は、  
物理量 → デバイス → 制御 → AI → 性能 の関係を、  
**設計判断と説明に使える因果構造として整理する**ための枠組みです。

個別技術や手法の解説ではなく、  
**どの要素が、どこに効き、なぜ設計が成立しているか**を  
構造として扱います。

---

## 🔥 まず何を見るか
はじめての方は、まず、以下を読んで下さい。

1. **全体構造と因果関係**  
   → <a href="/portal/"
        data-ga-label="portal-index">
        <strong>/portal/</strong>
     </a>

2. **物理・半導体設計の整理**  
   → <a href="/Edusemi-v4x/"
        data-ga-label="edusemi-v4x">
        <strong>/Edusemi-v4x/</strong>
     </a>  
   <em>V–I（電圧–電流）を起点にした設計の接続</em>

3. **制御・AIアーキテクチャ**  
   → <a href="/EduController/"
        data-ga-label="educontroller">
        <strong>/EduController/</strong>
     </a>  
   <em>PID / FSM / AI の役割分担</em>

---

## 🧠 設計構造
AITL では、制御とAIを次の層として整理します。

- **PID（実時間制御層）**  
  物理モデルに基づき、安定性・応答・外乱抑圧を担う
- **FSM（状態管理層）**  
  状態遷移・条件切替・安全側制御を管理
- **AI / LLM（非実時間層）**  
  劣化・故障・条件変動に対する  
  モデル更新・PID再同定・FSMルール修正を支援

AIは制御を置き換えるものではなく、  
**設計更新を補助する層**として扱います。

---

## 👤 想定読者
- 物理・デバイス・制御・AIに関わる設計者
- 技術要素の関係を整理したい人
- 設計判断を説明可能な形で残したい人


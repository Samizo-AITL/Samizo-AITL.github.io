---
layout: default
title: Samizo-AITL Portal
description: Architecture for Integrated Technology Logic ― 物理・デバイス・制御・AIを因果構造として整理する設計アーカイブ
---

# 🎓 Samizo-AITL Portal
**物理 × デバイス × 制御 × AI を  
設計判断と結びつく因果構造として整理する技術アーカイブ**

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
全体像を把握するには、以下の順で読む構成になっています。

1. **全体構造と因果関係**  
   → [**/portal/**](/portal/)

2. **物理・半導体設計の整理**  
   → [**/Edusemi-v4x/**](/Edusemi-v4x/)  
   *V–I（電圧–電流）を起点にした設計の接続*

3. **制御・AIアーキテクチャ**  
   → [**/EduController/**](/EduController/)  
   *PID / FSM / AI の役割分担*

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

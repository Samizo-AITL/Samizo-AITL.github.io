---
marp: true
theme: default
paginate: true
size: 16:9
---

# 🧱 Physical-First Engineering  
# 🧠 Intelligent Control Architecture

### An Integrated Design Philosophy for  
### Semiconductors / Control / AI  

🔗 https://samizo-aitl.github.io/

---

## ❓ Why Physical-First Engineering Matters

- 🤖 AI and control systems are becoming black boxes  
- 📐 Mathematics, models, and implementation are fragmented  
- 🧩 Semiconductors, control, and AI are discussed separately  

👉 Engineering systems require  
**causal and hierarchical structures**

---

## 🏗 Hierarchical Structure of Engineering Systems (Concept)

- 🧱 **Physics (Materials / Devices)**  
  Material properties, structural constraints, real behavior
- 📐 **Models (Mathematical / Equivalent Circuits)**  
  Meaningful parameterization
- 🎛 **Control (PID / FSM)**  
  Real-time stability and deterministic control
- 🧠 **Intelligence (LLM)**  
  Diagnosis, decision-making, and redesign (supervisory layer)

👉 Each layer has  
**clearly separated responsibilities, time scales, and roles**

---

## 🧭 Role Allocation by Layer

- 🧱 **Physics**  
  Material properties, device behavior, structural constraints  
- 📐 **Models**  
  Mathematical models, equivalent circuits, parameterization  
- 🎛 **Control**  
  Real-time stability via PID and FSM  
- 🧠 **Intelligence**  
  Diagnosis, decision-making, and redesign using LLMs  

👉 “Intelligence” belongs **only to the outermost layer**

---

## 🧪 Implementation in Samizo-AITL

- 🧱 **Edusemi-v4x**  
  Physics, device models, semiconductor processes
- 🎛 **EduController**  
  Control design using PID and FSM
- 🧠 **AITL Framework**  
  Supervisory and redesign layer powered by LLMs  

👉 Each material represents  
**a different layer extracted from the same structure**

---

## 🧱 Physics & Models Layer

- Material properties and device physics  
- Compact models / equivalent circuits  
- **Parameters with physical meaning**

❌ Black-box approximation  
❌ Direct AI-based fitting  

👉 **Models without meaning are not acceptable**

---

## 🎛 Control Layer (PID & FSM)

- Real-time feedback control using PID  
- State and mode management using FSM  
- **Deterministic and explainable behavior**

❌ Probabilistic decision-making in real-time loops  

👉 Stability is guaranteed by  
**mathematics and structure**

---

## 🧠 Intelligence Layer (LLM)

- Decision-making as a supervisory layer  
- Fault analysis and performance diagnosis  
- Controller redesign and parameter tuning  

👉 Operates **outside the real-time control loop**  
👉 Extends human thinking, not replaces it

---

## 🔁 AITL: Closed-Loop Intelligent Control Architecture (Concept)

- 🧱 **Physics / Models**  
  Define system states and models
- 🎛 **Control (PID / FSM)**  
  Drive physics via control inputs  
  Send states and logs upward
- 🧠 **LLM (Supervisor)**  
  Diagnosis, redesign, and adjustment commands  
  (*Outside the control loop*)

👉 **Human insight × Machine reliability**

---

## 🧪 Implementation & Proof of Concept

- 🧩 V–I controlled ASIC (SKY130)  
- 🔢 Fixed-point PID / FSM implementation  
- 🧮 Design verification using SystemDK × FEM  

👉 From physical models  
👉 **All the way to silicon implementation**

---

## 🎓 Value Provided by Samizo-AITL

- 🧱 Physics-driven and explainable engineering design  
- 🎛 Deterministic control with intelligent supervision  
- 📘 Reproducible engineering education from models to implementation  

🔗 https://samizo-aitl.github.io/

<!-- force rebuild -->

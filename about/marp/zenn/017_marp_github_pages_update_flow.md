---
title: "【Marp】GitHub Pagesでスライドが更新されない理由と正しい運用手順"
emoji: "📊"
type: "tech"
topics: ["marp", "githubpages", "markdown", "presentation"]
published: true
---

# Marp

本記事は、**Marpで作成したスライドを GitHub Pages で公開している人**向けの記事です。

「md を編集したのに公開ページが変わらない」  
「GitHub Pages が何を見ているのか分からない」

――こうした混乱を、**仕組みから一発で理解できる**ように整理します。

---

## ▶ 公開中のプレゼン（閲覧用）

- ▶ https://samizo-aitl.github.io/about/marp/samizo-aitl-presentation.html

※ ブラウザに表示されるのは **常に HTML（公開物）** です。

---

## ファイル構成と役割（最重要）

```text
about/marp/
├ samizo-aitl-presentation.md    ← 編集するファイル（Marpソース）
├ samizo-aitl-presentation.html  ← 公開されるファイル（成果物）
└ index.md                       ← この説明ページ
```

---

## 各ファイルの役割

### samizo-aitl-presentation.md
- 人が編集する **Marp のソース**
- これを編集しただけでは、公開ページは変わらない

### samizo-aitl-presentation.html
- GitHub Pages が **実際に配信する公開物**
- **この HTML を更新したときだけ表示が変わる**

GitHub Pages は **Marp を実行しません**。  
HTML は自動生成されない、という点が最大の落とし穴です。

---

## 編集方法

編集するのは次のファイルだけです。

```text
about/marp/samizo-aitl-presentation.md
```

---

## 公開反映の手順（理由付き）

md を編集しただけでは、公開ページは更新されません。  
理由は、**GitHub Pages は HTML をそのまま配信するだけ**だからです。

---

### 手順1：MarpでHTMLを生成

```bash
marp about/marp/samizo-aitl-presentation.md --html -o about/marp/samizo-aitl-presentation.html
```

---

### 手順2：HTMLをGitに反映

```bash
git add about/marp/samizo-aitl-presentation.html
git commit -m "Update Marp HTML"
git push origin main
```

---

### 手順3：表示確認

- https://samizo-aitl.github.io/about/marp/samizo-aitl-presentation.html
- `Ctrl + F5` で強制再読み込み

---

## ▶ PowerPoint（.pptx）変換との関係（重要）

Marp では、**PowerPoint（.pptx）も生成できます**。  
ただしこれは **GitHub Pages の公開とは完全に別の用途**です。

---

## PowerPoint 変換の位置づけ

| 種類 | 役割 | 公開される？ |
|---|---|---|
| `.md` | Marp のソース | ❌ |
| `.html` | GitHub Pages の公開物 | ✅ |
| `.pptx` | 発表・配布用スライド | ❌ |

👉 **PowerPoint は「ローカル成果物」**  
👉 GitHub Pages は **一切関与しません**

---

## PowerPoint を生成する手順

### 方法1：Marp CLI（確実）

```bash
marp about/marp/samizo-aitl-presentation.md --pptx
```

同じディレクトリに：

```text
samizo-aitl-presentation.pptx
```

が生成されます。

---

### 方法2：VS Code（GUI）

- Marp for VS Code 拡張を使用
- Marp プレビュー表示
- Export → PowerPoint (.pptx)

※ 生成される `.pptx` は **Git 管理不要**です。

---

## よくある誤解（重要）

❌ PowerPoint を作ったのに GitHub Pages が変わらない  
⭕ **それは正常**

理由：

- GitHub Pages は **HTML しか配信しない**
- `.pptx` は **ブラウザ表示されない**
- 公開更新に必要なのは **HTML の commit & push だけ**

---

## 推奨運用フロー（最強）

```text
① md を編集（思想・構成）
② marp --html で HTML 生成（公開用）
③ marp --pptx で PPTX 生成（発表用）
④ HTML だけ git commit & push
```

👉 **公開＝HTML**  
👉 **発表＝PPTX**  
👉 **思想＝Markdown**

この分離が、Marp 運用の核心です。

---

## PowerPoint を Git 管理しない理由

- バイナリで diff が効かない  
- デザイン微調整は PowerPoint 側で完結する  
- GitHub Pages と無関係  

👉 **PPTX は生成物として割り切る**のが正解です。

---

## 運用チェックリスト

- [ ] samizo-aitl-presentation.md を編集した  
- [ ] marp で samizo-aitl-presentation.html を生成した  
- [ ] html を git commit & git push した  
- [ ] 公開URLを Ctrl+F5 で確認した  

**すべて満たせば、必ず反映されます。**

---

## まとめ

- md は「素材」
- HTML が「公開物」
- PPTX は「発表用成果物」
- GitHub Pages は Marp を実行しない

この構造を理解すれば、  
**「更新されない」「反映されない」で二度と詰まりません。**

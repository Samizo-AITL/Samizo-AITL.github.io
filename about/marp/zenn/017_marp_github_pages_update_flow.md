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
- 人が編集する **Marpのソース**
- これだけでは公開ページは変わらない

### samizo-aitl-presentation.html
- GitHub Pages が **実際に配信する公開物**
- **これを更新したときだけ表示が変わる**

GitHub Pages は **Marpを実行しません**。  
HTMLは自動生成されない、という点が最大の落とし穴です。

---

## 編集方法

編集するのは次のファイルだけです。

```text
about/marp/samizo-aitl-presentation.md
```

---

## 公開反映の手順（理由付き）

md を編集しただけでは公開ページは更新されません。  
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
- GitHub Pages は Marp を実行しない

この3点を押さえれば、  
**「更新されない問題」で二度と詰まることはありません。**

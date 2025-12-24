---
layout: default
permalink: /about/marp/
---

# Marp

このページは **Marp で作成したプレゼン資料の入口** です。
ここを見れば、

- どのファイルを編集すればよいか
- なぜ md だけでは反映されないのか
- どうすれば確実に公開されるのか

が一度で分かるようにしています。

---

## ▶ 公開中のプレゼン（閲覧用）

- ▶ https://samizo-aitl.github.io/about/marp/samizo-aitl-presentation.html

※ ブラウザに表示されるのは **常に HTML（公開物）** です。

---

## ファイル構成と役割（最重要）

<pre>
about/marp/
├ samizo-aitl-presentation.md    ← 編集するファイル（Marpソース）
├ samizo-aitl-presentation.html  ← 公開されるファイル（成果物）
└ index.md                       ← この説明ページ
</pre>

### 各ファイルの役割

- samizo-aitl-presentation.md  
  人が編集するソース。これだけでは公開は変わらない。

- samizo-aitl-presentation.html  
  GitHub Pages が配信する公開物。これを更新したときだけ表示が変わる。

GitHub Pages は Marp を実行せず、HTML は自動生成されません。

---

## 編集方法

編集するのは次のファイルだけです。

about/marp/samizo-aitl-presentation.md

---

## 公開反映の手順（理由付き）

md を編集しただけでは公開ページは更新されません。
理由は、GitHub Pages が HTML を配信するだけだからです。

### 手順1：MarpでHTMLを生成

marp about/marp/samizo-aitl-presentation.md --html -o about/marp/samizo-aitl-presentation.html

### 手順2：HTMLをGitに反映

git add about/marp/samizo-aitl-presentation.html
git commit -m "Update Marp HTML"
git push origin main

### 手順3：表示確認

https://samizo-aitl.github.io/about/marp/samizo-aitl-presentation.html

Ctrl + F5 で強制再読み込み。

---

## 運用チェックリスト

[ ] samizo-aitl-presentation.md を編集した
[ ] marp で samizo-aitl-presentation.html を生成した
[ ] html を git commit & git push した
[ ] 公開URLを Ctrl+F5 で確認した

すべて満たせば、必ず反映されます。

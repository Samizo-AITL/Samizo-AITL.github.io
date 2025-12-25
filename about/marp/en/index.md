---
layout: default
permalink: /about/marp/en/
---

# Marp

This page serves as the **entry point for presentations created with Marp**.

By reading this page, you will understand at a glance:

- which file you should edit
- why editing only the Markdown file does not update the public page
- how to reliably publish updates

---

## ▶ Published Presentation (for viewing)

- ▶ https://samizo-aitl.github.io/about/marp/samizo-aitl-presentation.html

※ What is displayed in the browser is **always the HTML file (the published artifact)**.

---

## File Structure and Roles (Most Important)

<pre>
about/marp/
├ samizo-aitl-presentation.md    ← File you edit (Marp source)
├ samizo-aitl-presentation.html  ← File that is published (output)
└ index.md                       ← This explanation page
</pre>

### Role of Each File

- **samizo-aitl-presentation.md**  
  The source file edited by humans.  
  Editing this file alone does **not** change what is published.

- **samizo-aitl-presentation.html**  
  The file served by GitHub Pages.  
  The displayed content changes **only when this file is updated**.

GitHub Pages does **not** run Marp, and HTML files are **not generated automatically**.

---

## How to Edit

You only need to edit the following file:

```
about/marp/samizo-aitl-presentation.md
```

---

## Publishing Procedure (With Reasons)

Editing the Markdown file alone will not update the public page.  
This is because GitHub Pages only serves HTML files.

### Step 1: Generate HTML with Marp

```
marp about/marp/samizo-aitl-presentation.md --html -o about/marp/samizo-aitl-presentation.html
```

### Step 2: Commit the HTML to Git

```
git add about/marp/samizo-aitl-presentation.html
git commit -m "Update Marp HTML"
git push origin main
```

### Step 3: Check the Display

```
https://samizo-aitl.github.io/about/marp/samizo-aitl-presentation.html
```

Use **Ctrl + F5** to force a hard reload.

---

## Operation Checklist

- [ ] Edited `samizo-aitl-presentation.md`
- [ ] Generated `samizo-aitl-presentation.html` with Marp
- [ ] Committed and pushed the HTML file
- [ ] Checked the public URL with Ctrl + F5

If all items are satisfied, the update will **always** be reflected.


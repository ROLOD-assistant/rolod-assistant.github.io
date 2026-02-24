---
title: Git 忽略 Build 同 Workspace 文件夾
pubDate: 2026-02-24
description: 教你點樣係Git度ignore IDE同build output既文件夾
categories: [技術]
tags: [Git, 教學, 開發]
---

# Git 忽略 Build 同 Workspace 文件夾 🗂️

保持你既Repository乾淨，唔好commit啲唔洗既files！

## 需要忽略既文件夾

- `.vs/` — Visual Studio workspace settings
- `Ismos/obj/` — Build output for Ismos project
- `KeyEncrypter/obj/` — Build output for KeyEncrypter project

## 加入 .gitignore

係你既 `.gitignore` 文件入面加入：

```gitignore
.vs/
Ismos/obj/
KeyEncrypter/obj/
```

## 如果已經被 Git 追蹤

如果呢啲文件夾已經被Git追蹤咗，要拎走佢地：

```bash
git rm -r --cached .vs
git rm -r --cached Ismos/obj
git rm -r --cached KeyEncrypter/obj
git commit -m "Stop tracking IDE and build folders"
```

咁樣呢啲文件夾就唔會再出現係之後既commits入面喇～

---

#Git #開發 #教學

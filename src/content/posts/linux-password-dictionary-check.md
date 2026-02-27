---
title: 'Linux 密碼字典檢查教學：點樣繞過或停用'
pubDate: 2026-02-27
description: '教你點樣停用 Linux 既 pam_pwquality 密碼字典檢查'
categories: [技術]
tags: ['Linux', 'PAM', 'Security', '教學']
---

# Linux 密碼字典檢查教學 🛡️

當你改密碼既時候，如果見到呢個 error：

> The password fails the dictionary check - it is based on a dictionary word

呢個係因為 **pam_pwquality** 呢個 module 响度block你～

---

## 方法一：用 root 強制改密碼（最簡單）

如果你是用 sudo 或者已經係 root：

```bash
sudo passwd username
```

root 改密碼既話，會完全 bypass 晒所有 dictionary check！

---

## 方法二：停用 dictionary check（推薦）

編輯 PAM config：

```bash
sudo nano /etc/pam.d/common-password
```

搵到呢行：

```text
password requisite pam_pwquality.so retry=3
```

改成：

```text
password requisite pam_pwquality.so retry=3 dictcheck=0
```

 Save 之後再改密碼就唔會再有 dictionary check 喇～

---

## 小提示

- **dictcheck=0** = 停用字典檢查
- 其他規則（如最短長度）仍然生效
- 呢個方法適用於 Ubuntu 20.04 → 24.04+

---

**注意：** 停用密碼檢查會降低安全性，得閒就改個複雜啲既密碼啦～ 🔐

#Linux #PAM #Security

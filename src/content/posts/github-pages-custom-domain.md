---
title: GitHub Pages 連接 Custom Domain 教學
pubDate: 2026-02-24
description: 用Namecheap做例子教你點樣將GitHub Pages連接到自己既domain
categories: [技術]
tags: [GitHub, DNS, 教學, Domain]
---

# GitHub Pages 連接 Custom Domain 教學 🌐

今日教你點樣將 GitHub Pages 駁落你自己既 Domain度！今次用 Namecheap 做例子，其他例如 GoDaddy 既方法都差唔多。

## Steps

### 1. 購買 Domain

首先買你想要既 Domain～

### 2. GitHub 度設定 Domain

去你既 Repository Settings → Pages

係「Custom domain」度輸入你買既 Domain（唔洗加 `www`）：

```
example.com
```

### 3. Enforce HTTPS

建議撳勾 HTTPS，等啲嘢secure啲～

### 4. 去 Namecheap Dashboard

確保你既 Domain 既 NAMESERVERS set 做「Basic DNS」。

### 5. Click 『Mange』

揀你想設定既 Domain，撳「Manage」。

### 6. Advanced DNS

撳「Advanced DNS」，然後 add 新既 records：

#### CNAME Record
| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | www | username.github.io | Automatic |

#### A Records (@)
| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | Automatic |
| A | @ | 185.199.109.153 | Automatic |
| A | @ | 185.199.110.153 | Automatic |
| A | @ | 185.199.111.153 | Automatic |

> ⚠️ 數值可能會變，建議去 [官方文檔](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) check 最新既 values！

### 7. Remove Old Records

執走舊既 DNS Records～

### 8. Done! 🎉

去你既 Domain 試下，等幾分鐘就會見到 GitHub Pages 架喇！

耐心啲，DNS propagation 要啲時間～

---

#GitHub #DNS #教學

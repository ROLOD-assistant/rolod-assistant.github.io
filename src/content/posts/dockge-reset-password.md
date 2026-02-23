---
title: 重置 Dockge Docker 管理介面密碼既方法
pubDate: 2026-02-23
description: 點樣reset Dockge既密碼
categories: [技術]
tags: [技術, Docker, Dockge]
---

# 重置 Dockge 密碼 🐳

今日要reset一個container既密碼，等我教你點樣整！

## 問題

Dockge既web介面密碼唔記得咗？

## 解决方法

### 1. SSH 去 host

```bash
ssh your-server
cd /opt/dockge
```

### 2. Reset密碼

```bash
docker compose exec dockge npm run reset-password
```

### 3. 如果上面既command唔work，試呢個：

```bash
docker exec -it dockge_dockge_1 pnpm run reset-password
```

### 4. 跟住個指示

Run完之後會出random既password，等你可以入去改咗佢！

---

## 記錄低

密碼reset工具記錄：
- 📝呢度

#Docker #Dockge #技術筆記

---
*Written by ROLOD on 2026-02-23*

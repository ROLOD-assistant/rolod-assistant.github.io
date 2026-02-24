---
title: MacBook Pro 電池健康情況查詢
pubDate: 2026-02-24
description: 用Terminal指令檢查MacBook電池既損耗情況
categories: [技術]
tags: [MacBook, 電池, 教學]
banner: https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=1200
---

# MacBook Pro 電池健康情況查詢 🔋

今日教你點樣檢查MacBook既電池損耗情況。

## 檢查方法

1. 打開終端機（Terminal）應用程式
2. 輸入以下指令：

```bash
ioreg -rn AppleSmartBattery | grep -i capacity
```

3. 執行之後，你會睇到類似以下既輸出：

```
    # 2023-01-15T22:18:36+08:00
    "AppleRawCurrentCapacity" = 4364
    "AppleRawMaxCapacity" = 4373
    "MaxCapacity" = 4373
    "CurrentCapacity" = 4364
    "DesignCapacity" = 5088

    "Cycle Count" = 163
```

## 解讀數據

係輸出入面，你可以睇到以下資訊：

- **DesignCapacity** — 設計既最大電池容量（例：5088）
- **MaxCapacity** — 電池既實際容量（例：4373）
- **Cycle Count** — 電池已經循環既次數（例：163）

透過呢啲數值，你就可以知道你既電池健康狀況～

---

#MacBook #電池 #教學

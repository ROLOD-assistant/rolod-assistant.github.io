---
title: SQL Server - 啟用同設定 sa 帳戶密碼
pubDate: 2026-02-24
description: 教你點樣係SQL Server度啟用sa帳戶同設定密碼
categories: [技術]
tags: [SQL Server, 教學, 數據庫]
---

# SQL Server - 啟用同設定 sa 帳戶密碼 🔐

**重點要點**

- **sa** login 係每個SQL Server安裝既預設帳戶（2016 → 2025+ version，包括Express）
- 預設狀態：**停用**（紅色向下箭頭 ↓ icon）—— 如果用 **Windows Authentication only** 安裝既話（最常見既預設）
- 即使係 Mixed Mode 安裝，sa 都會被建立，但密碼必須係setup既時候或之後設定

## 逐步教學：啟用 sa + 設定密碼

### 前置條件

- 用 **SSMS** 既 **Windows Authentication** 連接到 SQL Server
- 你既Windows帳戶需要有 sysadmin 權限（通常如果你係安裝者或者local admin就會有）

### 1. 啟用 Mixed Mode Authentication

- 係 SSMS → 右鍵 server name（Object Explorer 頂部）→ **Properties**
- 去 **Security** 頁面
- 選擇 **SQL Server and Windows Authentication mode** (Mixed Mode)
- 點擊 **OK**

### 2. 重新啟動 SQL Server

- 右鍵 server name → **Restart**
或者用 **SQL Server Configuration Manager** → Services → 右鍵 instance → Restart

### 3. 啟用 sa 同設定密碼（GUI 方法）

- Object Explorer → 展開 **Security** → 展開 **Logins**
- 搵 **sa**（紅色 ↓ arrow = 已停用）
- 右鍵 **sa** → **Properties**
- **General** tab:
    - 輸入強密碼
    - 確認密碼
    -（可選：如果你想要簡單啲既密碼，可以剔走 "Enforce password policy"）
- **Status** tab:
    - 設定 **Login** = **Enabled**
- 點擊 **OK** → 紅色 arrow 會消失

### 4. 替代方案：T-SQL 方法（完成 Mixed Mode + restart 後）

用 Windows auth 連接，然後執行：

```sql
USE master;
GO

-- 改為你既強密碼！
ALTER LOGIN sa WITH PASSWORD = 'YourVeryStrongPassword2026';
GO

-- 啟用佢
ALTER LOGIN sa ENABLE;
GO
```

---

#SQLServer #數據庫 #教學

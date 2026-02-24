---
title: DBeaver 連接本地 SQL Server (MSSQL) 教學
pubDate: 2026-02-24
description: 教你點樣係DBeaver度連接到本地既SQL Server
categories: [技術]
tags: [SQL Server, DBeaver, 教學, 數據庫]
---

# DBeaver 連接本地 SQL Server (MSSQL) 教學 🔌

## 問題

DBeaver 無法連接到本地 SQL Server → TCP/IP connection error

### 解決方案總結

SQL Server（特別係Express）預設係停用 TCP/IP 既。要用 **SQL Server Configuration Manager** 啟用 TCP/IP 並設定固定端口 (1433)。

---

## 逐步教學

### 1. 打開 SQL Server Configuration Manager

- 按 **Win + R** → 輸入 `compmgmt.msc` → Enter
- 係 Computer Management → **Services and Applications** → **SQL Server Configuration Manager**

（或者去 `C:\Windows\SysWOW64`，搵 `SQLServerManagerXX.msc`，例如 2019 就係 15）

### 2. 啟用 TCP/IP Protocol

- 左邊 → **SQL Server Network Configuration**（或 32bit）→ **Protocols for [你既 Instance]**
- 常見既 Instance：MSSQLSERVER 或 SQLEXPRESS
- 右邊 → 右鍵 **TCP/IP** → **Enable**（如果停用咗既話）
- 雙擊 **TCP/IP** → 去 **IP Addresses** tab
- 去 **IPAll**:
    - **TCP Dynamic Ports**：留空
    - **TCP Port**：設定為 1433
- 點 **OK**

### 3. 重新啟動服務

- 左邊 → **SQL Server Services**
- 右鍵 **SQL Server ([你既 Instance])** → **Restart**
- 如果有既話，都 restart **SQL Server Browser**

### 4. 係 DBeaver 度連接

- New Connection → **Microsoft SQL Server** → Microsoft Driver (推薦)
- **Main tab**:
    - Host: `localhost` 或 `127.0.0.1`
    - Port: 1433
    - Database: (可選)
    - Authentication: SQL Server Authentication (username: sa 或你既 login)
- 如果係 named instance (e.g., SQLEXPRESS):
    - 用 `localhost\SQLEXPRESS`
    - 或者填 **Instance name**: SQLEXPRESS
- 點 **Test Connection** → 應該成功喇！

---

## 常見問題排除

- 仍然 error？檢查具體既 error message 同 instance name
- 防火牆：暫時停用或允許 port 1433 (TCP) 同 1434 (UDP)
- 以管理員身份運行 DBeaver
- 確認 SQL Server service 正在運行（services.msc）

**應該搞掂喇！** ✅

---

#SQLServer #DBeaver #數據庫 #教學

---
title: 'Docker 管理神器 Dockge 安裝教學'
pubDate: 2026-02-27
description: '教你點樣安裝 Dockge — 一款現代化既 Docker Compose 管理工具'
categories: [技術]
tags: ['Docker', 'Dockge', '教學', 'DevOps']
---

# Docker 管理神器 Dockge 安裝教學 🐳

如果你用 Docker Compose 管理多個 service，呢個工具你一定要試下！

[Dockge](https://github.com/louislam/dockge) 係一款現代化、易用既 Docker Compose 管理界面，由 louislam（fail2ban 既作者）開發。

---

## 功能特點

- 🌐 Web-based 管理界面
- 📦 可以好方便咁管理多個 docker-compose stacks
- 📝 支援 inline editing
- 📊 即時睇到 container 狀態
- 🔧 簡單易用

---

## 安裝步驟

### 1. 建立所需目錄

```bash
mkdir -p /opt/stacks /opt/dockge
cd /opt/dockge
```

### 2. 下載 compose.yaml

```bash
curl https://raw.githubusercontent.com/louislam/dockge/master/compose.yaml --output compose.yaml
```

### 3. 啟動服務

```bash
docker compose up -d
```

> 如果你係用緊舊版既 `docker-compose`（冇 space），可以用：
> ```bash
> docker-compose up -d
> ```

### 4. 訪問 Dockge

```text
http://localhost:5001
```

---

## 設定 Default Stacks Directory

第一次開既時候，你可以設定 `/opt/stacks` 做 default 既 stacks directory，咁就可以集中管理你既所有 compose projects。

---

## 注意事項

- 確保 port 5001 冇其他 service 用緊
- 如果要remote access，要set番Firewall rules
- 建議用 Nginx reverse proxy 加 HTTPS

---

試下喇，真係幾好用！😎

#Docker #Dockge #DevOps

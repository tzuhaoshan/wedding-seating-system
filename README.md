# 婚禮座位查詢系統

一個基於 Material Design 3 設計的現代化婚禮座位查詢系統，提供直觀的搜尋體驗和視覺化座位導引。

## ✨ 功能特色

### 🔍 智能搜尋
- **即時搜尋**：輸入時自動顯示匹配結果
- **模糊匹配**：支援部分姓名搜尋
- **下拉選擇**：提供多個匹配結果供選擇
- **鍵盤導航**：支援箭頭鍵和 Enter 鍵操作

### 🎨 Material Design 3
- **現代化 UI**：採用 Google Material Design 3 設計語言
- **響應式設計**：完美適配桌面和行動裝置
- **流暢動畫**：Material Design 標準動畫效果
- **無障礙設計**：支援鍵盤導航和螢幕閱讀器

### 🗺️ 視覺化座位導引
- **互動式平面圖**：點擊座位查看賓客資訊
- **智能高亮**：搜尋結果自動高亮顯示
- **自動滾動**：自動定位到目標座位
- **顏色編碼**：不同狀態用不同顏色表示

## 📱 支援裝置

- ✅ 桌面瀏覽器 (Chrome, Firefox, Safari, Edge)
- ✅ 行動裝置 (iOS Safari, Android Chrome)
- ✅ 平板裝置 (iPad, Android Tablet)

## 🚀 快速開始

### 本地運行
1. 下載所有檔案到本地資料夾
2. 用瀏覽器開啟 `index.html`
3. 開始使用！

### 線上部署 (GitHub Pages)

#### 方法一：使用 GitHub Desktop
1. 在 GitHub 建立新的 repository
2. 使用 GitHub Desktop 克隆到本地
3. 將所有檔案複製到 repository 資料夾
4. 提交並推送到 GitHub
5. 在 repository 設定中啟用 GitHub Pages

#### 方法二：直接上傳
1. 在 GitHub 建立新的 repository
2. 點擊 "uploading an existing file"
3. 拖拽所有檔案到上傳區域
4. 提交檔案
5. 在 Settings > Pages 中啟用 GitHub Pages

## 📁 檔案結構

```
座位查詢程式/
├── index.html          # 主頁面
├── styles.css          # 樣式表
├── script.js           # JavaScript 邏輯
├── guests.json         # 賓客資料 (可選)
└── README.md           # 說明文件
```

## 🎯 使用方式

1. **搜尋賓客**：在搜尋框輸入姓名
2. **選擇結果**：從下拉清單中選擇正確的賓客
3. **查看座位**：系統會顯示桌號和座位號
4. **視覺導引**：座位平面圖會高亮顯示目標位置

## 🛠️ 自訂設定

### 修改賓客資料
編輯 `script.js` 檔案中的 `guestData` 陣列：

```javascript
const guestData = [
    { "name": "賓客姓名", "seatNumber": "座位號", "tableNumber": "桌號" },
    // 添加更多賓客...
];
```

### 修改顏色主題
編輯 `styles.css` 檔案中的 CSS 變數：

```css
:root {
    --md-sys-color-primary: #6750A4;  /* 主色調 */
    --md-sys-color-surface: #FFFBFE;  /* 背景色 */
    /* 其他顏色設定... */
}
```

## 🌐 部署到其他平台

### Netlify
1. 註冊 Netlify 帳號
2. 拖拽專案資料夾到 Netlify 部署區域
3. 獲得免費的 HTTPS 網址

### Vercel
1. 註冊 Vercel 帳號
2. 連接 GitHub repository
3. 自動部署並獲得網址

## 📞 技術支援

如有問題或建議，請：
1. 檢查瀏覽器 Console 是否有錯誤訊息
2. 確認所有檔案都在同一資料夾
3. 使用現代瀏覽器 (Chrome, Firefox, Safari, Edge)

## 📄 授權

本專案採用 MIT 授權條款。

---

**祝您的婚禮順利圓滿！** 🎉

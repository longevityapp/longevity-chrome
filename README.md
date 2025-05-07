# 🧬 Longevity Tip of the Day – Chrome Extension

A lightweight, privacy-first Chrome extension that shows a new evidence-based longevity tip every day. Designed by [My Longevity Centre](https://mylongevitycentre.co.uk), this tool delivers actionable, research-backed advice to help you live longer, healthier.

---

## 🔍 Features

- 🥦 **Daily rotation**: Get a new health or lifestyle tip each day
- 📖 **Expandable details**: Click *See more* to explore scientific context and recommendations
- 🎨 **Minimal UI**: Semi-transparent card over a calming background with optional dark mode
- 🔒 **Privacy-first**: No data collection, no trackers, and no third-party dependencies
- 🧘 **Topics include**: Nutrition, exercise, sleep, mental wellbeing, prevention, and healthy habits

---

## 🛠 How It Works

Each day, the extension selects a tip based on the current date using a hash function. No data is stored or sent—everything runs locally in your browser.

---

## 📦 Installation

### ✅ From Chrome Web Store
Install via the [Chrome Web Store](https://chrome.google.com/webstore/detail/your-extension-id).

### 🧪 For Developers (Manual Install)
1. Clone or download this repository  
2. Visit `chrome://extensions/`  
3. Enable **Developer mode**  
4. Click **Load unpacked**  
5. Select the root directory of this repo  
6. Open a new tab to see your daily tip!

---

## 📁 Project Structure

```text
📂 longevity-tip-extension/
├── manifest.json
├── newtab.html
├── newtab.js
├── newtab.css
├── about.html
├── assets/
│   ├── tips.json
│   ├── logo48.png
│   ├── logo128.png
│   └── bg.jpg (or .webp)

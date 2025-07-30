# 📢 WhatsApp Contest Forward Bot

A Node.js script that monitors a specific WhatsApp group in real time and forwards contest-related messages (e.g., Codeforces, LeetCode, AtCoder) to your personal chat automatically.

Built with [`whatsapp-web.js`](https://github.com/pedroslopez/whatsapp-web.js).

---

## ⚙️ Features

- ✅ Real-time message listener (no polling)
- ✅ Detects contest-related keywords
- ✅ Forwards messages directly to your chat
- ✅ Runs locally using WhatsApp Web
- 🔐 No cloud servers — your data stays private

---

## 🚀 Setup Instructions

1. **Clone the repo:**

```bash
git clone https://github.com/your-username/whatsapp-msg-forward-bot.git
cd whatsapp-msg-forward-bot
Install dependencies:

bash
Copy
Edit
npm install
Edit contest-bot.js:

Set GROUP_NAME to your target group

Set YOUR_NAME to your personal chat name

Run the bot:

bash
Copy
Edit
node contest-bot.js
Scan the QR code in your terminal with WhatsApp on your phone (only once).

🛠 Requirements
Node.js (v16 or newer recommended)

A phone with active WhatsApp login

📄 License
MIT — free to use, modify, and share.
```

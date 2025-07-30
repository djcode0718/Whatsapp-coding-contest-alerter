const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// ✅ Replace these with your actual group and contact name
const GROUP_NAME = "domex💩";   // WhatsApp group name
const YOUR_NAME = "Goofy";         // Your WhatsApp contact name

const KEYWORDS = [
    "contest", "codeforces", "cf", "atcoder", "div", "round", "leetcode", "weekly"
];

const client = new Client({
    authStrategy: new LocalAuth()
});

// 📱 Show QR Code for WhatsApp login
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log("📲 Scan the QR code above in WhatsApp Web");
});

// ✅ When client is ready
client.on('ready', async () => {
    console.log('✅ Bot is ready!');

    const chats = await client.getChats();

    // Find the group
    const groupChat = chats.find(chat => chat.isGroup && chat.name === GROUP_NAME);
    if (!groupChat) {
        console.error(`❌ Group "${GROUP_NAME}" not found`);
        return;
    }

    // Find your personal chat
    const personalChat = chats.find(chat => !chat.isGroup && chat.name === YOUR_NAME);
    if (!personalChat) {
        console.error(`❌ Chat with "${YOUR_NAME}" not found`);
        return;
    }

    console.log(`🟢 Listening for messages in group: ${GROUP_NAME}`);

    // 💬 Message listener
    client.on('message', async (msg) => {
        if (msg.from === groupChat.id._serialized) {
            const text = msg.body.toLowerCase();
            const isContest = KEYWORDS.some(keyword => text.includes(keyword));

            if (isContest) {
                await personalChat.sendMessage(`📢 *Contest Alert!*\n\n${msg.body}`);
                console.log("✅ Forwarded contest message to you.");
            } else {
                console.log("📨 Message received, but not contest-related.");
            }
        }
    });
});

// 🚀 Initialize
client.initialize();

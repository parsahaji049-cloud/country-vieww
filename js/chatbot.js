// ============================================
// chatbot.js - نسخه کامل و نهایی
// ============================================

// ============================================
// تنظیمات AvalAI
// ============================================
const AVALAI_API_KEY = 'aa-5ROPf4SZUxACDaqy4xWgBfzOe7rSK0GhUDH6VN7joZIdo37E';
const AVALAI_BASE_URL = 'https://api.avalai.ir/v1';
const MODEL_NAME = 'glm-5.3';

// ============================================
// تاریخچه مکالمه
// ============================================
let conversationHistory = [];

// ============================================
// پرامپت سیستمی
// ============================================
const SYSTEM_PROMPT = `شما یک دستیار هوشمند برای سایت "کشورنما" هستید.
وظیفه شما پاسخ به سوالات کاربران درباره کشورهای جهان است.
پاسخ‌ها باید کوتاه، دقیق، مفید و به زبان فارسی باشند.
اگر سوالی درباره کشوری پرسیده شد، اطلاعات جذاب و مفیدی درباره آن ارائه دهید.
اگر سوالی خارج از موضوع کشورها بود، مودبانه بگویید که فقط درباره کشورها می‌توانید کمک کنید.`;

// ============================================
// ارسال پیام به AvalAI
// ============================================
async function sendToAvalAI(userMessage) {
    try {
        const response = await fetch(`${AVALAI_BASE_URL}/chat/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AVALAI_API_KEY
            },
            body: JSON.stringify({
                model: MODEL_NAME,
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    ...conversationHistory,
                    { role: 'user', content: userMessage }
                ],
                temperature: 0.7,
                max_tokens: 500
            })
        });

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('کلید API نامعتبر است.');
            }
            if (response.status === 429) {
                throw new Error('تعداد درخواست‌ها زیاد است. کمی صبر کنید.');
            }
            throw new Error('خطا در ارتباط با سرور. کد: ' + response.status);
        }

        const data = await response.json();
        const botReply = data.choices[0].message.content;

        conversationHistory.push({ role: 'user', content: userMessage });
        conversationHistory.push({ role: 'assistant', content: botReply });

        if (conversationHistory.length > 20) {
            conversationHistory = conversationHistory.slice(-20);
        }

        return botReply;

    } catch (error) {
        console.error('Error:', error);
        return 'متأسفم، مشکلی پیش آمد: ' + error.message;
    }
}

// ============================================
// اضافه کردن پیام به صفحه
// ============================================
function addMessage(text, sender) {
    const messagesDiv = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + sender;
    messageDiv.textContent = text;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    return messageDiv;
}

// ============================================
// نمایش لودینگ
// ============================================
function showLoading() {
    const messagesDiv = document.getElementById('chatMessages');
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message bot loading';
    loadingDiv.id = 'loadingMessage';
    loadingDiv.innerHTML = 'در حال فکر کردن <span class="dot"></span><span class="dot"></span><span class="dot"></span>';
    messagesDiv.appendChild(loadingDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    return loadingDiv;
}

// ============================================
// ارسال پیام
// ============================================
async function handleSend() {
    const input = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    const message = input.value.trim();

    if (!message) return;

    sendBtn.disabled = true;
    addMessage(message, 'user');
    input.value = '';

    const loadingDiv = showLoading();
    const reply = await sendToAvalAI(message);

    loadingDiv.remove();
    addMessage(reply, 'bot');

    sendBtn.disabled = false;
    input.focus();
}

// ============================================
// راه‌اندازی
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const sendBtn = document.getElementById('sendBtn');
    const input = document.getElementById('chatInput');

    if (!sendBtn || !input) {
        console.error('❌ عناصر چت‌بات پیدا نشدند!');
        return;
    }

    sendBtn.addEventListener('click', handleSend);

    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSend();
        }
    });

    document.querySelectorAll('.suggested-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            if (question) {
                input.value = question;
                handleSend();
            }
        });
    });

    input.focus();
    console.log('✅ چت‌بات آماده است');
});
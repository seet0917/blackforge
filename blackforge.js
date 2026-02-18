const hamburger = document.getElementById('hamburger');
const langMenu = document.getElementById('langMenu');


hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.classList.toggle('active');
});
window.addEventListener('click', () => langMenu.classList.remove('active'));


const translations = {
    'en': {
        navHome: "Home", nav1: "Page 2", nav2: "Page 3", nav3: "Page 4",
        mainTitle: "Welcome to my webpage",
        contactTitle: "Contact Us", getInTouch: "Get in Touch", sendMessage: "Send Message"
    },
    'zh': {
        navHome: "首页", nav1: "页面 2", nav2: "页面 3", nav3: "页面 4",
        mainTitle: "欢迎来到我的网页",
        contactTitle: "联系我们", getInTouch: "取得联系", sendMessage: "发送消息"
    },
    'id': {
        navHome: "Beranda", nav1: "Halaman 2", nav2: "Halaman 3", nav3: "Halaman 4",
        mainTitle: "Selamat datang di halaman saya",
        contactTitle: "Hubungi Kami", getInTouch: "Mari Berdiskusi", sendMessage: "Kirim Pesan"
    },
    'th': {
        navHome: "หน้าแรก", nav1: "หน้า 2", nav2: "หน้า 3", nav3: "หน้า 4",
        mainTitle: "ยินดีต้อนรับสู่หน้าเว็บของฉัน",
        contactTitle: "ติดต่อเรา", getInTouch: "ติดต่อสอบถาม", sendMessage: "ส่งข้อความ"
    }
};

// --- 3. 核心修改：切换语言并存入“记忆” ---
function changeLanguage(lang) {
    const data = translations[lang];
    
    // 执行翻译
    document.querySelectorAll('[data-key]').forEach(item => {
        const key = item.getAttribute('data-key');
        if (data[key]) { item.innerText = data[key]; }
    });

    // 把选择的语言存进浏览器的“笔记本”里
    localStorage.setItem('userLanguage', lang);

    langMenu.classList.remove('active');
}

// --- 4. 关键：页面一加载，就去读“笔记本” ---
window.addEventListener('DOMContentLoaded', () => {
    // 看看笔记本里有没有存过的语言，如果没有，默认用英文 'en'
    const savedLang = localStorage.getItem('userLanguage') || 'en';
    
    // 自动执行一次翻译函数
    changeLanguage(savedLang);
});
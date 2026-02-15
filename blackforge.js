// 汉堡菜单开关
const hamburger = document.getElementById('hamburger');
const langMenu = document.getElementById('langMenu');

hamburger.addEventListener('click', () => {
    langMenu.classList.toggle('active');
});

// 点击外部关闭菜单
window.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !langMenu.contains(e.target)) {
        langMenu.classList.remove('active');
    }
});

// 多语言内容配置
const translations = {
    'en': { nav1: "Page 1", nav2: "Page 2", nav3: "Page 3", title: "Welcome to Our World" },
    'zh': { nav1: "页面 1", nav2: "页面 2", nav3: "页面 3", title: "欢迎来到我们的世界" },
    'id': { nav1: "Halaman 1", nav2: "Halaman 2", nav3: "Halaman 3", title: "Selamat Datang" },
    'th': { nav1: "หน้า 1", nav2: "หน้า 2", nav3: "หน้า 3", title: "ยินดีต้อนรับ" }
};

function changeLanguage(lang) {
    const data = translations[lang];
    
    // 更新导航
    document.querySelectorAll('.nav-item').forEach(item => {
        const key = item.getAttribute('data-key');
        item.innerText = data[key];
    });
    
    // 更新主标题
    document.getElementById('main-title').innerText = data.title;
    
    // 关闭菜单
    langMenu.classList.remove('active');
}
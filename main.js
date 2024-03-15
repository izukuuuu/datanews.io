// Dropdown 切换
document.addEventListener("click", function (e) {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(e.target)) {
      const dropdownContent = dropdown.querySelector('.dropdown-content');
      dropdownContent.style.display = 'none';
    }
  });
});

document.querySelectorAll('.dropbtn').forEach(button => {
  button.addEventListener('click', function (e) {
    const dropdownContent = this.nextElementSibling;
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
  });
});

// 多语言选择
// 获取当前页面的语言
var currentLanguage = window.location.pathname.split('.')[0].split('_')[1]; // 假设文件名为 index_en.html，index_pt.html 等

// 更新当前语言显示
var currentLanguageElement = document.getElementById('current-language');
if (currentLanguage === 'en') {
  currentLanguageElement.textContent = 'English';
} else if (currentLanguage === 'es') {
  currentLanguageElement.textContent = 'Español';
} else if (currentLanguage === 'pt') {
  currentLanguageElement.textContent = 'Português';
} else {
  currentLanguageElement.textContent = '中文';
}

// 文字渐变背景动画
const elements = document.querySelectorAll('.text-gradient-1, .text-gradient-2, .text-gradient-3');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});

elements.forEach(element => {
    observer.observe(element);
});
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

// 标题栏显示切换
window.addEventListener('scroll', function () {
  const header = document.getElementById('chapter-1-header');
  const targetElement = document.getElementById('chapter-1-title');
  const bottomElement = document.getElementById('chapter-1-bottom');

  // 获取目标元素的位置信息
  const targetElementRect = targetElement.getBoundingClientRect();
  const bottomElementRect = bottomElement.getBoundingClientRect();

  // 当滚动到目标元素的顶部时显示标题栏
  if (targetElementRect.bottom <= 0) {
    header.classList.remove('hidden');
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
    header.classList.add('hidden');
  }

  // 当滚动到目标元素的底部时隐藏标题栏
  if (bottomElementRect.bottom <= 0) {
    header.classList.add('hidden');
    header.classList.remove('visible');
  }
});

window.addEventListener('scroll', function () {
  const header = document.getElementById('chapter-2-header');
  const targetElement = document.getElementById('chapter-2-title');
  const bottomElement = document.getElementById('chapter-2-bottom');

  // 获取目标元素的位置信息
  const targetElementRect = targetElement.getBoundingClientRect();
  const bottomElementRect = bottomElement.getBoundingClientRect();

  // 当滚动到目标元素的顶部时显示标题栏
  if (targetElementRect.bottom <= 0) {
    header.classList.remove('hidden');
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
    header.classList.add('hidden');
  }

  // 当滚动到目标元素的底部时隐藏标题栏
  if (bottomElementRect.bottom <= 0) {
    header.classList.add('hidden');
    header.classList.remove('visible');
  }
});

window.addEventListener('scroll', function () {
  const header = document.getElementById('chapter-3-header');
  const targetElement = document.getElementById('chapter-3-title');
  const bottomElement = document.getElementById('chapter-3-bottom');

  // 获取目标元素的位置信息
  const targetElementRect = targetElement.getBoundingClientRect();
  const bottomElementRect = bottomElement.getBoundingClientRect();

  // 当滚动到目标元素的顶部时显示标题栏
  if (targetElementRect.bottom <= 0) {
    header.classList.remove('hidden');
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
    header.classList.add('hidden');
  }

  // 当滚动到目标元素的底部时隐藏标题栏
  if (bottomElementRect.bottom <= 0) {
    header.classList.add('hidden');
    header.classList.remove('visible');
  }
});

window.addEventListener('scroll', function () {
  const header = document.getElementById('chapter-4-header');
  const targetElement = document.getElementById('chapter-4-title');
  const bottomElement = document.getElementById('chapter-4-bottom');

  // 获取目标元素的位置信息
  const targetElementRect = targetElement.getBoundingClientRect();
  const bottomElementRect = bottomElement.getBoundingClientRect();

  // 当滚动到目标元素的顶部时显示标题栏
  if (targetElementRect.bottom <= 0) {
    header.classList.remove('hidden');
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
    header.classList.add('hidden');
  }

  // 当滚动到目标元素的底部时隐藏标题栏
  if (bottomElementRect.bottom <= 0) {
    header.classList.add('hidden');
    header.classList.remove('visible');
  }
});

window.addEventListener('scroll', function () {
  const header = document.getElementById('icon-bar');
  const targetElement = document.getElementById('chapter-1-title');

  // 获取目标元素的位置信息
  const targetElementRect = targetElement.getBoundingClientRect();

  // 当滚动到目标元素的顶部时显示标题栏
  if (targetElementRect.top <= 0) {
    header.classList.remove('hidden');
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
    header.classList.add('hidden');
  }
});

// 平滑滚动
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: 'smooth' });
}

// 标题文本层级切换
window.addEventListener('scroll', function() {
  const titleText = document.querySelector('.title-text');
  const content = document.getElementById('chapter-1');
  
  const titleTextRect = titleText.getBoundingClientRect();
  const contentRect = content.getBoundingClientRect();
  
  // 如果滚动到下一个大的 div，则将 title-text 的 z-index 设置为低于 0，使其被下面的元素覆盖
  if (contentRect.top <= titleTextRect.top) {
      titleText.classList.add('hidden');
      titleText.classList.remove('visible');
  } else {
      // 否则将 z-index 设置为较高的值，使其浮在最上层
      titleText.classList.add('visible');
      titleText.classList.remove('hidden');
  }
});
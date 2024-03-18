// ------------------------------
// Dropdown 切换
// ------------------------------
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

// ------------------------------
// 多语言选择
// ------------------------------
// jQuery 代码
$(document).ready(function () {
  // 获取当前页面的语言
  var currentLanguage = window.location.pathname.split('.')[0].split('_')[1];

  // 更新当前语言显示
  var currentLanguageElement = $('#current-language');
  switch (currentLanguage) {
    case 'en':
      currentLanguageElement.text('English');
      break;
    case 'es':
      currentLanguageElement.text('Español');
      break;
    case 'pt':
      currentLanguageElement.text('Português');
      break;
    default:
      currentLanguageElement.text('中文');
  }

  // 为语言选择器添加事件处理程序
  $('#language-selector a').click(function (e) {
    e.preventDefault();

    // 阻止默认行为

    var href = $(this).attr('href');

    // 获取链接地址

    window.location.href = href;

    // 跳转到新页面
  });
});

// ------------------------------
// 文字渐变背景动画
// ------------------------------
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

// ------------------------------
// 标题栏显示切换
// ------------------------------
window.addEventListener('scroll', function () {
  const header = document.getElementById('chapter-1-header');
  const targetElement = document.getElementById('chapter-1-title');
  const bottomElement = document.getElementById('chapter-1-bottom');

  // 获取目标元素的位置信息
  const targetElementRect = targetElement.getBoundingClientRect();
  const bottomElementRect = bottomElement.getBoundingClientRect();

  // 当滚动到目标元素的顶部时显示标题栏
  if (targetElementRect.bottom <= 0) {
    header.classList.remove('invisible');
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
    header.classList.add('invisible');
  }

  // 当滚动到目标元素的底部时隐藏标题栏
  if (bottomElementRect.bottom <= 0) {
    header.classList.add('invisible');
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
    header.classList.remove('invisible');
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
    header.classList.add('invisible');
  }

  // 当滚动到目标元素的底部时隐藏标题栏
  if (bottomElementRect.bottom <= 0) {
    header.classList.add('invisible');
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
    header.classList.remove('invisible');
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
    header.classList.add('invisible');
  }

  // 当滚动到目标元素的底部时隐藏标题栏
  if (bottomElementRect.bottom <= 0) {
    header.classList.add('invisible');
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
    header.classList.remove('invisible');
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
    header.classList.add('invisible');
  }

  // 当滚动到目标元素的底部时隐藏标题栏
  if (bottomElementRect.bottom <= 0) {
    header.classList.add('invisible');
    header.classList.remove('visible');
  }
});

// ------------------------------
// Icon Bar 显示逻辑
// ------------------------------
window.addEventListener('scroll', function () {
  const header = document.getElementById('icon-bar');
  const targetElement = document.getElementById('chapter-1');

  // 获取目标元素的位置信息
  const targetElementRect = targetElement.getBoundingClientRect();

  // 当滚动到目标元素的顶部时显示标题栏
  if (targetElementRect.top <= 0) {
    header.classList.remove('invisible');
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
    header.classList.add('invisible');
  }
});

window.addEventListener('scroll', function () {
  const header = document.getElementById('icon-bar-mobile');
  const targetElement = document.getElementById('chapter-1');

  // 获取目标元素的位置信息
  const targetElementRect = targetElement.getBoundingClientRect();

  // 当滚动到目标元素的顶部时显示标题栏
  if (targetElementRect.top <= 0) {
    header.classList.remove('invisible');
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
    header.classList.add('invisible');
  }
});

// ------------------------------
// 平滑滚动
// ------------------------------
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: 'smooth' });
}

// ------------------------------
// 标题文本自动隐藏
// ------------------------------
window.addEventListener('scroll', function () {
  const titleText = document.querySelector('.title-text');
  const content = document.getElementById('chapter-1');

  const titleTextRect = titleText.getBoundingClientRect();
  const contentRect = content.getBoundingClientRect();

  // 如果滚动到下一个大的 div，则将 title-text 的 z-index 设置为低于 0，使其被下面的元素覆盖
  if (contentRect.top <= titleTextRect.top) {
    titleText.classList.add('invisible');
    titleText.classList.remove('visible');
  } else {
    // 否则将 z-index 设置为较高的值，使其浮在最上层
    titleText.classList.add('visible');
    titleText.classList.remove('invisible');
  }
});

// ------------------------------
// 电脑、移动端元素切换
// ------------------------------
// 获取窗口宽度
var windowWidth = window.innerWidth;

// 获取所有 desktop-content 和 mobile-content 元素
var desktopContents = document.querySelectorAll('.desktop-content');
var mobileContents = document.querySelectorAll('.mobile-content');

// 根据窗口宽度切换内容块的可见性
function toggleContentVisibility() {
  if (windowWidth <= 992) {
    desktopContents.forEach(function (content) {
      content.style.display = 'none';
    });
    mobileContents.forEach(function (content) {
      content.style.display = 'block';
    });
  } else {
    desktopContents.forEach(function (content) {
      content.style.display = 'block';
    });
    mobileContents.forEach(function (content) {
      content.style.display = 'none';
    });
  }
}

// 初始处理
toggleContentVisibility();

// 监听窗口调整事件
window.addEventListener('resize', function () {
  windowWidth = window.innerWidth;
  toggleContentVisibility();
});
// ------------------------------
// 前言四个轮播板
// ------------------------------
new UePage().init({
    initForm: {
        getCodeImgUrl() {
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAfBAMAAADn3KVYAAAAG1BMVEX09PSOwQDB2nrN4Jja57e01Fuaxx7n7dWnzT3pYkJOAAABNElEQVQ4je2TPXLCMBCFRaLYLrNgDCW+Ae4oofFQxjM5AJoUtO7ShptntZK1K1ke2hR5BbIf+rR/slL/CmqBtMHHk2k+vXu50SKcPNPb9cO5hhjpZJhaaVr3ZFZgGenM9QYH3Pc16gcc8bU0xAgnl+AWS2gI/sHfDogRzlwa7rhxbSPAu1JX2FI97GRUcHyDO9rm6HoQnFxq+2hHe1BPmRJ2nCVm/60Eo/P1vPAMKji7w2+pk2gF4/Q4+CyZGfLzsZ2eIt4TJjiJTChnaMaECU4srrIKh05MtRDGXhxSacKhnhFOrGJqQc/980yfu9VWF9+ZV1gHzzHSidX6PzoxCcd0+dmgHjUtGmr2iImcWP5CFfJQYorFMIq+FfporHbMRE6k0o/HzBizyGjfT5gxsMj8Pf0C2KM4RM5n5rgAAAAASUVORK5CYIIg";
        },
        formSubmit: () => {
            return Promise.resolve();
        },
    },
});
// ------------------------------
// 字体从下向上滚动变大
// ------------------------------
window.addEventListener('scroll', function () {
    var windowHeight = window.innerHeight;
    var dynamicTexts = document.querySelectorAll('.dynamic-text');

    dynamicTexts.forEach(function (dynamicText) {
        var rect = dynamicText.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= windowHeight) {
            // 元素在视图内，根据元素距离窗口顶部的位置调整字体大小
            var relativePosition = windowHeight - rect.top;
            var newFontSize = 2 + relativePosition / 400 + 'rem';
            dynamicText.style.fontSize = newFontSize;
        } else {
            // 元素不在视图内，恢复到初始字体大小
            dynamicText.style.fontSize = '2rem';
        }
    });
});
// ------------------------------
// 文本高亮效果
// ------------------------------
document.addEventListener('DOMContentLoaded', function () {
    var highlightMarks = document.querySelectorAll('mark.highlight');

    function checkVisibility() {
        highlightMarks.forEach(function (mark) {
            var rect = mark.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                mark.classList.add('highlight-active');
            } else {
                mark.classList.remove('highlight-active');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // 初始检查
});
// ------------------------------
// 视差滚动
// ------------------------------
$(document).ready(function () {
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        $('#parallax-1').css('background-position', 'center ' + (scrollTop * 0.1 - 180) + 'px');
        $('#parallax-2').css('background-position', 'center ' + (scrollTop * 0.1 - 180) + 'px');
        $('#parallax-3').css('background-position', 'center ' + (scrollTop * 0.1 - 180) + 'px');
        $('#parallax-4').css('background-position', 'center ' + (scrollTop * 0.1 - 180) + 'px');
    });
});

const images = [
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png"
];

let currentIndex = 0;
const imageElement = document.getElementById("scroll-image");

function updateImage() {
    imageElement.classList.remove("active");
    setTimeout(() => {
        imageElement.src = images[currentIndex];
        imageElement.classList.add("active");
    }, 600); // 缩短切换时间
}

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const elementTop = imageElement.getBoundingClientRect().top + window.scrollY + 60;
    const elementMiddle = elementTop + (window.innerHeight / 1);

    if (scrollPosition >= elementTop && scrollPosition <= elementMiddle) {
        const sections = (elementMiddle - elementTop) / images.length;
        const newIndex = Math.min(Math.floor((scrollPosition - elementTop) / sections), images.length - 1);

        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            updateImage();
        }
    }
});

// 初始化时显示第一张图片
window.onload = () => {
    updateImage();
};

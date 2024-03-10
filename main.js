// 多语言选择
document.getElementById('language').addEventListener('change', function() {
    var selectedLanguage = this.value;
    // Redirect to the corresponding language version of the page
    switch(selectedLanguage) {
      case 'zh':
        window.location.href = 'index.html';
        break;
      case 'en':
        window.location.href = 'index_en.html';
        break;
      case 'es':
        window.location.href = 'index_es.html';
        break;
      case 'pt':
        window.location.href = 'index_pt.html';
        break;
      default:
        // 默认语言
        window.location.href = 'index.html';
    }
  });
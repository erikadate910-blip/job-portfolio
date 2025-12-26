'use strict';

//ドロワー機能
const openNav = document.getElementById('openNav');
const drawer = document.getElementById('drawer');
const closeNav = document.getElementById('closeNav');
const drawerLinks = drawer.querySelectorAll('a'); 

openNav.addEventListener('click', () => {
    drawer.classList.add('show');
});

closeNav.addEventListener('click', () => {
    drawer.classList.remove('show');
});

/* ★ メニューを押したら閉じる */
drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
        drawer.classList.remove('show');
    });
});


// フォームの送信ボタン
const form = document.getElementById('contactForm');
const thanksMessage = document.getElementById('thanksMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // 実際の送信を止める

    form.style.display = 'none';
    thanksMessage.style.display = 'block';
});

// ローディング機能 
  window.addEventListener("load", function() {
  const loading = document.querySelector(".loading");

  loading.classList.add("hide");

  setTimeout(() => {
    loading.style.display = "none";
  }, 2000);
});

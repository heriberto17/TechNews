document.querySelector('.btn-menu').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards' , { delay: 400 });
ScrollReveal().reveal('.banner-one' , { delay: 400 });
ScrollReveal().reveal('.banner-two' , { delay: 400 });
      function ToggleNav(){
        const nav = document.querySelector('.nav');
        const menu = document.querySelector('.menu');
        nav.classList.toggle('active');
        menu.classList.toggle('active');
    }

    function ToggleVideo(){
        const video = document.querySelector('.bg-video');
        const play = document.querySelector('.play');
        const slider = document.querySelector('.swiper');
        const menu = document.querySelector('.menu');
        const nav = document.querySelector('.nav');

        video.classList.toggle('active');
        play.classList.toggle('active');
        slider.classList.toggle('active');
        menu.classList.toggle('active');
        nav.classList.toggle('active');
    }
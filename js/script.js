	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');


    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });

    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }


    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
    let logo = document.getElementById('logo');

    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            logo.src = 'logo3.png';
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            logo.src = 'logo1.png';
            document.body.classList.remove('active');
        }
    }



    
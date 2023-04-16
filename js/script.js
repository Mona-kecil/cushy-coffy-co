// Toggle active class in navbar navigation

    const  navbarNavigation = document.querySelector('.navbar-navigation');

    // When menu clicked
    document.querySelector('#menu').onclick = () => {
        navbarNavigation.classList.toggle('active');
    };

    //Close menu when body is clicked
    const menu = document.querySelector('#menu');
    document.addEventListener('click', function(e){
        if(!menu.contains(e.target) && !navbarNavigation.contains(e.target))
        navbarNavigation.classList.remove('active');
    })
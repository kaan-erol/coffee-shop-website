function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const menuIcon = document.querySelector('#menu-icon');
    const body = document.querySelector('.body');

    if (sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
        menuIcon.src = 'img/hamburger-menu.svg';
        body.classList.remove('no-scroll');
    } else {
        sidebar.classList.add('show');
        overlay.classList.add('show');
        menuIcon.src = 'img/close-icon.svg';
        body.classList.add('no-scroll');
    }
}

window.addEventListener('resize', function () {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const menuIcon = document.querySelector('#menu-icon');
    const body = document.body;
    const screenWidth = window.innerWidth;

    if (screenWidth > 850) {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
        menuIcon.src = 'img/hamburger-menu.svg';
        body.classList.remove('no-scroll');
    }
});

document.querySelector('.overlay').addEventListener('click', toggleSidebar);
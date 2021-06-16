const openMenuButton = document.querySelector('#openButton');
const closeMenuButton = document.querySelector('#closeButton');
const sidebar = document.querySelector('.sidebar');

const buttonIconChanger = () => {
    if (document.documentElement.clientWidth < 1200) {
        openMenuButton.classList.add('button_active');
        closeMenuButton.classList.remove('button_active');
        sidebar.classList.remove('sidebar_visible');
    } else {
        openMenuButton.classList.remove('button_active');
        closeMenuButton.classList.add('button_active');
    }
}

const menuButtonClickHandler = (event) => {
    if (event.target.id === 'menu-button' && !sidebar.classList.contains('sidebar_visible')) {
        sidebar.classList.add('sidebar_visible');
        openMenuButton.classList.remove('button_active');
        closeMenuButton.classList.add('button_active');
    } else {
        sidebar.classList.remove('sidebar_visible');
        openMenuButton.classList.add('button_active');
        closeMenuButton.classList.remove('button_active');
    }
}

window.addEventListener('resize', buttonIconChanger);
openMenuButton.addEventListener('click', menuButtonClickHandler);
closeMenuButton.addEventListener('click', menuButtonClickHandler);

buttonIconChanger();

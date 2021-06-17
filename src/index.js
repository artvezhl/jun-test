const openMenuButton = document.querySelector('#openButton');
const closeMenuButton = document.querySelector('#closeButton');
const sidebar = document.querySelector('.sidebar');
const mainCheckbox = document.querySelector('#main');
const checkboxes = document.querySelectorAll('input[name="block-checkbox"]');;
const firstCheckbox = document.querySelector('#first');
const secondCheckbox = document.querySelector('#second');
const thirdCheckbox = document.querySelector('#third');
const fourthCheckbox = document.querySelector('#fourth');
const blocks = document.querySelectorAll('.block');
const firstBlock = document.querySelector('#first-block');
const secondBlock = document.querySelector('#second-block');
const thirdBlock = document.querySelector('#third-block');
const fourthBlock = document.querySelector('#fourth-block');

const buttonIconChanger = () => {
    if (document.documentElement.clientWidth < 1200 && !sidebar.classList.contains('sidebar_visible')) {
        openMenuButton.classList.add('button_active');
        closeMenuButton.classList.remove('button_active');
        sidebar.classList.remove('sidebar_visible');
    }
    if (document.documentElement.clientWidth >= 1200 && !sidebar.classList.contains('sidebar_visible')) {
        sidebar.classList.add('sidebar_visible');
        openMenuButton.classList.remove('button_active');
        closeMenuButton.classList.add('button_active');
    }
}

const menuButtonClickHandler = (event) => {
    if (event.currentTarget.id === 'openButton' && !sidebar.classList.contains('sidebar_visible')) {
        sidebar.classList.add('sidebar_visible');
        openMenuButton.classList.remove('button_active');
        closeMenuButton.classList.add('button_active');
    } else {
        sidebar.classList.remove('sidebar_visible');
        openMenuButton.classList.add('button_active');
        closeMenuButton.classList.remove('button_active');
    }
}

const mainCheckboxHandler = () => {
    if(mainCheckbox.checked) {
        checkboxes.forEach(checkbox => checkbox.checked = true);
        blocks.forEach(block => {
            if (!block.classList.contains('content__block_visible'))
                blockClassToggler(block);
        })
    } else {
        checkboxes.forEach(checkbox => checkbox.checked = false);
        blocks.forEach(block => {
            if (block.classList.contains('content__block_visible'))
                blockClassToggler(block);
        })
    }
}

const checkboxesHandler = () => {
    Array.prototype.slice.call(checkboxes).every(cb => cb.checked)
        ? mainCheckbox.checked = true
        : mainCheckbox.checked = false;
}

const blockClassToggler = (block) => {
    block.classList.toggle('content__block_visible');
}

const checkboxesBlocksRenderer = (checkbox) => {
    switch (checkbox) {
        case (firstCheckbox):
            if(checkbox.checked) blockClassToggler(firstBlock)
            else blockClassToggler(firstBlock)
            break;
        case (secondCheckbox):
            if(checkbox.checked) blockClassToggler(secondBlock)
            else blockClassToggler(secondBlock);
            break;
        case (thirdCheckbox):
            if(checkbox.checked) blockClassToggler(thirdBlock)
            else blockClassToggler(thirdBlock);
            break;
        case (fourthCheckbox):
            if(checkbox.checked) blockClassToggler(fourthBlock)
            else blockClassToggler(fourthBlock);
            break;
        default:
            console.log('Error');
    }
}

const checkboxHandler = (event) => {
    if (event.target === mainCheckbox) {
        mainCheckboxHandler();
    }
    else {
        checkboxesHandler();
        checkboxesBlocksRenderer(event.target);
    }
}

window.addEventListener('resize', buttonIconChanger);
openMenuButton.addEventListener('click', menuButtonClickHandler);
closeMenuButton.addEventListener('click', menuButtonClickHandler);
mainCheckbox.addEventListener('click', checkboxHandler);
checkboxes.forEach(checkbox => checkbox.addEventListener('click', checkboxHandler));

buttonIconChanger();

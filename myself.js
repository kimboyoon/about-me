const header = document.querySelector("header");

function scroll () {
    if (window.scrollY >= 530) {
        header.classList.add('active_nav');
    } else {
        header.classList.remove('active_nav');
    }
}

window.addEventListener("scroll",scroll);
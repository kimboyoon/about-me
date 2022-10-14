const header = document.querySelector("header");
const navMenuList = document.querySelector(".nav_menuList");
const navContact = document.querySelector(".nav_contact");
const toggleBtn =  document.querySelector(".toggleBtn");
const myGoal = document.querySelector(".myGoal");
const content = "Hello, My name is BoYoon!";
const typing = document.querySelector(".type");
let i = 0;

function typingMyName () {
    let txt = content[i];
    typing.innerHTML += txt;
    i++;
    if (i > content.length) {
        typing.innerHTML = "";
        i = 0;
    } 
}

setInterval(typingMyName, 300);


function scroll () {
    if (window.scrollY >= 530) {
        header.classList.add('active_nav');
    } else {
        header.classList.remove('active_nav');
    }
}

function clickBurger () {
    navMenuList.classList.toggle('active_btn');
    navContact.classList.toggle('active_btn');
}

function mouseover () {
    myGoal.style.fontSize = "6vh";
}

function mouseout () {
    myGoal.style.fontSize = "5vh";
}

window.addEventListener("scroll", scroll);
toggleBtn.addEventListener("click", clickBurger);
myGoal.addEventListener("mouseover",mouseover);
myGoal.addEventListener("mouseout", mouseout);

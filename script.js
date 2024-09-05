//dar clic en icono de menu y desplegar .links

const menu = document.querySelector("#menu");
const nav = document.querySelector(".links"); 

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}
const head = document.getElementById('head');
const body = document.getElementById('body');
const header = document.createElement('header');

const globalCSS = "<link rel='stylesheet' href='/assets/css/global.css'>";
const pageTitle = "<title>Hamburgueria</title>"

const headerContent = 
"<a href='/index.html'><img id='logo' src='/assets/img/logo.png' alt='logo hamburguer'></a>" +
"<div id='hamburguer-icon'>" +
"<i class='bi bi-list'></i>" +
"</div>" +
"<div id='nav-bar'>" +
"<a href='/assets/html/produtos.html'>PRODUTOS</a>" +
"<a href='/assets/html/quemsomos.html'>QUEM SOMOS</a>" +
"<a href='/assets/html/contato.html'>CONTATO</a>" +
"</div>";

head.innerHTML += globalCSS;
head.innerHTML += pageTitle;
header.innerHTML += headerContent;

const hamburguerMenu = document.getElementById("hamburguer-menu");
const hamburguerIcon = document.getElementsByClassName("bi-list")[0];

function toggleDisplay() {
    if (hamburguerMenu.style.display == 'none') {
        hamburguerMenu.style.display = 'flex';
    } else {
        hamburguerMenu.style.display = 'none';
    }
}


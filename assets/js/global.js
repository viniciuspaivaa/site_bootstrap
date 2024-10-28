const head = document.getElementById('head');
const body = document.getElementById('body');
const header = document.createElement('header');
const footer = document.createElement('footer');

const globalCSS = "<link rel='stylesheet' href='/assets/css/global.css'>";
head.innerHTML += globalCSS;

const favicon = "<link rel='shortcut icon' href='/assets/img/favicon_io/favicon.ico' type='image/x-icon'>";
head.innerHTML += favicon;

const headerContent = 
"<a href='/index.html'><img id='logo' src='/assets/img/logo.png' alt='logo hamburguer'></a>" +
"<div id='hamburguer-icon'>" +
    "<i class='bi bi-list'></i>" +
"</div>" +
"<div id='nav-bar'>" +
    "<a href='/assets/html/produtos.html'>PRODUTOS</a>" +
    "<a href='/assets/html/quemsomos.html'>QUEM SOMOS</a>" +
    "<a href='/assets/html/contato.html'>CONTATO</a>" +
    "<i class='bi bi-cart-fill'></i>" +
"</div>";
body.prepend(header);
header.innerHTML += headerContent;

const footerContent = 
"<a href='/index.html'><img id='logo' src='/assets/img/logo.png' alt='logo hamburguer'></a>" +
"<p>Lorem Ipsum Lorem</p>" +
"<div id='footer-nav-bar'>" +
    "<a href='/assets/html/produtos.html'>PRODUTOS</a>" +
    "<a href='/assets/html/quemsomos.html'>QUEM SOMOS</a>" +
    "<a href='/assets/html/contato.html'>CONTATO</a>" +
"</div>";
body.appendChild(footer);
footer.innerHTML += footerContent;

const hamburguerMenu = document.getElementById("hamburguer-menu");
const hamburguerIcon = document.getElementsByClassName("bi-list")[0];

function toggleDisplay() {
    if (hamburguerMenu.style.display == 'none') {
        hamburguerMenu.style.display = 'flex';
    } else {
        hamburguerMenu.style.display = 'none';
    }
}

hamburguerIcon.addEventListener('click', toggleDisplay);
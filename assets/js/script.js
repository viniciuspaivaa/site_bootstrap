const hamburguerMenu = document.getElementById("hamburguer-menu");
const hamburguerIcon = document.getElementsByClassName("bi-list")[0];

function toggleDisplay() {
    if (hamburguerMenu.style.display != 'none') {
        hamburguerMenu.style.display = 'none';
    } else {
        hamburguerMenu.style.display = 'flex';
    }
}

hamburguerIcon.addEventListener('click', toggleDisplay);
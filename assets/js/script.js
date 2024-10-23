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
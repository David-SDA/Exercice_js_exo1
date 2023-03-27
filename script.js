/* Fonction pour obtenir les propriétés css d'un élément */
function getCSS(element){
    let style = getComputedStyle(element);
    return style;
}

/* Fonction pour faire des actions quand la boîte est cliqué */
function boiteClique(){
    style = getCSS(boite);
    let backgroundColor = style.backgroundColor;
    let color = style.color;
    let height = boite.offsetHeight;
    let width = boite.offsetWidth;
    let display = style.display;
    let font = style.fontFamily + "(" + style.fontSize + ")";
    alert("Class : " + boite.className + "\n" + "- Background color : " + backgroundColor + "\n- Color : " + color + "\n- Height : " + height + "\n- Width : " + width + "\n- Display : " + display + "\n- Display : " + font);
}

/* On enregistre le carré créé */
let boite = document.querySelector(".carre");

/* Si le carré est cliqué, on applique la fonction en conséquence */
boite.addEventListener("click", boiteClique);
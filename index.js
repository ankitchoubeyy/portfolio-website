const sideMenu = document.getElementById("sideMenu");
console.log(sideMenu);

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)'
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)'
}
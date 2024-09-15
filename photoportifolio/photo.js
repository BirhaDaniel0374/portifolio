const menuicon = document.getElementById("menu_icon");
const navitem = document.getElementById("nav_items");
const menubtn = menuicon.querySelector("i");

menuicon.addEventListener("click", (e) =>{
    navitem.classList.toggle("open");
    
    const isopen= navitem.classList.contains("open");
    menubtn.setAttribute("class",isopen ? "ri-close-line" : "ri-menu-fill");
});






// src/index.js
import "./styles.css";
import loadHome , { home_btn }from "./homepage.js";
import loadMenu , { menu_btn }from "./menu.js";


loadMenu();
const about_btn = document.querySelector("#about");
const contact_btn = document.querySelector("#contact");

home_btn.addEventListener("click", function(){
    loadHome();
});

menu_btn.addEventListener("click", function(){
    loadMenu();
});

about_btn.addEventListener("click", function(){
    alert("Not done");
});

contact_btn.addEventListener("click", function(){
    alert("Not done");
});
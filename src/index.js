import { contact } from './contact.js';
import { initialPageLoad } from './initial-page-load.js'; 
import { menu } from "./menu.js";
import 'bootstrap'
import './navbar.css'


initialPageLoad();

// Page Tabbing Module

let NavModule = (function() {


    const homeTab = document.querySelector(".home");
    homeTab.addEventListener("click", initialPageLoad);

    const menuTab = document.querySelector(".menu");
    menuTab.addEventListener("click", menu)

    const contactTab = document.querySelector(".contact");
    contactTab.addEventListener("click", contact );

})();

import { contact } from './contact.js';
import { initialPageLoad } from './initial-page-load.js'; 
import { menu } from "./menu.js";
import hulk from './assets/images/hulk-background.jpg'
import 'bootstrap'


initialPageLoad();

let NavModule = (function() {

    const homeTab = document.querySelector(".home");
    homeTab.addEventListener("click", initialPageLoad);

    const menuTab = document.querySelector(".menu");
    menuTab.addEventListener("click", menu)

    const contactTab = document.querySelector(".contact");
    contactTab.addEventListener("click", contact );

})();

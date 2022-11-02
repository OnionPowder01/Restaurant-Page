import { initialPageLoad } from './initial-page-load.js'; 
import { menu } from "./menu.js";
import './style.css';

initialPageLoad();

let NavModule = (function() {

    const homeTab = document.querySelector(".home");
    homeTab.addEventListener("click", initialPageLoad);

    const menuTab = document.querySelector(".menu");
    menuTab.addEventListener("click", menu)

})();

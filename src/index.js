import { contact } from './contact.js';
import { initialPageLoad } from './initial-page-load.js'; 
import { menu } from "./menu.js";
import './style.css';
import './contact.css'
import hulk from './assets/images/hulk-background.jpg'
import 'bootstrap';


initialPageLoad();

let NavModule = (function() {
    
//Hulk background image
document.body.style.backgroundImage = `url('${hulk}')`;
document.body.style.backgroundSize = 'cover';    

    const homeTab = document.querySelector(".home");
    homeTab.addEventListener("click", initialPageLoad);

    const menuTab = document.querySelector(".menu");
    menuTab.addEventListener("click", menu)

    const contactTab = document.querySelector(".contact");
    contactTab.addEventListener("click", contact );

})();

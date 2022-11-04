import './style.css';
import tomahawkImg from './assets/images/TomahawkSteak.jpg';
import fullEnglishBreakfast from './assets/images/full english breakfast.jpg'
import burger from "./assets/images/Burger.jpg"
import enchilada from "./assets/images/Beef-Enchilada.jpg"

export function menu() {

const contentDiv = document.querySelector("#content");
const container = document.createElement("div")
container.classList.add('container')

 //Remove any existing DOM children if present
contentDiv.replaceChildren();

  /* _________ page-title __________ */

const heading = document.createElement("h1");
heading.textContent = "Welcome to Hulk smash Restaurant";
heading.classList.add("landing-title-menu");
container.appendChild(heading);

 /* _________ DOM for Tomahawk Steak__________ */

const tomahawkSteak = new Image();
tomahawkSteak.classList.add("image-menu");
tomahawkSteak.classList.add("image-menu-1");
tomahawkSteak.src = tomahawkImg;
tomahawkSteak.alt = "Image of a Tomahawk Steak";
container.appendChild(tomahawkSteak);

  /* _________ DOM for paragraph for Tomahawk Steak __________ */

const paraSteak = document.createElement("p");
paraSteak.classList.add("menu-copy");
paraSteak.classList.add("menu-copy-1");
paraSteak.textContent = "A huge bone in ribeye that is rich, tender, juicy and full of fantastic avour. This steak has a generous marbling throughout and is perfect for sharing."
container.appendChild(paraSteak);

 /* _________ DOM for English Breakfast__________ */

const englishBreakfast = new Image();
englishBreakfast.classList.add("image-menu");
englishBreakfast.classList.add("image-menu-2");
englishBreakfast.src = fullEnglishBreakfast;
englishBreakfast.alt = "Image of a English Breakfast";
container.appendChild(englishBreakfast);

/* _________ DOM for paragraph English Breakfast __________ */

const paraBreakfast = document.createElement("p");
paraBreakfast.classList.add("menu-copy");
paraBreakfast.classList.add("menu-copy-2");
paraBreakfast.textContent = "Smoked bacon, farm sausage, 3 fried eggs, slow roast cherry tomatoes, field mushroom, toast"
container.appendChild(paraBreakfast);

/* _________ DOM for Burger __________ */

const bigBurger = new Image();
bigBurger.classList.add("image-menu");
bigBurger.classList.add("image-menu-3");
bigBurger.src = burger;
bigBurger.alt = "Image of a English Breakfast";
container.appendChild(bigBurger);

/* _________ DOM for paragraph for Burger __________ */

const paraBurger = document.createElement("p");
paraBurger.classList.add("menu-copy");
paraBurger.classList.add("menu-copy-3");
paraBurger.textContent = "Mexican beef burger topped with jalapeno sliced & jam, exquisite cheese. Served on a glazed brioche bun."
container.appendChild(paraBurger);

/* _________DOM for Enchilada __________ */

const beefEnchilada = new Image();
beefEnchilada.classList.add("image-menu");
beefEnchilada.classList.add("image-menu-4");
beefEnchilada.src = enchilada;
beefEnchilada.alt = "Image of an Beef Enchilada";
container.appendChild(beefEnchilada);

/* _________DOM for paragraph for Enchilada __________ */

const paraEnchilada = document.createElement("p");
paraEnchilada.classList.add("menu-copy");
paraEnchilada.classList.add("menu-copy-4");
paraEnchilada.textContent = "Beef in our red hot habanero sauce served with rice or fries"
container.appendChild(paraEnchilada);

contentDiv.appendChild(container);
}

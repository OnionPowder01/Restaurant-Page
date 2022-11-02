import './style.css';
import tomahawkImg from './assets/images/TomahawkSteak.jpg';

export function menu() {

const contentDiv = document.querySelector("#content");
const newDiv = document.createElement("div")
newDiv.classList.add('container')

 //Remove any existing DOM children if present
contentDiv.replaceChildren();

  /* _________ page-title __________ */

const heading = document.createElement("h1");
heading.textContent = "Welcome to Hulk smash Restaurant";
heading.classList.add("landing-title-menu");
newDiv.appendChild(heading);

 /* _________DOM for Tomahawk Steak__________ */

const tomahawkSteak = new Image();
tomahawkSteak.classList.add("image-menu");
tomahawkSteak.src = tomahawkImg;
tomahawkSteak.alt = "Image of a Tomahawk Steak";
newDiv.appendChild(tomahawkSteak);

  /* _________DOM for paragraph for Tomahawk Steak __________ */

const para1Steak = document.createElement("p");
para1Steak.classList.add("menu-copy");
para1Steak.textContent = "A huge bone in ribeye that is rich, tender, juicy and full of fantastic avour. This steak has a generous marbling throughout and is perfect for sharing."
newDiv.appendChild(para1Steak);








contentDiv.appendChild(newDiv);
}

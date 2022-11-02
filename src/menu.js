export function menu() {

const contentDiv = document.querySelector("#content");

 //Remove any existing DOM children if present
contentDiv.replaceChild();

  /* _________ page-title __________ */

const heading = document.createElement("h1");
heading.textContent = "Welcome to Hulk smash Restaurant";
heading.classList.add("landing-title");
contentDiv.appendChild(heading);

 /* _________DOM for Tomahawk Steak__________ */

const tomahawkSteak = document.createElement("img");
tomahawkSteak.classList.add("image");
tomahawkSteak.src = "./assets/TomahawkSteak.jpg";
tomahawkSteak.alt = "Image of a Tomahawk Steak";
contentDiv.appendChild(tomahawkSteak);

  /* _________DOM for paragraph for Tomahawk Steak __________ */

const para1Steak = document.createElement("p");
para1Steak.classList.add("menu-copy");
para1Steak.textContent = "A huge bone in ribeye that is rich, tender, juicy and full of fantastic avour. This steak has a generous marbling throughout and is perfect for sharing."
contentDiv.appendChild(para1Steak);









}

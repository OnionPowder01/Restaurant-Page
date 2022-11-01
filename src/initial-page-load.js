export function intialPageLoad() {
    const contentDiv = document.querySelector("#content");

    /* _________ page-title __________ */
    
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Hulk smash Restaurant";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    /* _________ first-paragraphs __________ */

    const para1 = document.createElement('p');
    para1.classList.add('landing-page-copy');
    para1.textContent = 'Ahh, getting stronger, I can feel it!'
    contentDiv.appendChild(para1);

    const para2 = document.createElement('p');
    para2.classList.add('landing-page-copy');
    para2.textContent = 'This is a restaurant where we allways have time to break stuff'
    contentDiv.appendChild(para2);

    const para3 = document.createElement('p');
    para3.classList.add('landing-page-copy');
    para3.textContent = 'Thanks, Hulk!'
    contentDiv.appendChild(para3);
  
     /* _________ Classes added to nav bar for hover effect __________ */
    const home = document.querySelector('.home');
    home.classList.add("hvr-shutter-out-horizontal")

    const menu = document.querySelector('.menu');
    menu.classList.add("hvr-shutter-out-horizontal")

    const contact = document.querySelector('.contact');
    contact.classList.add("hvr-shutter-out-horizontal");
}
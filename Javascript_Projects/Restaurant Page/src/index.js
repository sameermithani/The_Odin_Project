import { loadHomePage } from './home';
import { loadContactPage } from './contact';
import { loadMenuPage } from './menu';

const container = document.getElementById("content");
const tabs = document.getElementById("tabs");
const home_page = loadHomePage();
const menu_page = loadMenuPage();
const contact_page = loadContactPage();

function init() {

    tabs.innerHTML =
       `<label class="tabButton" for="home" id="home">Home</label>
        <label class="tabButton" for="menu" id="menu">Menu</label>
        <label class="tabButton" for="contact" id="contact">Contact Us</label>`
    

    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const contact = document.getElementById("contact");

    container.appendChild(home_page);

    home.addEventListener("click", () => {
        clear_page();
        container.appendChild(home_page);
    });

    menu.addEventListener("click", () => {
        clear_page();
        container.appendChild(menu_page);
    });

    contact.addEventListener("click", () => {
        clear_page();
        container.appendChild(contact_page);
    });

}


function clear_page(page) {

    while(container.childElementCount > 0) {
        container.removeChild(container.lastChild);
    }

}

init();
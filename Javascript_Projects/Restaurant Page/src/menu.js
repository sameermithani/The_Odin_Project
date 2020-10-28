const loadMenuPage = () => {
    let menu = document.createElement("div");
    let headline = document.createElement("h1");
    headline.textContent = "Menu"
    let info = document.createElement("ul");
    let item1 = document.createElement("li");
    item1.textContent = "Cheese Burger - $5.00";
    let item2 = document.createElement("li");
    item2.textContent = "Double Cheese Burger - $6.00";
    info.appendChild(item1);
    info.appendChild(item2);
    menu.appendChild(headline);
    menu.appendChild(info);
    return menu;
}

export { loadMenuPage };
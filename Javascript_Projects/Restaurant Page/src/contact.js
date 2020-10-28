const loadContactPage = () => {
    let contact = document.createElement("div");
    let headline = document.createElement("h1");
    headline.textContent = "Contact Us"
    let info = document.createElement("p");
    info.textContent = "Phone: 999-BURGERS"
    contact.appendChild(headline);
    contact.appendChild(info);
    return contact;
}

export { loadContactPage };
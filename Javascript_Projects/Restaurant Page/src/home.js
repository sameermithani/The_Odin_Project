
const loadHomePage = () => {
    let home = document.createElement("div");
    let image = document.createElement("img");
    image.src = "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Scrum-Delicious-Burgers_EXPS_CHMZ19_824_B10_30_2b.jpg";
    image.setAttribute("style", "height: 100%; background-size: cover; background-position: center; background-repeat: no-repeat;");
    let headline = document.createElement("h1");
    headline.textContent = "Sam's Burgers"
    let info = document.createElement("p");
    info.textContent = "Welcome to Sam's burgers. We have juicy and delicious burgers!"
    home.appendChild(headline);
    home.appendChild(image);
    home.appendChild(info);
    return home;
}

export { loadHomePage };
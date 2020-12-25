const hidemenu = document.querySelectorAll(".hide");

let display = "none";

const changeDisplayType = () => {
    for (let i = 0; i < 6; i++) {
        hidemenu[i].style.display = display;
    }
}
changeDisplayType();

const btn_click = e => {
    if (e.innerHTML === "View All")
        e.innerHTML = "View Less";
    else
        e.innerHTML = "View All";
    if (display === "none")
        display = "block";
    else
        display = "none";
    changeDisplayType();
}
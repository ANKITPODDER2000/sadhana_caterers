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

const imageclick = (imgname , title) => {
    let img_file = "./images/menu/" + imgname;
    document.querySelector("#img-con > h1").innerHTML = title;
    $("body > div.img-show-container").fadeToggle();
    $("#img-con > img").attr('src' , img_file)
}

const closethis = () => {
    $("body > div.img-show-container").fadeToggle();
}
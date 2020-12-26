const hidemenu = document.querySelectorAll(".hide");
const menulist = [
    ["./images/menu/mutton kasha.jpg", "Mutton Kasha"],
    ["./images/menu/navaratna kari.jpg", "Navaratna Korma"],
    ["./images/menu/panner2.jpg", "Paneer Butter Masala"],
    ["./images/menu/salad.JPG", "Pasta Counter"],
    ["./images/menu/hotsaladbar.JPG", "Hot Salad Bar"],
    ["./images/menu/prawn.jpg", "Prawn Malaikari"],
    ["./images/menu/fry.jpg", "Fish Butter Fry"],
    ["./images/menu/chicken.jpg", "Chicken Chap"],
    ["./images/menu/mocktail.jpg", "Mocktail Counter"],
    ["./images/menu/pan.jpg", "Pan"],
    ["./images/menu/tandoor.jpg", "Chicken Tandoor"],
    ["./images/menu/chatni.jpg", "Fruit Chutny"]
];
let display = "none";
let curpos = null;

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

const imageclick = (ind) => {
    let img_file = menulist[ind][0];
    document.querySelector("#img-con > h1").innerHTML = menulist[ind][1];
    $("body > div.img-show-container").fadeToggle();
    $("#img-con > img").attr('src', img_file);
    curpos = ind;
    if (curpos == 0)
        $("#img-con > div > i.fas.fa-arrow-left").addClass('active');
    if (curpos == menulist.length-1)
        $("#img-con > div > i.fas.fa-arrow-right").addClass('active');
}

const closethis = () => {
    $("body > div.img-show-container").fadeToggle();
}

const change = val => {
    if (curpos == menulist.length - 1 && val == 1)
        return;
    if (curpos == 0 && val == -1)
        return;
    $('#img-con > div > i').removeClass('active');
    curpos += val;
    let img_file = menulist[curpos][0];
    document.querySelector("#img-con > h1").innerHTML = menulist[curpos][1];
    $("#img-con > img").attr('src', img_file);
    if (curpos == 0)
        $("#img-con > div > i.fas.fa-arrow-left").addClass('active');
    if (curpos == menulist.length-1)
        $("#img-con > div > i.fas.fa-arrow-right").addClass('active');
}
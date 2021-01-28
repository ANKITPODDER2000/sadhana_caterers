const icon1 = document.querySelector("body > nav > div > ul > li:nth-child(6) > a > i");
const icon2 = document.querySelector("body > div.fixedbar > ul > li:nth-child(6) > a > i");
const body  = document.querySelector("body");

let mode = window.localStorage.getItem("mode") || "light";
if (mode === "night") {
    icon1.classList.remove("fas");
    icon1.classList.remove("fa-lightbulb");
    icon1.classList.add("far");
    icon1.classList.add("fa-moon");

    icon2.classList.remove("fas");
    icon2.classList.remove("fa-lightbulb");
    icon2.classList.add("far");
    icon2.classList.add("fa-moon");


    body.classList.remove("light");
    body.classList.add("night");
}
const changeMode = () => {
    if (mode === "light") {
        icon1.classList.remove("fas");
        icon1.classList.remove("fa-lightbulb");
        icon1.classList.add("far");
        icon1.classList.add("fa-moon");

        icon2.classList.remove("fas");
        icon2.classList.remove("fa-lightbulb");
        icon2.classList.add("far");
        icon2.classList.add("fa-moon");


        body.classList.remove("light");
        body.classList.add("night");
        mode = "night";
    }
    else {
        icon1.classList.remove("far");
        icon1.classList.remove("fa-moon");
        icon1.classList.add("fas");
        icon1.classList.add("fa-lightbulb");

        icon2.classList.remove("far");
        icon2.classList.remove("fa-moon");
        icon2.classList.add("fas");
        icon2.classList.add("fa-lightbulb");
        
        body.classList.remove("night");
        body.classList.add("light");
        mode = "light";
    }
    window.localStorage.setItem("mode", mode);
}
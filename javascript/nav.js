// To listen scrolling !!!
window.addEventListener("scroll", function () {
    if(window.scrollY > 40){
        document.querySelector(".fixedbar").classList.add("active");
    }
    else{
        document.querySelector(".fixedbar").classList.remove("active");
    }
})
if(window.scrollY > 40){
    document.querySelector(".fixedbar").classList.add("active");
}

const handbergerclick = e => {
    document.querySelector("body > div.fixedbar").classList.toggle('slideLeft');
    document.querySelector("body > nav").classList.toggle('togglebar');
    document.querySelector("body > div.main").classList.toggle('togglebar');
    document.querySelector("body > div.fixedbar").classList.toggle('togglebar');
}
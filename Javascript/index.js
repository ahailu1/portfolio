//hover over element
//if element is clicked change the backgroudn color and change the div
// if another element is clicked, change the background color and dis
let tab = document.getElementsByClassName("services__tab__div");
let text = document.getElementsByClassName("services__text__container");

let play = [...tab];
text = [...text];
play.forEach( (el) => {
el.addEventListener("click", (tab) => {
    
play.forEach((el) => {
el.classList.remove("services__tab__div--active")
})
text.forEach( (el) => {
el.classList.remove("services__text__container--toggled");
})
el.classList.add("services__tab__div--active")

let index = play.indexOf(el);

console.log(index);    
text[index].classList.add("services__text__container--toggled")

})

});

scrollIntoView = (idName, className) => {

let contactView = document.getElementsByClassName(className);
let scroll = document.getElementById(idName);
scroll.addEventListener("click", function(el){
    contactView[0].scrollIntoView({behavior:"smooth", block: "start" });
console.log(el);
    el.preventDefault();

})
};

scrollIntoView("contact--link", "contact__form");
scrollIntoView("home--link", "body__content");
scrollIntoView("about--link", "footer");
scrollIntoView("services--link", "main__service");
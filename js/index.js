// *** start move background code ***//
const MAIN = document.getElementsByClassName("main")[0];
const CODE = document.getElementsByClassName("code")[0];

MAIN.addEventListener("mouseover", () =>{
    CODE.classList.remove("code_background_back");
    CODE.classList.add("code_background_go")
})

MAIN.addEventListener("mouseout", () =>{
    CODE.classList.remove("code_background_go");
    CODE.classList.add("code_background_back")
})

// *** change uncolor icons on color *** //
const SKILL = document.getElementsByClassName("skill_icon");
const SHADOW = document.getElementsByClassName("shadow");
const WEBSITE = document.getElementsByClassName("blockimg")
const STRING = /_black/gi;
const PNG = /.png/gi;
const JPG = /.jpg/gi

for(i = 0; i<= SKILL.length-1; i++){
    SKILL[i].addEventListener("mouseover", (event) =>{
        event.target.src = event.target.src.replace(STRING,"");
        event.target.nextSibling.nextSibling.style = "opacity: 1"
    });
    SKILL[i].addEventListener("mouseout", (event) =>{
        event.target.src = event.target.src.replace(PNG,"_black.png");
        event.target.nextSibling.nextSibling.style = "opacity: 0.5"
    });
}

// *** change uncolor image websites to color *** //
for(i = 0; i<= WEBSITE.length-1; i++){
    WEBSITE[i].addEventListener("mouseover",(event) =>{
        event.target.style.backgroundImage = getComputedStyle(event.target).backgroundImage.replace(STRING,"") } )
    };

// *** move to links for sites *** //
var linkNav = document.querySelectorAll('[href^="#"]');
V = 0.5;  // скорость
for (var i = 0; i < linkNav.length; i++) {
  if(i <= 4){linkNav[i].addEventListener("click",() => document.getElementsByClassName("sail_menu_active")[0].classList.remove("sail_menu_active") )}
  linkNav[i].onclick = function(){
    document.body.classList.remove("overflow_hidden");
    var w = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
          r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
      window.scrollTo(0,r);
      if (r != w + t) {requestAnimationFrame(step)} else {location.hash = hash}
    }
    return false;
  }
}
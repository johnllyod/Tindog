const distanceFromTop = window.scrollY || window.pageYOffset;
var topNav = document.getElementById("TopNav");
var topNavCTA = document.getElementById("TopNavCTA");
var topNavLogo = document.getElementById("TopNavLogo");
var topNavBtns = document.getElementById("TopNavBtns");

window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    topNav.style.background = "none";
    topNav.style.zIndex = 2;
    topNavBtns.style.color = "#ff6254";
    topNav.classList.remove("topNavScroll");
    topNavCTA.classList.remove("btnCTA2");
    topNavCTA.classList.add("btnCTA");
    topNavLogo.src = "img/tindog.png";
  } else if (window.scrollY > 0 && window.scrollY < 700) {
    topNav.style.zIndex = -1;
  } else if (window.scrollY > 700) {
    topNav.style.zIndex = 2;
    topNavBtns.children[0].style.color = "#ff6254";
    topNavBtns.children[1].style.color = "#ff6254";
    topNavBtns.children[2].style.color = "#ff6254";
    topNav.classList.add("topNavScroll");
    topNavCTA.classList.remove("btnCTA");
    topNavCTA.classList.add("btnCTA2");
    topNavLogo.src = "img/tindog-colored.png";
    topNav.style.background = "#fff";
    topNav.style.borderRadius = "50px";
    topNav.style.margin = "0px 100px";
  }
  console.log(topNavBtns.children[1]);
});

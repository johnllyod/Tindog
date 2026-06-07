const distanceFromTop = window.scrollY || window.pageYOffset;
var topNavScrolled = document.getElementById("TopNavScrolled");

window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    topNavScrolled.style.display = "none";
  } else if (window.scrollY > 0 && window.scrollY < 600) {
    topNavScrolled.style.display = "none";
  } else if (window.scrollY > 600) {
    topNavScrolled.style.display = "unset";
  }
});

//Carousel size adjust
var carouselItems = document.querySelectorAll(".testimonialContainer");
var carouselContainer = document.getElementById("CarouselContainer");

function CarouselWidth() {
  carouselContainer.style.width = carouselItems[0].offsetWidth + "px";
}

CarouselWidth();

//Carosel Function
function MoveCarousel(section) {
  var carouselBtns = document.getElementById("CarouselBtns");
  sectionToGo = carouselItems[section - 1];
  if (!sectionToGo) return;

  sectionToGo.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest",
  });

  for (let i = 0; i < carouselBtns.children.length; i++) {
    carouselBtns.children[i].children[0].classList.remove(
      "carouselBtnSelected",
    );
  }
  carouselBtns.children[section - 1].children[0].classList.add(
    "carouselBtnSelected",
  );
}

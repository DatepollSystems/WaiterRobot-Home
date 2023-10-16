import "../assets/styles.scss";
import "../assets/carousel.scss";
// noinspection ES6UnusedImports
import Carousel from "bootstrap/js/dist/carousel";

function applyMultiItemCarousel(items, minPerSlide) {
  items.forEach((el) => {
    let next = el.nextElementSibling;
    for (let i = 1; i < minPerSlide; i++) {
      if (!next) {
        // wrap carousel by using first child
        next = items[0];
      }
      let cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });
}

applyMultiItemCarousel(document.querySelectorAll("#eventsCarousel .carousel-item"), 4)

// JavaScript code for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });

      // Update the URL without triggering a full page reload
      history.pushState({}, "", `#${targetId}`);
    }
  });
});

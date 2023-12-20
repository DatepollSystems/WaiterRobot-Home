import "../assets/styles.scss";
import "../assets/animate.scss";
import "../assets/carousel.scss";
// noinspection ES6UnusedImports
import Carousel from "bootstrap/js/dist/carousel";
import $ from "jquery"

$('#eventCarousel .carousel-item').each(function () {
    let minPerSlide = 4;
    let next = $(this).next();
    for (let i = 1; i < minPerSlide; i++) {
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        next = next.next();
    }
});

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

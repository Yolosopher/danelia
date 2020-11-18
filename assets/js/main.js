// variables
const burger = document.querySelector(".burger");
let homeMainArticles;
if (document.querySelector('.home-main')) {
    homeMainArticles = document
	.querySelector(".home-main-section")
    .querySelectorAll("article");    
}
    
const homeMainImages = document.querySelectorAll(".article-right-imgdiv");
let a = [];

// functions

// event listeners
burger.addEventListener("click", () => {
	burger.classList.toggle("active");
});

// load
window.addEventListener("load", () => {
    // article bg-color setter
    if (homeMainArticles) {
        homeMainArticles.forEach((element) => {
            let color = element.getAttribute("data-color");
            element.style.backgroundColor = color;
            let obj = {
                elem: element.firstElementChild.lastElementChild,
                color: color,
            };
            a = [...a, obj];
        });
    }
	a.forEach((element) => {
		element.elem.addEventListener("mouseenter", () => {
			element.elem.style.color = element.color;
		});
		element.elem.addEventListener("touchstart", () => {
			element.elem.style.color = element.color;
			element.elem.style.backgroundColor = "#fff";
		});

		element.elem.addEventListener("mouseleave", () => {
			element.elem.style.color = "#fff";
		});
		element.elem.addEventListener("touchend", () => {
			element.elem.style.color = "#fff";
			element.elem.style.backgroundColor = element.color;
		});
		element.elem.addEventListener("touchcancel", () => {
			element.elem.style.color = "#fff";
			element.elem.style.backgroundColor = element.color;
		});
	});
});

// swipers
let homeSwiper = new Swiper(".swiper-container", {
    slidesPerView: 'auto',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    direction: "horizontal",
});

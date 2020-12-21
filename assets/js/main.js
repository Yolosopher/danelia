// variables
const burger = document.querySelector(".burger");
const respoMenu = document.querySelector('.respo-menu')
let homeMainArticles;
if (document.querySelector(".home-main")) {
	homeMainArticles = document
		.querySelector(".home-main-section")
		.querySelectorAll("article");
}

const homeMainImages = document.querySelectorAll(".article-right-imgdiv");
let a = [];

// event listeners
burger.addEventListener("click", () => {
	respoMenu.classList.toggle("toggd");
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
let homeSwiper = new Swiper(".home-insta-slider", {
	slidesPerView: "auto",
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,
	direction: "horizontal",
});

// productin gallery slider
var thumbsSlider = new Swiper(".thumbsSlider", {
	spaceBetween: 10,
	slidesPerView: 1.5,
	updateOnWindowResize: true,
	direction: "horizontal",
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	// centeredSlides: true,
	mousewheel: true,
	loop: true,
	
	breakpoints: {
		1025: {
			direction: "vertical",
			slidesPerView: 4.1,
			centeredSlides: false,
			spaceBetween: 16,
			mousewheel: true,
			loop: false
		},
		0: {
			mousewheel: false
		}
	},
});



var mainPhotoSlider = new Swiper(".mainPhotoSlider", {
	slidesPerView: 1.28,
	spaceBetween: 10,
	direction: "vertical",
	slidesPerView: 1,
	updateOnWindowResize: true,
	thumbs: {
		swiper: thumbsSlider,
	},
	navigation: {
		nextEl: ".hidden-next",
		prevEl: ".hidden-prev",
	},
	grabCursor: true,
});

$(".productin-main .swiper-slide").on("click", function () {
	ind = $(this).index();
	$(this).parent().find('.swiper-slide').removeClass('active');
	$(this).addClass('active');
	thumbsSlider.slideTo(ind);
	mainPhotoSlider.slideTo(ind);
});

const respoCatLi = document.querySelectorAll('.footer-cat-li');

respoCatLi.forEach(catli => {
	catli.addEventListener('click', () => {
		catli.classList.toggle('active')
	})
});


const passSuccChanged = () => {
	document.querySelector('.success-error-message-outter').classList.add('active');
};

const navActive = () => {
	if (document.querySelector('.productin-main') || document.querySelector('.product-main')) {
		document.querySelectorAll('.header-nav-ul li')[1].classList.add('active');
		document.querySelectorAll('.respo-menu-toggled-ul li')[1].classList.add('active');
	} else if (document.querySelector('.home-main-section')) {
		document.querySelectorAll('.header-nav-ul li')[0].classList.add('active');
		document.querySelector('.respo-menu-home').classList.add('active');
		document.querySelectorAll('.respo-menu-toggled-ul li')[0].classList.add('active');
	} else if (document.querySelector('.aboutus-main-article-textdiv')) {
		document.querySelectorAll('.header-nav-ul li')[3].classList.add('active');
		document.querySelectorAll('.respo-menu-toggled-ul li')[2].classList.add('active');
	} else if (document.querySelector('.contact-form')) {
		document.querySelectorAll('.header-nav-ul li')[4].classList.add('active');
		document.querySelectorAll('.respo-menu-toggled-ul li')[3].classList.add('active');
	} else if (document.querySelector('.cart-main')) {
		document.querySelector('.bag').classList.add('active');
		document.querySelector('.respo-menu-bag').classList.add('active');
	} else if (document.querySelector('.login-main')) {
		document.querySelector('.header-iconmenu-ul .profile').classList.add('active');
		document.querySelector('.respo-menu-profile').classList.add('active');
	}
};

navActive();
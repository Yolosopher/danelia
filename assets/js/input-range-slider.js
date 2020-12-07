let inputLeft = document.getElementById("input-left");
let inputRight = document.getElementById("input-right");

let thumbLeft = document.querySelector(".slider > .thumb.left");
let thumbRight = document.querySelector(".slider > .thumb.right");
let range = document.querySelector(".slider > .range");

let localMin, localMax;

window.addEventListener('load', () => {
	let hours = 24 * 14; // Reset when storage is more than 24hours
	let now = new Date().getTime();
	let setupTime = localStorage.getItem('setupTime');
	if (setupTime == null) {
		localStorage.setItem('setupTime', now)
	} else {
		if(now-setupTime > hours*60*60*1000) {
			localStorage.clear()
			localStorage.setItem('setupTime', now);
		}
	}



	if (localStorage.getItem('priceFilterMin')) {
		inputLeft.value = +localStorage.getItem('priceFilterMin');
		localMin = +localStorage.getItem('priceFilterMin');
		setLeftValue();
	} else {
		localStorage.setItem('priceFilterMin', inputLeft.value)
	}
	if (localStorage.getItem('priceFilterMax')) {
		inputRight.value = +localStorage.getItem('priceFilterMax');
		localMax = +localStorage.getItem('priceFilterMin');
		setRightValue();
	} else {		
		localStorage.setItem('priceFilterMax', inputRight.value);
	}
})

function setLeftValue() {
	let _this = inputLeft,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

	let percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft.style.left = percent + "%";
	range.style.left = percent + "%";
	let spanInside = thumbLeft.querySelector('span');
	spanInside.innerText = `${_this.value}.00 ₾`;
	if (percent < 5) {
		spanInside.classList.add('empty');
	} else {
		spanInside.classList.remove('empty');
	}
	localStorage.setItem('priceFilterMin', _this.value);
}



function setRightValue() {
	let _this = inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

	let percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight.style.right = (100 - percent) + "%";
	range.style.right = (100 - percent) + "%";
	let spanInside = thumbRight.querySelector('span');
	spanInside.innerText = `${_this.value}.00 ₾`;
	if (percent > 95) {
		spanInside.classList.add('full');
	} else {
		spanInside.classList.remove('full');
	}
	localStorage.setItem('priceFilterMax', _this.value);
}

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function() {
	thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function() {
	thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function() {
	thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function() {
	thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function() {
	thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function() {
	thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function() {
	thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function() {
	thumbRight.classList.remove("active");
});


// tel input
const telInput = document.getElementById('order-now-tel');

telInput.addEventListener('change', () => {
    checkTelPut(telInput);
})

// address input
const addressInput = document.getElementById('order-now-exact-address');

addressInput.addEventListener('change', () => {
    checkAddressPut(addressInput);
})



// validation functions

const checkRegSelect = (selecttt) => {
	let value = selecttt.value;
	let parent = input.parentElement;

	let ifSelect = /^\d+$/.test(value);

	if (value === "") {
		parent.classList.add("invalid");
		parent.classList.add("invalid-shown");
		return false;
	} else if (!ifSelect) {
		parent.classList.add("invalid");
		parent.classList.add("invalid-shown");
		return false;
	} else {
		parent.classList.remove("invalid");
		parent.classList.remove("invalid-shown");
		return true;
	}
}

const checkTelPut = (input) => {
	let value = input.value;
	let parent = input.parentElement;
	let ifTel = /^(5)\d{8}$/.test(value);

	if (value === "") {
		parent.classList.add("invalid");
		parent.classList.remove("invalid-shown");
	} else if (ifTel && value.length === 9) {
		parent.classList.remove("invalid");
		parent.classList.remove("invalid-shown");
	} else {
		parent.classList.add("invalid");
		parent.classList.add("invalid-shown");
	}
};

const checkAddressPut = (input) => {
	let value = input.value;
	let parent = input.parentElement;
	if (value === "") {
		parent.classList.add("invalid");
		parent.classList.remove("invalid-shown");
	} else if (value.length > 6) {
		parent.classList.remove("invalid");
		parent.classList.remove("invalid-shown");
	} else {
		parent.classList.add("invalid");
		parent.classList.add("invalid-shown");
	}
};
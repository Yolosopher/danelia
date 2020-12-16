// reg-log email
const emailInputs = document.querySelectorAll(".input-email");

emailInputs.forEach((emailPut) => {
	emailPut.addEventListener("change", () => {
		checkEmailPut(emailPut);
	});
});

// reg-log password
const passInputs = document.querySelectorAll(".input-password");

passInputs.forEach((passPut) => {
	passPut.addEventListener("change", () => {
		checkPassPut(passPut);
	});
});

// reg-log text
const textInputs = document.querySelectorAll(".input-text");

textInputs.forEach((textPut) => {
	textPut.addEventListener("change", () => {
		let secondTextPut =
			textPut.id === "login-firstname-forReg"
				? document.getElementById("login-lastname-forReg")
				: document.getElementById("login-firstname-forReg");

		checkTextPut(textPut);
		if (!textPut.parentElement.classList.contains("invalid")) {
			checkTextPut(secondTextPut);
		}
	});
});

// reg-log tel
const telInputs = document.querySelectorAll(".input-tel");

telInputs.forEach((telPut) => {
	telPut.addEventListener("change", () => {
		checkTelPut(telPut);
	});
});

// validation functions
const checkTelPut = (telPut) => {
	let value = telPut.value;
	let parent = telPut.parentElement;
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
const checkEmailPut = (emailPut) => {
	let value = emailPut.value;
	let parent = emailPut.parentElement;
	let ifEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);

	if (value === "") {
		parent.classList.add("invalid");
		parent.classList.remove("invalid-shown");
	} else if (!ifEmail) {
		parent.classList.add("invalid");
		parent.classList.add("invalid-shown");
	} else {
		parent.classList.remove("invalid");
		parent.classList.remove("invalid-shown");
	}
};
const checkPassPut = (passPut) => {
    let id = passPut.id;
	let isRepeated = id === "login-passwordrepeat-forReg";
	let isLoginPass = Boolean(passPut.closest('#login-form'));

	passPut.value = String(passPut.value);
	let value = passPut.value;
	let parent = passPut.parentElement;

	if (isLoginPass) {
		parent.classList.remove("invalid");
		parent.classList.remove("invalid-shown");
		return;
	}

	if (value === "") {
		parent.classList.add("invalid");
		parent.classList.remove("invalid-shown");
    } else if (isRepeated) {
        let notRepeated = document.getElementById('login-password-forReg');
        if (notRepeated.value !== passPut.value) {
		    parent.classList.add("invalid");
		    parent.classList.add("invalid-shown");
        } else { 
		    parent.classList.remove("invalid");
		    parent.classList.remove("invalid-shown");
        }
    } else if (value.length > 5 && value.length < 51) {
		parent.classList.remove("invalid");
		parent.classList.remove("invalid-shown");
	} else {
		parent.classList.add("invalid");
		parent.classList.add("invalid-shown");
	}
};
const checkTextPut = (textPut) => {
	let value = textPut.value;
	let parent = textPut.parentElement;
	if (value === "") {
		parent.classList.add("invalid");
		parent.classList.remove("invalid-shown");
	} else if (value.length > 1) {
		parent.classList.remove("invalid");
		parent.classList.remove("invalid-shown");
	} else {
		parent.classList.add("invalid");
		parent.classList.add("invalid-shown");
	}
};

// submit validation
const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        let inputDivs = form.querySelectorAll('.input-div.invalid');
        console.log(inputDivs);
        if (inputDivs[0]) {
            inputDivs.forEach(each => {
                each.classList.add('invalid-shown');
            });
            e.preventDefault();
            return false;
        }
    })
});
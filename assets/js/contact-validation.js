const nameInput = document.getElementById("contact-name");
const mailInput = document.getElementById("contact-email");
const textArea = document.getElementById("contact-text");

nameInput.addEventListener("change", () => {
	checkTextPut(nameInput);
});
mailInput.addEventListener("change", () => {
	checkEmailPut(mailInput);
});
textArea.addEventListener("change", () => {
    checkTextArea(textArea);
});

// validation functions
const checkTextPut = (textPut) => {
    textPut.value = String(textPut.value);
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
const checkEmailPut = (emailPut) => {
    emailPut.value = String(emailPut.value);
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
const checkTextArea = (area) => {
    area.value = String(area.value);
    let value = area.value;
    let parent = area.parentElement;
    if (value === "") {
		parent.classList.add("invalid");
		parent.classList.remove("invalid-shown");
    } else if (value.length > 9) {
		parent.classList.remove("invalid");
		parent.classList.remove("invalid-shown");
    }else {
		parent.classList.add("invalid");
		parent.classList.add("invalid-shown");
    }
    
};
// check all asap
let allTogether = [nameInput, mailInput, textArea];
allTogether.forEach(each => {
    let val = each.value;
    if (val.length > 1) {
        each.parentElement.classList.remove('invalid');
    }
});

// submit validation
const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        let inputDivs = form.querySelectorAll('.invalid');
        if (inputDivs[0]) {
            inputDivs.forEach(each => {
                each.classList.add('invalid-shown');
            });
            e.preventDefault();
            return false;
        }
    })
});
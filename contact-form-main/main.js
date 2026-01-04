const contactForm = document.querySelector('.contact__form');

const contactInputs = contactForm.querySelectorAll('input,textarea');

contactInputs.forEach(input => {
    input.addEventListener("change", (e) => {
        let validateRes;
        const value = e.currentTarget.value;

        if (e.currentTarget.required) {
            validateRes = checkRequiredText(value);
        }

        switch (e.currentTarget.type) {
            case 'email':
                {
                    validateRes = validateEmail(value);
                } break;
        }

        if (typeof validateRes === 'string') {
            showInputError(e.currentTarget, validateRes);
            return;
        } else {
            resetInputError(e.currentTarget);
        }
    });
});

contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const findedInputs = contactForm.querySelectorAll('input:not([type="radio"]),textarea,input[type="radio"]:checked');
    const fieldsRequired = {};

    contactInputs.forEach(input => {
        fieldsRequired[input.name] = {
            input
        };
    });

    findedInputs.forEach(input => {
        if (!fieldsRequired[input.name]) return;

        if (input.type === 'checkbox') {
            fieldsRequired[input.name].value = input.checked;
        } else {
            fieldsRequired[input.name].value = input.value;
        }
    });

    let canContinue = true;
    for (const key in fieldsRequired) {
        let validateRes;

        if (fieldsRequired[key].input.required) {
            validateRes = checkRequiredText(fieldsRequired[key].value);
        }

        if (typeof validateRes === 'string') {
            showInputError(fieldsRequired[key].input, validateRes);
            canContinue = false;
            continue;
        }

        switch (key) {
            case 'consent':
                {
                    console.log(fieldsRequired[key])
                    validateRes = validateConsent(fieldsRequired[key].value);
                } break;
            case 'email':
                {
                    validateRes = validateEmail(fieldsRequired[key].value);
                }
        }

        if (typeof validateRes === 'string') {
            showInputError(fieldsRequired[key].input, validateRes);
            canContinue = false;
        }else {
            resetInputError(fieldsRequired[key].input)
        }
    }
    if(!canContinue) return;
    submitForm(Object.entries(fieldsRequired).map(x=>[x[0], x[1].value]));
    showPopUpMessage('Message Sent!', "Thanks for completing the form. We'll be in touch soon!");
});

function checkRequiredText(text = "") {
    if (text.length <= 0) {
        return 'This field is required';
    }

    return true;
}

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function validateEmail(email = "") {
    if (!emailRegex.test(email)) {
        return 'Please enter a valid email address';
    }
    return true;
}

function resetInputError(input) {
    let errorMessageEl = input.nextElementSibling;

    if (!errorMessageEl || !errorMessageEl.classList.contains('contact__input-error')) {
        const fieldset = input.closest('fieldset');
        if (!fieldset) {
            const label = input.closest('label');
            if (!label) return;
            errorMessageEl = label.nextElementSibling;
            if (!errorMessageEl || !errorMessageEl.classList.contains('contact__input-error')) return;
        } else {
            errorMessageEl = fieldset.nextElementSibling;
            if (!errorMessageEl || !errorMessageEl.classList.contains('contact__input-error')) return;
        }
    }
    
    input.classList.remove('contact__input--error');
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedby');
    errorMessageEl.hidden = true;
    errorMessageEl.textContent = '';
}

function showInputError(input, errorMessage) {
    let errorMessageEl = input.nextElementSibling;

    if (!errorMessageEl || !errorMessageEl.classList.contains('contact__input-error')) {
        const fieldset = input.closest('fieldset');
        if (!fieldset) {
            const label = input.closest('label');
            if (!label) return;
            errorMessageEl = label.nextElementSibling;
            if (!errorMessageEl || !errorMessageEl.classList.contains('contact__input-error')) return;
        } else {
            errorMessageEl = fieldset.nextElementSibling;
            if (!errorMessageEl || !errorMessageEl.classList.contains('contact__input-error')) return;
        }
    }

    input.classList.add('contact__input--error');
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedby', errorMessageEl.id);
    errorMessageEl.hidden = false;
    errorMessageEl.textContent = errorMessage;
}

function validateConsent(consent = '') {
    if (consent !== true) {
        return 'To submit this form, please consent to being contacted';
    }

    return true;
}

function submitForm (formData = {}) {
    console.log(formData);
}

// const 
const popUpMessageEl = document.querySelector('.popup-message');
const popUpTitle = popUpMessageEl.querySelector('h2');
const popUpMessage = popUpMessageEl.querySelector('p');
let messageList = [];
let isShowPopupOpen =true;

function showPopUpMessage(title, message) {
    if (!isShowPopupOpen) {
        messageList.push([title, message]);
        return;
    }
    
    isShowPopupOpen = false;

    popUpMessageEl.hidden = false;
    popUpMessageEl.classList.add("show-popup");
    popUpTitle.textContent = title;
    popUpMessage.textContent = message;

    setTimeout(() => {
        popUpMessageEl.classList.remove("show-popup");    
        setTimeout(() => {
            popUpMessageEl.hidden = true;
            isShowPopupOpen = true;
            if(messageList.length <= 0)return;
            const [title, message] = messageList.pop();
            showPopUpMessage(title, message); 
        }, 1000);
    }, 3000);
}
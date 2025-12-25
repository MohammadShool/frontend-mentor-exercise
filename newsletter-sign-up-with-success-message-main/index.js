/*
    in here we trust to html hirachy and find subscribe card and success panel to each card 
    i assume who we have several subscribe form in a page (but i think we could create it with ids and be unique per document)
 */

const subscribeForms = document.querySelectorAll('.subscription-form')

subscribeForms.forEach(subscribeForm => {
    subscribeForm.addEventListener("submit", (e) => {
        e.preventDefault();
        submitForm(e.currentTarget)
    })
})

const closeSuccessPanelButtons = document.querySelectorAll(".successfull__close-btn")

closeSuccessPanelButtons.forEach(closeSuccessPanelButton => {
    closeSuccessPanelButton.addEventListener("click", (e) => {
        const signUpElement = e.currentTarget.closest(".sign-up");
        closeSuccessPanel(signUpElement);
    })
})

function submitForm(form) {
    const formData = new FormData(form)
    const email = formData.get("email")

    if (!validateEmail(email)) {
        showError(form)
        return;
    }

    const signUpElement = form.closest('.sign-up')
    openSuccessPanel(signUpElement);
}

function showError(form, message = "Valid Email Required") {
    const errorText = form.querySelector(".subscription-form__error");
    const inputText = form.querySelector(".subscription-form__input");

    if (!errorText || !inputText) return;

    errorText.textContent = message;
    inputText.classList.add("subscription-form__input--error");
}

function validateEmail(email = "email@gmail.com") {
    if (email === "") {
        return false;
    }

    const emailSymbolIndex = email.indexOf("@");
    if (emailSymbolIndex < 0) {
        return false;
    }

    if (emailSymbolIndex + 1 >= email.length) {
        return false;
    }

    if (email.length < 5 || email > 32) {
        return false;
    }

    return true;
}

function openSuccessPanel(signupElement) {
    const successPanel = signupElement.querySelector(".sign-up__successfull");
    const signUpCard = signupElement.querySelector(".sign-up__card");
    successPanel.classList.add("sign-up__successfull--opened");
    signUpCard.classList.add("sign-up__card--closed")
}

function closeSuccessPanel(signupElement) {
    const successPanel = signupElement.querySelector(".sign-up__successfull");
    const signUpCard = signupElement.querySelector(".sign-up__card");
    successPanel.classList.remove("sign-up__successfull--opened");
    signUpCard.classList.remove("sign-up__card--closed")
}
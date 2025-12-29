const billForm = document.querySelector(".bill");
const tipAmountText = billForm.querySelector("#tip-amount");
const billAmountText = billForm.querySelector("#bill-amount");
const inputs = billForm.querySelectorAll("input");
const resetBtn = billForm.querySelector("#reset-tip-calculator");
const formData = {}

resetBtn.addEventListener("click", (e) => {
    const zeroNum = (0.0).toFixed(2);
    showTips(zeroNum, zeroNum);
});

inputs.forEach(input => {
    input.addEventListener("change", (e) => {
        const val = parseFloat(e.currentTarget.value);
        resetError(e.currentTarget)
        if (val <= 0 || Number.isNaN(val)) {
            showError(e.currentTarget, "Can`t be zero")
            return;
        }

        formData[e.currentTarget.name] = val;

        if (!formData["people"]) {
            return;
        }

        const res = calculateTip(formData);
        showTips(res.totalTip, res.totalBill);
    })
})

function showTips(totalTip, totalBill) {
    tipAmountText.textContent = `$${(totalTip / formData["people"]).toFixed(2)}`;
    billAmountText.textContent = `$${(totalBill / formData["people"]).toFixed(2)}`;
}

function resetError(formInput) {
    if (!formInput) return;
    formInput.classList.remove("bill__input--error");
    const errMessage = formInput.previousElementSibling;
    if (!errMessage) return;
    errMessage.textContent = "";
}

function showError(formInput, message) {
    if (!formInput) return;
    formInput.classList.add("bill__input--error");
    const errMessage = formInput.previousElementSibling;
    if (!errMessage) return;
    errMessage.textContent = message
}

function calculateTip(formData) {
    const bill = formData["bill"] ?? 0;
    const tip = formData["custom-tip"] ?? formData["tip-percent"] ?? 0;

    const result = {
        totalTip: 0,
        totalBill: 0
    }

    result.totalTip = bill * (tip * 0.01);

    result.totalBill = bill + result.totalTip;

    return result;
}
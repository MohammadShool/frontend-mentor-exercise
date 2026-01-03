const ratingComponents = document.querySelectorAll('.rating');

function rateWithStars(starCount = 0) {
    // do something
    return true;
}

ratingComponents.forEach(ratingEl => {
    const ratingBodyEl = ratingEl.querySelector(".rating__body");
    const ratingThanksEl = ratingEl.querySelector(".rating__thankyou");
    const ratingFormEl = ratingEl.querySelector(".rating__form");
    if (!ratingFormEl) return;

    ratingFormEl.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const starCount = parseInt(formData.get("star"));
        if (!starCount) {
            alert("please select a star to rating");
            return;
        }
        rateWithStars(starCount);
        showThankState(starCount);
    });

    if (!ratingThanksEl) return;

    const liveThankLabelEl = ratingThanksEl.querySelector(".thankyou__selected-info");

    function showThankState(starCount = 0) {
        ratingBodyEl.classList.add("hidden-state");
        ratingThanksEl.classList.remove("hidden-state");
        liveThankLabelEl.textContent = `You selected ${starCount} out of 5`;
    }
});
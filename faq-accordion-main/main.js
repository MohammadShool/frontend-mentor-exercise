const accordings = document.querySelectorAll('.according');
accordings.forEach(according => {
    const accordingDesc = according.querySelector('.according__desc');
    const collapseBtn = according.querySelector('button[aria-expanded]')
    
    collapseBtn.addEventListener("click", (e) => {
       accordingDesc.classList.toggle("hidden-according");
       collapseBtn.setAttribute('aria-expanded', collapseBtn.getAttribute('aria-expanded') === "true" ? "false" : "true");
    });
});
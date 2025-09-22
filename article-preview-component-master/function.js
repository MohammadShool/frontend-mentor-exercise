const btns = document.querySelectorAll(".author__share")

btns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        const popup = btn.closest(".author").querySelector(".share-popup")
        popup.classList.toggle("novisible")
    })
})
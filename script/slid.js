const container = document.querySelector("#container")
const left_btns = document.querySelector(".fa-angles-left")
const right_btns = document.querySelector(".fa-angles-right")

left_btns.addEventListener("click",()=>{
    container.classList.add("on")
})
right_btns.addEventListener("click",()=>{
    container.classList.remove("on")
})
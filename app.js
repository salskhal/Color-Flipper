let colors = ["red", "pink", "orange", "brown", "purple", "lime", "green", "#ffffff", "lightgray", "wheat"];

let color = document.querySelector(".color");
let btn = document.querySelector(".btn");


btn.addEventListener("click", ()=>{
    let randomNumber = getRandomNumber();
    // console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})


function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}



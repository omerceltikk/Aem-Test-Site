let buttons = document.querySelectorAll(".button")
let buttonsArray = [];
buttons.forEach((item)  => item.innerText.includes('2021') ? buttonsArray.push(item) : null)
buttonsArray[0].classList.add("active")

function buttonsArrayToggle() {
  buttonsArray[1].addEventListener("click", (e) => {
    buttonsArray[0].classList.remove("active");
    buttonsArray[1].classList.add("active");
  })
  buttonsArray[0].addEventListener("click", (e) => {
    buttonsArray[1].classList.remove("active");
    buttonsArray[0].classList.add("active");
  })
}

buttonsArrayToggle();
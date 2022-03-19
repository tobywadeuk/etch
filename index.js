// creating container for the divs and blank array for later
let containerT = document.querySelector(".containerDiv")
let divArray = []

// build square and introduce hover functionality
buildSquare(16)
divHover()

// function make the divs change colour when u enter them with your mouseenter
// select all the divs and put them in an array
// when these divs are entered, make em blue
function divHover(userReq) {
  let divArray = Array.from(document.querySelectorAll(".bigDivs"))
  for (let i = 0; i < (divArray.length); i++) {
    divArray[i].addEventListener("mouseenter", function() {
       divArray[i].style.backgroundColor = "#46244C"
    })
  }
}

// build squares with loop based on input
// if userreq is 8, it creates 64 squares, adds teh rigth class and appends them
// it then uses 1420px and 700px to calculate css grid code
function buildSquare(userReq) {
  for (let i = 0; i < (userReq * userReq); i++) {
    let newDiv = document.createElement("div")
    newDiv.classList.add("bigDivs")
    containerT.appendChild(newDiv)

    columnsStyle = (1420 / userReq) + "px"
    let columnsStyleComb = ''
    for (let i = 0; i < userReq; i++) {
      columnsStyleComb = columnsStyleComb + columnsStyle.toString() + " "}
    containerT.style.gridTemplateColumns = columnsStyleComb;

    rowsStyle = (700 / userReq) + "px"
    let rowsStyleComb = ''
    for (let i = 0; i < userReq; i++) {
      rowsStyleComb = rowsStyleComb + rowsStyle.toString() + " "    }
    containerT.style.gridTemplateRows = rowsStyleComb;
  }
}

// when the button is clicked
//put them in an array, ask the user how many squares they want
// careful if they take the piss
//otherwise remove divs, build new square and introduce divhover

document.querySelector("button").addEventListener("click", function() {
  let divArray = Array.from(document.querySelectorAll(".bigDivs"))
  let userReq = prompt("How many squares this time?")
  if (userReq > 0 && userReq < 65) {
    removeDivs()
    buildSquare(userReq);
    divHover(userReq);
  } else {
    alert("dont take the piss")
  }
})


//whack the divs in an array and remove em all
function removeDivs() {
  let divArray = Array.from(document.querySelectorAll(".bigDivs"))
  for (let i = 0; i < divArray.length; i++) {
    divArray[i].remove()
  }
}

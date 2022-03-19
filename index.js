// creating container for the divs and blank array for later
let containerT = document.querySelector(".containerDiv")
let divArray = []
let colourArray = []
let colourPrompt = "single"

// build square and introduce hover functionality
buildSquare(16)
divHover()

let colorButton = document.querySelector(".colorbutton")
colorButton.addEventListener("click", function() {
  colorButton.classList.toggle("colorbuttonclick")
  if (colourPrompt == "single") {
    colourPrompt = "rainbow"
  } else if (colourPrompt == "rainbow") {
    colourPrompt = "single"
  }
})

// function make the divs change colour when u enter them with your mouseenter
// select all the divs and put them in an array
// when these divs are entered, make em blue
function divHover(userReq) {
  let divArray = Array.from(document.querySelectorAll(".bigDivs"))
  // let colourPrompt = prompt("What colours would you like: single or rainbow?")
  if (colourPrompt == "single") {
    for (let i = 0; i < (divArray.length); i++) {
      divArray[i].addEventListener("mouseenter", function() {
        divArray[i].style.backgroundColor = "#46244C"
      })
    }
  } else if (colourPrompt == "rainbow")
    for (let i = 0; i < (divArray.length); i++) {
      colourArray[i] = ("#" + ((1 << 24) * Math.random() | 0).toString(16))
      divArray[i].addEventListener("mouseenter", function() {
        divArray[i].style.backgroundColor = colourArray[i];
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

    columnsStyle = ((window.screen.width - 20) / userReq) + "px"
    let columnsStyleComb = ''
    for (let i = 0; i < userReq; i++) {
      columnsStyleComb = columnsStyleComb + columnsStyle.toString() + " "
    }
    containerT.style.gridTemplateColumns = columnsStyleComb;

    rowsStyle = (window.screen.length - 20 / userReq) + "px"
    let rowsStyleComb = ''
    for (let i = 0; i < userReq; i++) {
      rowsStyleComb = rowsStyleComb + rowsStyle.toString() + " "
    }
    containerT.style.gridTemplateRows = rowsStyleComb;
  }
}

// when the button is clicked
//put them in an array, ask the user how many squares they want
// careful if they take the piss
//otherwise remove divs, build new square and introduce divhover

document.querySelector(".mainbtn").addEventListener("click", function() {
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

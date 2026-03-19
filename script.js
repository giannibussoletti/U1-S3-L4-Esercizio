const daUnoaNovanta = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
  52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
  76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
]

const spawnCell = () => {
  const board = document.getElementById("cartellone-tombola")
  for (let i = 0; i < daUnoaNovanta.length; i++) {
    const numberCell = document.createElement("div")
    const parCreation = document.createElement("p")
    numberCell.classList.add("numeri")
    parCreation.classList.add("testo-numeri")
    parCreation.innerText = i + 1
    board.appendChild(numberCell)
    numberCell.appendChild(parCreation)
  }
}
spawnCell()

const appendingNumber = document.getElementById("drawn-number")
const spanNumber = document.createElement("span")
const drawnCell = document.getElementsByClassName("numeri")

const randomNumber = () => Math.ceil(Math.random() * 90)
const varRandomNumber = randomNumber()

const extratingNumber = () => {
  appendingNumber.innerHTML = ""
  spanNumber.innerText = varRandomNumber
  appendingNumber.appendChild(spanNumber)
  drawnCell[varRandomNumber - 1].classList.add("drawn-number")
  daUnoaNovanta.shift(varRandomNumber)
}

//   for (let i = 0; i < daUnoaNovanta.length; i++) {
//     if (daUnoaNovanta.includes(varRandomNumber) === true) {
//       extratingNumber()
//       console.log(i, varRandomNumber, "if")
//     } else {
//     }
//   }
const estrazioneNum = (event) => {
  for (let i = 0; i < daUnoaNovanta.length; i++) {
    if (daUnoaNovanta.includes(varRandomNumber) === true) {
      extratingNumber()
    } else {
      i = 0
    }
  }
}
// Se il numero è presente nell'array allora fai tutta la tiritera
// per creare lo span e mettere la la casella rossa e poi togli il numero dall'array

// Se invece il numero non è presente nell'array ritira il dado
// const estrazioneNum = (event) =>{
// // if(){

// // }else
// //

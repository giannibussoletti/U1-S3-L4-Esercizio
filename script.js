const spawnCell = () => {
  const board = document.getElementById("cartellone-tombola")
  for (let i = 0; i < 90; i++) {
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

const randomNumber = () => Math.ceil(Math.random() * 90)
const appendingNumber = document.getElementById("drawn-number")
let array = []
const estrazioneNum = (event) => {
  appendingNumber.innerHTML = ""
  const spanNumber = document.createElement("span")
  const drawnCell = document.getElementsByClassName("numeri")
  const stringNum = String(randomNumber())
  spanNumber.innerText = stringNum
  appendingNumber.appendChild(spanNumber)
  for (let i = 0; i < drawnCell.length; i++)
    if (stringNum === drawnCell[i].innerText) {
      drawnCell[i].classList.add("drawn-number")
    }
}

const spawnCell = () => {
  const board = document.getElementById("cartellone-tombola")
  for (let i = 0; i < 90; i++) {
    const numberCell = document.createElement("div")
    numberCell.classList.add("numeri")
    numberCell.innerText = i + 1
    board.appendChild(numberCell)
  }
}
spawnCell()

const pieces = document.querySelectorAll('img')
const squares = document.querySelectorAll('.squares')

pieces.forEach(piece => {
  piece.addEventListener('dragstart', dragStart)
})

squares.forEach(square => {
  square.addEventListener('dragover', dragOver)
  square.addEventListener('drop', dragDrop)
})

let beingDragged

function dragStart(e) {
  beingDragged = e.target
}

function dragOver(e) {
  e.preventDefault()
}

function dragDrop(e) {
  const targetSquare = e.target

  // Check if the target square already has a piece
  if (targetSquare.querySelector('img')) {
    return
  }

  // Append the piece to the target square
  targetSquare.append(beingDragged)
}

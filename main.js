const Pieces = document.querySelectorAll('img');
const squares = document.querySelectorAll('.squares');

Pieces.forEach(piece => {
  piece.addEventListener('dragstart', dragStart);
});

squares.forEach(square => {
  square.addEventListener('dragover', dragOver);
  square.addEventListener('drop', dragDrop);
});

let beingDragged;

function dragStart(e) {
  beingDragged = e.target;
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop(e) {
  const dropZone = e.target;
  if (!dropZone.children.length) {
    dropZone.appendChild(beingDragged);
  } else {
    const originalSquare = beingDragged.parentElement;
    originalSquare.appendChild(beingDragged);
  }
}

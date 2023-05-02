const pieces = document.querySelectorAll('img');
const squares = document.querySelectorAll('.squares');

pieces.forEach(piece => {
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
  if (e.target.children.length === 0) {
    e.target.appendChild(beingDragged);
  }
  else {
    alert('Cannot place piece on top of another piece.');
  }
}

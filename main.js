const pieces = document.querySelectorAll('img');
const squares = document.querySelectorAll('.square');

pieces.forEach(piece => {
  piece.addEventListener('dragstart', dragStart);
  piece.addEventListener('dragend', dragEnd);
});

squares.forEach(square => {
  square.addEventListener('dragover', dragOver);
  square.addEventListener('dragenter', dragEnter);
  square.addEventListener('dragleave', dragLeave);
  square.addEventListener('drop', dragDrop);
});

let draggedPiece = null;

function dragStart(e) {
  draggedPiece = e.target;
  setTimeout(() => {
    e.target.style.display = 'none';
  }, 0);
}

function dragEnd(e) {
  draggedPiece.style.display = 'block';
  draggedPiece = null;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');
}

function dragDrop(e) {
  if (!this.querySelector('img')) {
    this.append(draggedPiece);
  }
  this.classList.remove('hovered');
}

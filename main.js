const Pieces = document.querySelectorAll('img')
const squares = document.querySelectorAll('.squares')

Pieces.forEach(piece => {
piece.addEventListener('dragstart', dragStart )})



    squares.forEach(squares => {
    squares.addEventListener('dragover', dragOver)
    squares.addEventListener('drop', dragDrop)})


    let beingDragged

    function dragStart(e){
    beingDragged =e.target
}


    function dragOver(e){
    e.preventDefault()
    }
        function dragDrop(e){
            e.target.append(beingDragged)
        }
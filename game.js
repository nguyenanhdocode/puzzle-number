var row = 0, col = 0

var sizeForm =  document.getElementById('form')
var sizeButtonList = document.querySelector('#size-form .form-body')
var boardDiv = document.getElementById('board')
var gameDiv = document.getElementById('game')

var boardWidth = 600, boardHeight = 600

for (let i = 0; i < sizeButtonList.childNodes.length; i++) {
    sizeButtonList.childNodes[i].onclick = function(e) {
        row = parseInt(e.target.getAttribute('r'))
        col = parseInt(e.target.getAttribute('c'))

       sizeForm.style.display = 'none'

       gameDiv.style.display = 'block'

       startGame()

    }
}

var board = []
var numbers = []

function startGame() {
    var i = 1
    while (i <= (row * col - 1)) {
        numbers.push(i)

        i += 1
    }

    numbers = shuffle(numbers)
    numbers.push(0)

    if (numbers) {
        var i = 0

        var r = []

        while (i <= row * col) {

            if (r.length == col) {
                board.push(r)
                r = []
            }

            var div = document.createElement('div')
            div.style.width = `${boardWidth / col - 6}px`
            div.style.height = `${boardHeight / row - 6}px`
            div.classList.add('piece')
            if (numbers[i] != 0) {
                div.innerText = numbers[i]
                div.classList.add('moveable')
            }
            else {
                div.innerText = 'A'
                div.classList.add('empty-piece')
            }
            
            r.push(div)

            i += 1
        }
    }

    draw()
}


function shuffle(array) {
    let counter = array.length;

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}


function draw() {
    board.innerHTML = ''
    for (var r = 0; r < row; r++) {
        for (var c = 0; c < col; c++) {
            boardDiv.appendChild(board[r][c])
        }
    }
}

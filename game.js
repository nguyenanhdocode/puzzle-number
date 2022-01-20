var row = 0, col = 0

var sizeForm =  document.getElementById('form')
var sizeButtonList = document.querySelector('#size-form .form-body')
var gameDiv = document.getElementById('game')

for (let i = 0; i < sizeButtonList.childNodes.length; i++) {
    sizeButtonList.childNodes[i].onclick = function(e) {
        row = parseInt(e.target.getAttribute('r'))
        col = parseInt(e.target.getAttribute('c'))

       sizeForm.style.display = 'none'

       gameDiv.style.display = 'flex'

    }
}


function startGame() {

}
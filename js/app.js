/*-------------------------------- Constants --------------------------------*/
let A = 
let B = 
let C =
let D =
let E =
let F =


/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const buttonAEl = document.querySelector('#A')
const buttonBEl = document.querySelector('#B')
const buttonCEl = document.querySelector('#C')
const buttonDEl = document.querySelector('#D')
const buttonEEl = document.querySelector('#E')
const buttonFEl = document.querySelector('#F')

const buttonELs = document.querySelector('#message')


/*-------------------------------- Functions --------------------------------*/
function init () {
console.log('Hi!')
}

function render() {
    updateMessage()
}

function updateMessage() {
    if ()
}

function handleClick(event) {

}


/*----------------------------- Event Listeners -----------------------------*/
buttonAEl.addEventListener('click', init)
buttonBEl.addEventListener('click', init)
buttonCEl.addEventListener('click', init)
buttonDEl.addEventListener('click', init)
buttonEEl.addEventListener('click', init)
buttonFEl.addEventListener('click', init)

buttonEls.forEach((button) => {
    button.addEventListener('click', handleClick)
});



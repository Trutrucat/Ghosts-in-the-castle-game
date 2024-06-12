/*-------------------------------- Constants --------------------------------*/
// let A;
// let B;
// let C;
// let D;
// let E;
// let F;

    const game = {
    lives: 3,
    player: 'Player Name',
    stages: ['stage 1', 'stage 2', 'stage 3', 'stage 4', 'stage 5', 'stage 6'],
}


/*---------------------------- Variables (state) ----------------------------*/
let userChoice = ''


/*------------------------ Cached Element References ------------------------*/
// const buttonAEl = document.querySelector('#A')
// const buttonBEl = document.querySelector('#B')
// const buttonCEl = document.querySelector('#C')
// const buttonDEl = document.querySelector('#D')
// const buttonEEl = document.querySelector('#E')
// const buttonFEl = document.querySelector('#F')

const buttonELs = document.querySelector('#buttons')

const messageEl = document.querySelector('#message')

const storyEl = document.querySelector('#story')
/*-------------------------------- Functions --------------------------------*/
function init () {
    render();
    buttonELs.forEach((button) => {
        button.addEventListener('click', handleClick);
    }
)
function render() {
    
}

function updateMessage() {
    // if ()
}

function handleClick(event) {

}}


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



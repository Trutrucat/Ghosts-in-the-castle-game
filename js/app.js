/*-------------------------------- Constants --------------------------------*/
// let A;
// let B;
// let C;
// let D;
// let E;
// let F;
function init () {

    const game = {
    lives: 3,
    player: 'Player Name',
    stages: [
        {
            title: 'stage 1',
            message: 'content',
            graphic: 'image url',
            playerOptions: [game.stages[1], game.stages[2]]
        },
        {
            title: 'stage 2',
            message: 'content',
            graphic: 'image url',
            playerOptions: [game.stages[2], game.stages[3]]
        },
        {
            title: 'stage 3',
            message: 'content',
            graphic: 'image url',
            playerOptions: [game.stages[3], game.stages[4]]
        },
        {
            title: "stage 4",
            message: "content",
            graphic: "image url",
            playerOptions: [game.stages[4], game.stages[5]]
          },
          {
            title: "stage 5",
            message: "content",
            graphic: "image url",
            playerOptions: [game.stages[5], game.stages[6]]
          }
    ]
}
}

/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const buttonAEl = document.querySelector('#A')
const buttonBEl = document.querySelector('#B')
const buttonCEl = document.querySelector('#C')
const buttonDEl = document.querySelector('#D')
const buttonEEl = document.querySelector('#E')
const buttonFEl = document.querySelector('#F')

const buttonELs = document.querySelector('#message')

const messageEl = document.querySelector('#message')
/*-------------------------------- Functions --------------------------------*/

function render() {
    updateMessage()
}

function updateMessage() {
    // if ()
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



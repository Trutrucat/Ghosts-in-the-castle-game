/*-------------------------------- Constants --------------------------------*/

const stages = [
    {
        message: 'Welcome to Preston Castle, built in the late 1800s as a reform school for boys, now an abandoned and spooky place, home to restless spirits and entities. Where would you like to explore first? The old infirmary? Or the dormitory for the boys known as "Company B"?',
        btnNames: ['go to the infirmary', 'go to company B'],
        gotoOptions: [1, 2]
    },
    {
        message: 'You step into the dark infirmary. There are several old hospital beds arranged in a row. An abandoned wheel chair sits next to one of the beds. You stop walking to listen. All is silent. Would you like to stay to see if anything happens? Or would you like to go upstairs to investigate the company B?',
        btnNames: ['stay in infirmary', 'go upstairs to company B'],
        gotoOptions: [3, 2]
    },
    {
        message: 'You walk down a long hallway full of windows. You see rows of hooks on each side of the hallway. They are where the boys hung their daytime clothing and had to put on light colored nightshirts so that if they tried to escape in the night, they would be easily spotted by the guards. As you enter the doorway of the dormitory, you see one large room with beds. There is a tall vaulted ceiling with exposed rafters. A single stall toilet sits next to a desk and chair at the front of the room where the guard sat watch over the boys at night. Out of the corner of your eye you catch a slight moment high up in the rafters. Do you run away towards the infirmary? Or do you stay to investigate?',
        btnNames: ['run to the infirmary', 'stay and investigate company B'],
        gotoOptions: [1, 4]
    },
    {
        message: 'You settle in on one of the beds, listening for any sounds. All is quiet. You strain your eyes in the darkness to catch sight of any movement. All is still. Suddenly you hear a sound coming from the floor directly above you. It sounds like footsteps in the dormitory but you know that you are alone in the castle. You decide to climb the stairs and go check out company B.',
        btnName: ['go upstairs to company B'],
        gotoOption: [2]
    },
    {
        message: 'You take a deep breath and calm your shaky nerves as you shine your flashlight up into the rafters where you thought you saw something moving. All you can see is the old, worn graffiti from years ago where the boys climbed up to sign their names. You decide that you should further investigate with the equipment you brought along. Do you try to take a photo with your full-spectrum camera? Or do you go the low-tech route and set up a cat ball on the bed to see if any spirits want to touch it and light it up?',
        btnNames: ['high-tech camera', 'low-tech cat ball'],
        gotoOption: [5, 6]
    },
    {
        message: 'You take your full-spectrum camera from its case and attach the infrared light to it. You carefully aim it at the rafters where you thought you saw movement from the corner of your eye. You stare through the bright view screen and see nothing. You snap a few pictures just in case, but you have a feeling nothing will show up in the photos. Maybe you needed to choose the low tech option. You decide to try the cat ball instead.',
        btnNames: 'try the cat ball'
     },
     {
        message: 'You decide to set up cat ball to see if there is anyone in the room with you. You place one carefully on the bed and call out to whatever spirits may be watching, “I am placing this ball that lights up with just the slightest moment on this bed. If you would like to make your presence known, feel free to show me you are here by lighting it up!”  You turn on your spirit box app on your phone to listen for any voices that may come through. Just as you are turning it on you hear a little voice giggle and say “hello!”. Suddenly the cat ball on the bed next to where you are standing lights up. You smile and say “Thank you for making your presence known!” The ball continues to light up. Congratulations! You are a winner! You just made your very first contact with the spirits of Preston Castle!'
     }

]


/*---------------------------- Variables (state) ----------------------------*/
let userChoice = '';


/*------------------------ Cached Element References ------------------------*/
// const buttonAEl = document.querySelector('#A')
// const buttonBEl = document.querySelector('#B')
// const buttonCEl = document.querySelector('#C')
// const buttonDEl = document.querySelector('#D')
// const buttonEEl = document.querySelector('#E')
// const buttonFEl = document.querySelector('#F')

const buttonELs = document.querySelectorAll('#buttons button')

const messageEl = document.querySelector('#message')

const storyEl = document.querySelector('#story')
/*-------------------------------- Functions --------------------------------*/
function init () {
    userChoice = 0;
    render();
    buttonELs.forEach((button) => {
        button.addEventListener('click', handleClick);
    }
)
function render() {
    messageEl.textContent = stages[userChoice].message;
    buttonELs.forEach((button, index) => {
        button.textContent = stages[userChoice].btnNames[index];
    })
}

function updateMessage() {
    // if ()
}

function handleClick(event) {
    const buttonText = event.target.textContent;
    const currentIndex = stages[userChoice].btnNames.indexOf(buttonText);
    userChoice = stages[userChoice].gotoOptions[currentIndex];
    render();
}}
init();


/*----------------------------- Event Listeners -----------------------------*/
// buttonAEl.addEventListener('click', init)
// buttonBEl.addEventListener('click', init)
// buttonCEl.addEventListener('click', init)
// buttonDEl.addEventListener('click', init)
// buttonEEl.addEventListener('click', init)
// buttonFEl.addEventListener('click', init)




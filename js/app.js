
const stages = [
    {
        message: 'Welcome to Preston Castle, built in the late 1800s as a reform school for boys, now an abandoned and spooky place, home to restless spirits and entities. To win this game you need to make contact with a ghost! Where would you like to explore first? The old infirmary? Or the dormitory for the boys known as "Company B"?',
        btnNames: ['go to the infirmary', 'go to company B'],
        gotoOptions: [1, 2],
        imgUrl: 'https://img.atlasobscura.com/oi-h_yF7p_bugEakl4Xym2dDMT_SG8p6ecuzYzQ6PLQ/rt:fit/h:390/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy8wNWEw/OGI2MmRmODA4OGEy/OTc3MTA0MzIyYjQz/YmYwYjU3ZThhNTIz/LmpwZw.jpg'
    },
    {
        message: 'You step into the dark infirmary. There are several old hospital beds arranged in a row. An abandoned wheel chair sits next to one of the beds. You stop walking to listen. All is silent. Would you like to stay to see if anything happens? Or would you like to go upstairs to investigate company B?',
        btnNames: ['stay in infirmary', 'go upstairs to company B'],
        gotoOptions: [3, 2],
        imgUrl: 'https://cropper.watch.aetnd.com/cdn.watch.aetnd.com/sites/4/2017/07/lowe-cation-preston-castle-infirmary-1920x1080.jpg',

    },
    {
        message: 'You walk down a long hallway full of windows. You see rows of hooks on each side of the hallway. They are where the boys hung their daytime clothing and had to put on light colored nightshirts so that if they tried to escape in the night, they would be easily spotted by the guards. As you enter the doorway of the dormitory, you see one large room with beds. There is a tall vaulted ceiling with exposed rafters. A single stall toilet sits next to a desk and chair at the front of the room where the guard sat watch over the boys at night. Out of the corner of your eye you catch a slight moment high up in the rafters. Do you run away towards the infirmary? Or do you stay to investigate?',
        btnNames: ['run to the infirmary', 'stay and investigate company B'],
        gotoOptions: [1, 4],
        imgUrl: 'https://www.happinessishomemade.net/wp-content/uploads/2023/04/20180714_144646-rotated.jpg'
    },
    {
        message: 'You settle in on one of the beds, listening for any sounds. All is quiet. You strain your eyes in the darkness to catch sight of any movement. All is still. Suddenly you hear a sound coming from the floor directly above you. It sounds like footsteps in the dormitory but you know that you are alone in the castle. You decide to climb the stairs and go check out company B.',
        btnNames: ['go upstairs to company B'],
        gotoOptions: [2],
        imgUrl: 'https://bloximages.chicago2.vip.townnews.com/lodinews.com/content/tncms/assets/v3/editorial/1/26/126faf58-f6bb-5eda-b583-bf9416702578/55311979a3655.image.jpg?resize=751%2C500'
    },
    {
        message: 'You take a deep breath and calm your shaky nerves as you shine your flashlight up into the rafters where you thought you saw something moving. All you can see is the old, worn graffiti from years ago where the boys climbed up to sign their names. You decide that you should further investigate with the equipment you brought along. Do you try to take a photo with your full-spectrum camera? Or do you go the low-tech route and set up a cat ball on the bed to see if any spirits want to touch it and light it up?',
        btnNames: ['high-tech camera', 'low-tech cat ball'],
        gotoOptions: [5, 6],
        imgUrl: 'https://www.happinessishomemade.net/wp-content/uploads/2023/04/Rafters-at-Preston-Castle.jpg'
    },
    {
        message: 'You take your full-spectrum camera from its case and attach the infrared light to it. You carefully aim it at the rafters where you thought you saw movement from the corner of your eye. You stare through the bright view screen and see nothing. You snap a few pictures just in case, but you have a feeling nothing will show up in the photos. Maybe you needed to choose the low tech option. You decide to try the cat ball instead.',
        btnNames: ['try the cat ball'],
        gotoOptions: [6],
        imgUrl: 'https://m.media-amazon.com/images/I/61WlKin5xML._AC_SY355_.jpg'
        
     },
     {
        message: 'You decide to set up cat balls to see if there is anyone in the room with you. You place three carefully on each bed and call out to whatever spirits may be watching, “I am placing these cat balls on the beds. They light up with just the slightest movement. If you would like to make your presence known, feel free to show me you are here by lighting them up!” Just as you step back, you hear a little voice giggle in your ear. Suddenly the cat ball on the bed next to where you are standing lights up. You smile and say “Thank you for making your presence known!” The ball continues to light up. Congratulations! You are a winner! You just made your very first contact with the spirits of Preston Castle!',
        btnNames: [],
        imgUrl: 'https://m.media-amazon.com/images/I/31yRAx8qM9L._AC_SY450_.jpg'
     },

]

let userChoice = 0;

const buttonELs = document.querySelectorAll('#buttons button');
const resetButton = document.getElementById('resetButton');
const messageEl = document.querySelector('#message');
const winMessageEl = document.getElementById('winMessage');
const lossMessageEl = document.getElementById('lossMessage');

function init () {
    userChoice = 0;
    
    buttonELs.forEach((button, index) => {
        button.addEventListener('click', handleClick);
    });
    resetButton.addEventListener('click', handleReset);
    render();
}
function render() {
    messageEl.textContent = stages[userChoice].message;
    const imageElements = document.querySelectorAll('img');
    imageElements.forEach(image => {
        image.style.display = 'none';
    });
    const currentImageId = 'stageImage' + (userChoice + 1);
    const currentImage = document.getElementById(currentImageId);
    if(currentImage) {
        currentImage.src = stages[userChoice].imgUrl;
        currentImage.style.display = 'block';
    }  
    buttonELs.forEach((button, index) => {
        button.textContent = stages[userChoice].btnNames[index];
    });

    winMessageEl.style.display = 'none';
    lossMessageEl.style.display = 'none';
} 

function handleClick(event) {
    const buttonText = event.target.textContent;
    const currentIndex = stages[userChoice].btnNames.indexOf(buttonText);
    if (currentIndex != -1) {
    userChoice = stages[userChoice].gotoOptions[currentIndex];
    render();
    if(userChoice === 6) {
        showWinMessage();
    } else if (userChoice === 5 && buttonText === 'high-tech camera') {
        showLossMessage();
    }
    }
 }
 function handleReset() {
    userChoice = 0;
    render();
    messageEl.style.display = 'block';
    winMessageEl.style.display = 'none';
    lossMessageEl.style.display = 'none';
    buttonELs.forEach(button => {
        button.style.display = 'inline-block';
    });
 }

function showWinMessage() {
    winMessageEl.style.display = 'block';
    messageEl.style.display = 'none';
    buttonELs.forEach(button => {
        button.style.display = 'none';
    });
}

function showLossMessage() {
    lossMessageEl.style.display = 'block';
    messageEl.style.display = 'none';
    buttonELs.forEach(button => {
        button.style.display = 'none';
    })
}
init();





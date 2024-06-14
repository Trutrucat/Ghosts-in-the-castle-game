
const stages = [
    {
        message: 'Welcome to Preston Castle, built in the late 1800s as a reform school for boys, now an abandoned and spooky place, home to restless spirits and entities. To win this game you need to make contact with a ghost! Where would you like to explore first? The old infirmary? Or the dormitory for the boys known as "Company B"?',
        btnNames: ['go to the infirmary', 'go to company B'],
        gotoOptions: [1, 2],
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Preston_Castle_1.jpg'
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
        imgUrl: 'https://www.happinessishomemade.net/wp-content/uploads/2023/04/20180714_144720-rotated.jpg'
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
        imgUrl: 'https://bloximages.chicago2.vip.townnews.com/lodinews.com/content/tncms/assets/v3/editorial/1/27/127a68e8-f3b5-5711-8bb9-1aeae2a0894a/5531197aeac5f.image.jpg?resize=753%2C500'
    },
    {
        message: 'You take your full-spectrum camera from its case and attach the infrared light to it. You carefully aim it at the rafters where you thought you saw movement from the corner of your eye. You stare through the bright view screen and see nothing. You snap a few pictures just in case, but you have a feeling nothing will show up in the photos. Maybe you needed to choose the low tech option. You decide to try the cat ball instead.',
        btnNames: ['try the cat ball'],
        gotoOptions: [6],
        imgUrl: 'https://m.media-amazon.com/images/I/61WlKin5xML._AC_SY355_.jpg'
        
     },
     {
        message: 'You decide to set up cat ball to see if there is anyone in the room with you. You place one carefully on the bed and call out to whatever spirits may be watching, “I am placing this ball that lights up with just the slightest moment on this bed. If you would like to make your presence known, feel free to show me you are here by lighting it up!”  You turn on your spirit box app on your phone to listen for any voices that may come through. Just as you are turning it on you hear a little voice giggle and say “hello!”. Suddenly the cat ball on the bed next to where you are standing lights up. You smile and say “Thank you for making your presence known!” The ball continues to light up. Congratulations! You are a winner! You just made your very first contact with the spirits of Preston Castle!',
        btnNames: [],
        imgUrl: 'https://m.media-amazon.com/images/I/31yRAx8qM9L._AC_SY450_.jpg'
     },

]

let userChoice = 0;

const buttonELs = document.querySelectorAll('#buttons button')

const messageEl = document.querySelector('#message')

function init () {
    userChoice = 0;
    render();
    buttonELs.forEach((button, index) => {
        button.addEventListener('click', handleClick);
    }
)
function render(buttonText) {
    console.log('Current stage:', stages[userChoice]);
    messageEl.textContent = stages[userChoice].message;
    document.getElementById('stageImage1').src = stages[userChoice].imgUrl;
    document.getElementById('stageImage2').src = stages[userChoice].imgUrl;
    document.getElementById('stageImage3').src = stages[userChoice].imgUrl;
    document.getElementById('stageImage4').src = stages[userChoice].imgUrl;
    document.getElementById('stageImage5').src = stages[userChoice].imgUrl;
    document.getElementById('stageImage6').src = stages[userChoice].imgUrl;
    document.getElementById('stageImage7').src = stages[userChoice].imgUrl;
    if (stages[userChoice].btnNames.length === 1) {
        buttonELs[0].textContent =stages[userChoice].btnNames[0];
        buttonELs[1].style.display = 'none'
    } else {
        buttonELs.forEach((button, index) => {
            button.textContent = stages[userChoice].btnNames[index];
        
        });
    }   
}
//for conclusion hide buttons game ending message

function handleClick(event) {
    const buttonText = event.target.textContent;
    console.log('Current user choice:', userChoice);
    console.log('Current stage:', stages[userChoice]);
    const currentIndex = stages[userChoice].btnNames.indexOf(buttonText);
    if (currentIndex != -1) {
    userChoice = stages[userChoice].gotoOptions[currentIndex];
    render(buttonText);
}}}
init();






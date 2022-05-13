let burger = document.querySelector('.burger');
let greyWrapper = document.querySelector(".wrapper-grey");
let burgerTransformation = function () {
    document.querySelector('.burger-line').classList.toggle('active-burger');
    document.querySelector('.nav-bar__items').classList.toggle('visible');
    let body = document.querySelector('body');
    if(body.style.overflow === 'hidden') {
        body.style.overflow = "visible";
    }else {
        body.style.overflow = "hidden";
    }
    document.querySelector(".header").classList.toggle('header__black-bg');
    greyWrapper.classList.toggle('hidden');
}
burger.addEventListener('click', function () {
   burgerTransformation();
});
let liItems = document.getElementsByClassName('close-burger');
for(let i = 0; i < liItems.length; i++) {
    liItems[i].addEventListener('click', function() {
        burgerTransformation();
    })
}
greyWrapper.addEventListener('click', function() {
    burgerTransformation();

})
/* pagination */
let pets2 = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]
let dot = document.querySelector('.pets__counter');
let buttonRight = document.querySelector('.button__right');
let buttonLeft = document.querySelector('.button__left');
let buttonRightFull = document.querySelector('.double-button__right');
let buttonLeftFull = document.querySelector('.double-button__left');
let sliderLeft = document.querySelector('.slider__left');
let sliderRight = document.querySelector('.slider__right');
let sliderActive = document.querySelector('.slider__active');
let sliderItems = document.getElementsByClassName('slider__button');
let popupButton = document.querySelector('.modal__button-close');
let popupCloseArea = document.querySelector('.modal__area-close');
let counter = 2;
let randArray = [];
let sliderWrapper = document.querySelector('.pets__gallary-items');
function generateArrayRandomNumber (min, max) {
    var totalNumbers        = max - min + 1,
        arrayTotalNumbers   = [],
        arrayRandomNumbers  = [],
        tempRandomNumber;
    while (totalNumbers--) {

        arrayTotalNumbers.push(totalNumbers + min);
    }
    while (arrayTotalNumbers.length) {
        tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
        arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
        arrayTotalNumbers.splice(tempRandomNumber, 1);
    }
    return arrayRandomNumbers;
}
for(let i = 0; i < 7; i++) {
    randArray.push(generateArrayRandomNumber(0, 7));
  
}

/* popup */
let displayPopup = function () {
    document.querySelector('.modal').classList.toggle('hidden');
    document.querySelector('.modal__area-close').classList.toggle('hidden');
    let body = document.querySelector('body');
    if(body.style.overflow === 'hidden') {
        body.style.overflow = "visible";
    }else {
        body.style.overflow = "hidden";
    }
    
  }
for(let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].addEventListener('click', displayPopup);
  } 
  popupButton.addEventListener('click', displayPopup);
popupCloseArea.addEventListener('click', displayPopup);
/* end */
const createCardPagination = () => {
    const cardPug = document.createElement("div");
    cardPug.classList.add("pets__item");
  return cardPug;
  }
  const moveLeft = function () { 
    sliderWrapper.classList.add('transition-lefts');
    buttonRight.removeEventListener('click', moveRight);
    buttonLeft.removeEventListener('click', moveLeft);
     };
const moveRight = function () { 
    sliderWrapper.classList.add('transition-rights');
    buttonRight.removeEventListener('click', moveRight);
    buttonLeft.removeEventListener('click', moveLeft);
 };
 const moveLeftMax = function () { 
    sliderWrapper.classList.add('transition-lefts-max');
    buttonRight.removeEventListener('click', moveRight);
    buttonLeft.removeEventListener('click', moveLeft);
     };
const moveRightMax = function () { 
    sliderWrapper.classList.add('transition-rights-max');
    buttonRight.removeEventListener('click', moveRight);
    buttonLeft.removeEventListener('click', moveLeft);
 };
 buttonLeft.addEventListener('click', moveLeft);
 buttonRight.addEventListener('click', moveRight);
 buttonRightFull.addEventListener('click', moveRightMax);
buttonLeftFull.addEventListener('click', moveLeftMax);

 sliderWrapper.addEventListener("animationend", function(animationEvent) {
let change;
if(animationEvent.animationName === "moving-left") {
    sliderWrapper.classList.remove('transition-lefts');
    change = sliderLeft;
    sliderActive.innerHTML = sliderLeft.innerHTML;
    document.querySelector('.slider__active').addEventListener('click', displayPopup);
    if(counter <= 1) {
        counter = 6;
    }else {
        counter = counter - 1;
    }
    dot.innerHTML = counter;
}else if(animationEvent.animationName === "moving-left-max") {
    sliderWrapper.classList.remove('transition-lefts-max');
    change = sliderLeft;
    sliderActive.innerHTML = sliderLeft.innerHTML;
    document.querySelector('.slider__active').addEventListener('click', displayPopup);
        counter = 1;
    dot.innerHTML = counter;
}else if(animationEvent.animationName === "moving-right-max") {
    sliderWrapper.classList.remove('transition-rights-max');
    change = sliderRight;
    sliderActive.innerHTML = sliderRight.innerHTML;
    document.querySelector('.slider__active').addEventListener('click', displayPopup);
   counter = 6;
    dot.innerHTML = counter;
}else {
    sliderWrapper.classList.remove('transition-rights');
    change = sliderRight;
    sliderActive.innerHTML = sliderRight.innerHTML;
    document.querySelector('.slider__active').addEventListener('click', displayPopup);
    if(counter >= 6) {
        counter = 1;
    }else {
        counter = counter + 1;
    }
    dot.innerHTML = counter;
}
for(let i = 0; i < 6; i++) {
    change.innerHTML = "";
for(let i = 0; i < 8; i++) {
    const card = createCardPagination();
    card.insertAdjacentHTML('beforeend', 
    `<img src="${pets2[randArray[counter][i]].img}" alt="">
    <p class="slider__name">
    ${pets2[randArray[counter][i]].name}
    </p>
    <div class="slider__button-wrapper">
        <a href="#" class="slider__button">Learn more</a>
    </div>`);
  change.appendChild(card);
}
}
sliderWrapper.classList.remove('transition-lefts');
sliderWrapper.classList.remove('transition-rights');
buttonLeft.addEventListener('click', moveLeft);
buttonRight.addEventListener('click', moveRight);
if(counter == 1) {
    buttonLeftFull.classList.add('disable');
    buttonLeft.classList.add('disable');
    buttonLeftFull.removeEventListener('click', moveLeft);
    buttonLeft.removeEventListener('click', moveLeft);
}else if (counter !== 1) {
    buttonLeftFull.classList.remove('disable');
    buttonLeft.classList.remove('disable');
}
if(counter == 6) {
    buttonRightFull.classList.add('disable');
    buttonRight.classList.add('disable');
    buttonRightFull.removeEventListener('click', moveRight);
    buttonRight.removeEventListener('click', moveRight);
}else if (counter !== 6) {
    buttonRightFull.classList.remove('disable');
    buttonRight.classList.remove('disable');
}
 })



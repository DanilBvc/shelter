let burger = document.querySelector('.burger');
let greyWrapper = document.querySelector(".wrapper-grey");
let container = document.querySelector('.header .container');

let burgerTransformation = function () {
    document.querySelector('.burger-line').classList.toggle('active-burger');
    document.querySelector('.nav-bar__items').classList.toggle('visible');
    container.style.padding = '0px 30px 0px 10px;'; 
    let body = document.querySelector('body');
    if(body.style.overflow === 'hidden') {
        body.style.overflow = "visible";
    }else {
        body.style.overflow = "hidden";
    }
    document.querySelector(".header").classList.toggle('header__black-bg');
    document.querySelector(".header__down").classList.toggle('hidden');
    document.querySelector(".header__copy").classList.toggle('hidden');
    document.querySelector(".wrapper-grey").classList.toggle('hidden');
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
/* popup */
let popupButton = document.querySelector('.modal__button-close');
let sliderItems = document.getElementsByClassName('slider__button');
let popupCloseArea = document.querySelector('.modal__area-close');

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


/* DOM*/ 
let pets = [
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

/* */
let buttonRight = document.querySelector('.arrow-right');
let buttonLeft = document.querySelector('.arrow-left');
let sliderWrapper = document.querySelector('.slider__wrapper');
let sliderLeft = document.querySelector('.slider__left');
let sliderRight = document.querySelector('.slider__right');

const createCard = () => {
  const card = document.createElement("div");
  card.classList.add("slider__item");
return card;
}

let updatePopup = function() {
  for(let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].addEventListener('click', function(){
     let clicked = sliderItems[i].dataset.index;
      const createCardPopup = () => {
        const cardPopup = document.createElement("span");
        cardPopup.classList.add("modal__wrapper");
      return cardPopup;
      }
      document.querySelector('.modal__wrapper').innerHTML = "";
      const cardPopup = createCardPopup();
      document.querySelector('.modal__wrapper').insertAdjacentHTML('beforeend', 
      `
      <div class="modal__left">
          <img src="${pets[clicked].img}" class="modal__left-custom" alt="">
      </div>
      <div class="modal__right">
          <div class="modal__name">
          ${pets[clicked].name}
          </div>
          <div class="modal__type-wrapper">
              <span class="type">${pets[clicked].type}</span>
              - 
              <span class="breed">${pets[clicked].breed}</span>
          </div>
          <div class="modal__description">
          ${pets[clicked].description}
          </div>
          <ul class="modal__list-ul">
              <li class="modal__list-item">Age: <span class="modal__list-age">${pets[clicked].age}</span></li>
              <li class="modal__list-item">Inoculations: <span class="modal__list-inoculations">${pets[clicked].inoculations}</span></li>
              <li class="modal__list-item">Diseases: <span class="modal__list-diseases">${pets[clicked].diseases}</span></li>
              <li class="modal__list-item">Parasites: <span class="modal__list-parasites">${pets[clicked].parasites}</span></li>
          </ul>
      </div>
  `);
                      document.querySelector('.modal__wrapper').appendChild(cardPopup);
    })
  }
}

const moveLeft = function () { 
    sliderWrapper.classList.add('transition-left');
    buttonRight.removeEventListener('click', moveRight);
    buttonLeft.removeEventListener('click', moveLeft);
     };
const moveRight = function () { 
    sliderWrapper.classList.add('transition-right');
    buttonRight.removeEventListener('click', moveRight);
    buttonLeft.removeEventListener('click', moveLeft);
 }; 

 buttonLeft.addEventListener('click', moveLeft);
    buttonRight.addEventListener('click', moveRight);
  
sliderWrapper.addEventListener("animationend", function (animationEvent) {
  let change;

/* */

/* */
    if(animationEvent.animationName === "move-left") {
        sliderWrapper.classList.remove('transition-left');
        change = sliderLeft;
        document.querySelector('.slider__active').innerHTML = sliderLeft.innerHTML;
        document.querySelector('.slider__active').addEventListener('click', displayPopup);
    }else {
        sliderWrapper.classList.remove('transition-right');
        change = sliderRight;
        document.querySelector('.slider__active').innerHTML = sliderRight.innerHTML;
        document.querySelector('.slider__active').addEventListener('click', displayPopup);
    }

     

   change.innerHTML = "";
   currentElems = [3, 4, 5];
   function getRandNum() {
     const count = 3;
     let res = [];
     while(res.length < count) {
       let randNum = Math.floor(Math.random() * 8);
       if(!res.includes(randNum) && !currentElems.includes(randNum)) {
         res.push(randNum);
       }
     }
     currentElems = res;
      return res;
   }
   getRandNum();
   for(let i = 0; i < 3; i++){
     const card = createCard();
       card.insertAdjacentHTML('beforeend', 
       `<img src="${pets[currentElems[i]].img}" class="slider__item-custom" alt="">
       <p class="slider__name">
       ${pets[currentElems[i]].name}
      </p>
      <div class="slider__button-wrapper">
      <a href="#our-friends" class="slider__button" data-index="${[currentElems[i]]}">Learn more</a>
      </div>
                       </div>`);
     change.appendChild(card);
 
   }
    
    sliderWrapper.classList.remove('transition-left');
    sliderWrapper.classList.remove('transition-right');
    buttonLeft.addEventListener('click', moveLeft);
    buttonRight.addEventListener('click', moveRight);
}  
)
/* popup sort */

setInterval(updatePopup, 1000);
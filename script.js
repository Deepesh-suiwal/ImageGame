const btn = document.querySelector("#buttons");
const hiddenbox = document.querySelector("#hidden");
const flipFrontImg = document.querySelectorAll(".flip-card-front img");
const flipCardsBack = document.querySelectorAll(".flip-card-back");
const decrement = document.querySelector("#decrementTime");
const result = document.querySelector("#result");
let dummy = [];
let checkimage = [];
let clickimage = 0;
let timer = 40;
let match = 0;

btn.addEventListener("click", () => {
  hiddenbox.style.display = "block";
  btn.style.display = "none";
  newfunction();
  timing();
});

const array = [
  "./Gameimages/ChootaBheem.jpg",
  "./Gameimages/doremon.jpg",
  "./Gameimages/mickeyMouse.jpg",
  "./Gameimages/panda.jpg",
  "./Gameimages/pokimon.jpg",
  "./Gameimages/shinchan.jpg",
];

let new_array = [...array, ...array];

function selectimage() {
  let check = Math.floor(Math.random() * new_array.length);
  if (dummy.includes(check)) return selectimage();
  else {
    dummy.push(check);
    return check;
  }
}

function newfunction() {
  for (let i = 0; i < new_array.length; i++) {
    let image = document.createElement("img");
    image.src = new_array[selectimage()];
    flipCardsBack[i].append(image);
  }
}

flipFrontImg.forEach((value) => {
  value.addEventListener("click", () => {
    clickimage++;
    value.parentElement.parentElement.classList.add("backside");
    checkimage.push(value.parentElement.nextElementSibling.children[0]);

    if (clickimage === 2) {
      if (checkimage[0].src === checkimage[1].src) {
        checkimage.length = 0;
        clickimage = 0;
        match++;
      } else {
        setTimeout(() => {
          checkimage.forEach((items) => {
            items.parentElement.parentElement.classList.remove("backside");
          });
          checkimage.length = 0;
          clickimage = 0;
        }, 1000);
      }
    }
  });
});

function timing() {
  let a = setInterval(() => {
    decrement.innerHTML = --timer;

    if (match === 6) {
      hiddenbox.style.display = "none";
      btn.style.display = "none";
      result.innerHTML = "Congratulations, you've won the game! Well played!";
      result.style.display = "block";
      clearInterval(a);
    } else if (timer === 0) {
      hiddenbox.style.display = "none";
      btn.style.display = "none";
      result.innerHTML = "Time's up!";
      result.style.display = "block";
      clearInterval(a);
    }
  }, 1000);
}

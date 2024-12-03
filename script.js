const btn = document.querySelector("#buttons");
const hiddenbox = document.querySelector("#hidden");
const flipFrontImg = document.querySelectorAll(".flip-card-front img");
const flipCardsBack = document.querySelectorAll(".flip-card-back");
let dummy = [];
let checkimage = [];
let clickimage = 0;




btn.addEventListener("click", () => {
    hiddenbox.style.display = "block"
    btn.style.display = "none"
    newfunction()

});


const array = [
    "./Gameimages/ChootaBheem.jpg",
    "./Gameimages/doremon.jpg",
    "./Gameimages/mickeyMouse.jpg",
    "./Gameimages/panda.jpg",
    "./Gameimages/pokimon.jpg",
    "./Gameimages/shinchan.jpg"
];

let new_array = [...array, ...array];


function selectimage() {
    let check = Math.floor(Math.random() * new_array.length);
    if (dummy.includes(check)) return selectimage()
    else {
        dummy.push(check)
        return check
    }
}


function newfunction() {
    for (let i = 0; i < new_array.length; i++) {
        let image = document.createElement("img")
        image.src = new_array[selectimage()]
        flipCardsBack[i].append(image)
    }
}


flipFrontImg.forEach((value) => {
    value.addEventListener("click", () => {
        clickimage++
        value.parentElement.parentElement.classList.add('backside');
        checkimage.push(value.parentElement.nextElementSibling.children[0]);
        console.log(checkimage);

        if (clickimage === 2) {
            if (checkimage[0].src === checkimage[1].src) {
                checkimage.length = 0;
                clickimage = 0;

            }




            else {

                setTimeout(() => {
                    checkimage.forEach((items) => {
                        items.parentElement.parentElement.classList.remove("backside")
                    });
                    checkimage.length = 0;
                    clickimage = 0;
                }, 1000)



            }
        }

    })
})




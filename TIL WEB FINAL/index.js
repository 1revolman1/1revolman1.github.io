function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
let element_visible = [
  `<img src="./assets/facebook.svg" alt="" />
              <h3>
               Lorem ipdasdsum dolor sit amet consectetur adipisicing elit. Esse in dolores ducimus
              </h3>
              <span>Ricardo Milos</span>
              <p>Dancer</p>`,
  ` 
              <img src="./assets/Jess 73 v1a.png" alt="" />
              <h3>
                “There isn’t anything else out there that’s like
                thisislanguage.com”
              </h3>
              <span>Jess Lund</span>
              <p>Head of MFL Michaela Community School</p>
            `,
  ` <img src="./assets/Instagram.svg" alt="" />
              <h3>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse in dolores ducimus
              </h3>
              <span>Jessus Christ</span>
              <p>Head of Earth</p>`
];
let index = Math.round(element_visible.length / 2);
document.querySelector(".block-with-content").innerHTML =
  element_visible[index - 1];

document.querySelector(".button-left").addEventListener("click", function(e) {
  // console.log("left");
  if (index - 1 != 0) {
    index--;
    document.querySelector(".block-with-content").innerHTML =
      element_visible[index - 1];
  }
});
document.querySelector(".button-right").addEventListener("click", function(e) {
  // console.log("right");
  if (index + 1 > element_visible.length) {
  } else {
    index++;
    document.querySelector(".block-with-content").innerHTML =
      element_visible[index - 1];
  }
});
let text = "";
for (let i = 0; i < 5; i++) {
  text += `<div class="block"><p>“Un bon ami. Je dirais que c’est quelqu’un qui me permet de progresser dans la vie, qui me donne envie de me surpasser. Euh quelqu’un avec lequel je passe de bons moments, je m’amuse.”</p><p>@thisislanguage</p></div>`;
}
document.querySelector(".slider").innerHTML = text;

document.querySelectorAll(".slider .block").forEach(e => {
  e.style.background = `rgb(${randomInteger(0, 255)}, ${randomInteger(
    0,
    255
  )}, ${randomInteger(0, 255)})`;
});

let slideShow = 1;
$(".slider").slick({
  // dots: true,
  arrows: true,
  infinite: true,
  centerMode: true,
  slidesToShow: slideShow,
  slidesToScroll: 3
});

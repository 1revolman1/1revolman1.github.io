function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
let element_visible = [
  ` <div class="image"><img src="./assets/Jess 73 v1a@2x.png" alt=""></div>
  <div class="content"> <h3>
               Lorem ipdasdsum dolor sit amet consectetur adipisicing elit. Esse in dolores ducimus
              </h3>
              <span>Ricardo Milos</span>
              <p>Dancer</p></div>`,
  ` <div class="image"><img src="./assets/Jess 73 v1a@2x.png" alt="" /></div>
           <div class="content"><h3>
                “There isn’t anything else out there that’s like
                thisislanguage.com”
              </h3>
              <span>Jess Lund</span>
              <p>Head of MFL Michaela Community School</p></div> 
            `,
  `<div class="image"><img src="./assets/Jess 73 v1a@2x.png"" alt="" /></div> <div class="content"><h3>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse in dolores ducimus
              </h3>
              <span>Jessus Christ</span>
              <p>Head of Earth</p></div>`
];
let index = Math.round(element_visible.length / 2);
document.querySelector(".block-with-content").innerHTML =
  element_visible[index - 1];

document.querySelector(".button-left").addEventListener("click", function(e) {
  if (index - 1 != 0) {
    index--;
    document.querySelector(".block-with-content").innerHTML =
      element_visible[index - 1];
  }
});
document.querySelector(".button-right").addEventListener("click", function(e) {
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

document.querySelectorAll(".slider .block").forEach(e => {
  e.style.background = `rgb(${randomInteger(0, 255)}, ${randomInteger(
    0,
    255
  )}, ${randomInteger(0, 255)})`;
});

$(".slider").slick({
  arrows: false,
  infinite: true,
  centerMode: true,
  autoplay: false,
  autoplaySpeed: 1000,
  slidesToScroll: 3,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    }
  ]
});
document
  .querySelector(".wrapper-list ul")
  .addEventListener("mouseover", function(e) {
    e.stopPropagation();
    // console.log(e.target);
  });

let ammound_of_scrols = 0;
window.addEventListener("scroll", function(e) {
  if (window.innerWidth >= 1024) {
    document.querySelector("nav .user-link").style.display = "flex";
    document.querySelector("nav .wrapper-settings .wrapper-trial").style.width =
      "330px";
    document.querySelector("nav .wrapper-settings").style.top = "-100%";
  }
});
window.addEventListener("scroll", function() {
  if (window.scrollY < 50 && window.innerWidth >= 1024) {
    document.querySelector("nav .wrapper-settings").style.top = "";
    document.querySelector("nav .user-link").style.display = "none";
    // document.querySelector("nav .wrapper-settings .wrapper-trial").style.width =
    //   "426px";
    document.querySelector("nav .wrapper-settings .wrapper-trial").style.width =
      "456px";
  }
});

document.querySelectorAll(".wrapper-user").forEach(function(e) {
  e.addEventListener("click", function(e) {
    console.log("login");
  });
});

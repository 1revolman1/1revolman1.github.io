//This code generate listener of scrolling to create cute changer of .user-link

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
    document.querySelector("nav .wrapper-settings .wrapper-trial").style.width =
      "425px";
  }
});

//This code segment initialize listener of mouse on the element
//and generate menu on the dekstop
document
  .querySelector("header .wrapper-list")
  .addEventListener("mouseover", function(event) {
    setTimeout(() => {
      //cleaning background in the .wrapper-list ul childs
      event.srcElement.offsetParent.children[0].childNodes.forEach(function(e) {
        if (!(e.nodeName == "#text")) {
          e.childNodes[0].style.background = "";
        }
      });
      document.querySelector(".wrapper-list ul").style.background = "";
      //if .hover-menu EXIST - remove him
      if (!!document.querySelector(".hover-menu")) {
        document.querySelector("header .wrapper").style.background = "";
        document.querySelector("header").style.background = "";
        event.target.style.background = "#33a7db";
        document.querySelectorAll(".hover-menu").forEach(function(e) {
          e.style.display = "none";
        });
        document.querySelector(".wrapper-trial").style.display = "";
      }
      //if li="Contact" - skip. Else - do
      if (!(event.target.textContent == "Contact")) {
        document.querySelector(".wrapper-trial").style.display = "none";
        if (event.target.textContent == "About") {
          document.querySelector(".menu-about").style.display = "flex";
          document.querySelector(
            ".hover-menu"
          ).style.top = `${document.querySelector("header").offsetHeight -
            1}px`;
          event.target.style.background = "#7d56e9";
          document.querySelector("header .wrapper").style.background =
            "#9879ED";
          document.querySelector("header").style.background = "#9879ED";
          //Cleaning SECTION
          //Listener, that check relocation from our creating section
          //if it's true(we are relocating) we remove section
          document
            .querySelector(".menu-about")
            .addEventListener("mouseleave", function(e) {
              document.querySelector("header .wrapper").style.background = "";
              document.querySelector("header").style.background = "";
              event.target.style.background = "#33a7db";
              document.querySelector(".menu-about").style.display = "none";
              document.querySelector(".wrapper-trial").style.display = "";
            });
        } else if (event.target.textContent == "Teachers") {
          document.querySelector(".menu-teachers").style.display = "flex";
          document.querySelector(
            ".menu-teachers"
          ).style.top = `${document.querySelector("header").offsetHeight -
            1}px`;
          document.querySelector("header .wrapper").style.background =
            "#F16D94";
          document.querySelector("header").style.background = "#F16D94";
          event.target.style.background = "#EA4678";
          //Cleaning SECTION
          //Listener, that check relocation from our creating section
          //if it's true(we are relocating) we remove section
          document
            .querySelector(".menu-teachers")
            .addEventListener("mouseleave", function(e) {
              document.querySelector("header .wrapper").style.background = "";
              document.querySelector("header").style.background = "";
              event.target.style.background = "#33a7db";
              document.querySelector(".menu-teachers").style.display = "none";
              document.querySelector(".wrapper-trial").style.display = "";
            });
        }
      }
    }, 80);
  });

//This function create link to the header in mobile resolution to .menu__box to make
//'smart' relocation
document.querySelector(".menu_btn").addEventListener("click", function(e) {
  if (
    !(
      document.querySelector(".menu__box").style.top ==
      `${document.querySelector("header").offsetHeight - 1}px`
    )
  )
    document.querySelector(".menu__box").style.top = `${document.querySelector(
      "header"
    ).offsetHeight - 1}px`;
  else
    document.querySelector(".menu__box").style.top = `-${document.querySelector(
      ".menu__box"
    ).offsetHeight + 1}px`;
});

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
let element_visible = [
  ` <div class="image"><img src="img/Jess 73 v1a@2x.png" alt=""></div>
  <div class="content"> <h3>
               Lorem ipdasdsum dolor sit amet consectetur adipisicing elit. Esse in dolores ducimus
              </h3>
              <span>Ricardo Milos</span>
              <p>Dancer</p></div>`,
  ` <div class="image"><img src="img/Jess 73 v1a@2x.png" alt="" /></div>
           <div class="content"><h3>
                “There isn’t anything else out there that’s like
                thisislanguage.com”
              </h3>
              <span>Jess Lund</span>
              <p>Head of MFL Michaela Community School</p></div>
            `,
  `<div class="image"><img src="img/Jess 73 v1a@2x.png"" alt="" /></div> <div class="content"><h3>
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

document.querySelectorAll(".slider .block").forEach(e => {
  e.style.background = `rgb(${randomInteger(0, 255)}, ${randomInteger(
    0,
    255
  )}, ${randomInteger(0, 255)})`;
});

$(document).on("ready", function() {
  $(".slider").slick({
    arrows: false,
    dots: false,
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
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
});

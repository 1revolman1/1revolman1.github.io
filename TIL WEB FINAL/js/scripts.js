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
      event.stopPropagation();
      //cleaning background in the .wrapper-list ul childs
      document.querySelector(".wrapper-trial").style.display = "";
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
        document.querySelector(".wrapper-trial").style.display = "";
        document.querySelectorAll(".hover-menu").forEach(function(e) {
          e.style.display = "none";
        });
      }
      //if li="Contact" - skip. Else - do
      if (!(event.target.textContent == "Contact")) {
        document.querySelector(".wrapper-trial").style.display = "none";
        //Fixing error of ending from UL
        if (event.target.tagName == "UL") {
          document.querySelector(".wrapper-trial").style.display = "";
        }
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
document
  .querySelector("header .wrapper-list")
  .addEventListener("click", function(event) {
    setTimeout(() => {
      event.stopPropagation();
      //cleaning background in the .wrapper-list ul childs
      document.querySelector(".wrapper-trial").style.display = "";
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
        document.querySelector(".wrapper-trial").style.display = "";
        document.querySelectorAll(".hover-menu").forEach(function(e) {
          e.style.display = "none";
        });
      }
      //if li="Contact" - skip. Else - do
      if (!(event.target.textContent == "Contact")) {
        document.querySelector(".wrapper-trial").style.display = "none";
        //Fixing error of ending from UL
        if (event.target.tagName == "UL") {
          document.querySelector(".wrapper-trial").style.display = "";
        }
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
          document.addEventListener("click", function(e) {
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
          document.addEventListener("click", function(e) {
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

document.querySelectorAll(".slider .block").forEach(e => {
  e.style.background = `rgb(${randomInteger(0, 255)}, ${randomInteger(
    0,
    255
  )}, ${randomInteger(0, 255)})`;
});

function CheckerModalWindow() {
  if (document.querySelector(".modal-window").style.display == "none") {
    document.querySelector(".modal-window").style.display = "flex";
    document.querySelector("header").style.zIndex = 1;
    document.querySelector("nav").style.zIndex = 1;
    document.querySelector(".stick-element").style.zIndex = 1;
  } else {
    document.querySelector(".modal-window").style.display = "none";
    document.querySelector("header").style.zIndex = "";
    document.querySelector("nav").style.zIndex = "";
    document.querySelector(".stick-element").style.zIndex = "";
  }
}
document.querySelectorAll(".elem").forEach(function(element) {
  element.addEventListener("click", CheckerModalWindow);
});
document
  .querySelector(".modal-window")
  .addEventListener("click", function(event) {
    event.stopPropagation();
    if (
      event.path[0].className !== "" &&
      event.path[0].className != "content" &&
      event.path[0].className != "text"
    )
      CheckerModalWindow();
    // console.log(event.path);
  });

$(document).on("ready", function() {
  $(".slider").slick({
    arrows: false,
    dots: false,
    infinite: true,
    variableWidth: true,
    // centerMode: true,
    // autoplay: true,
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
  $(".element-visible").slick({
    adaptiveHeight: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: true,
          adaptiveHeight: true
        }
      }
    ]
  });
});

// $(".element-visible").slick({
//   adaptiveHeight: true
//   // responsive: [
//   //   {
//   //     breakpoint: 368,
//   //     settings: {
//   //       vertical: true,
//   //       adaptiveHeight: false
//   //     }
//   //   },
//   //   {
//   //     breakpoint: 600,
//   //     settings: {
//   //       // vertical: true
//   //       // adaptiveHeight: false
//   //     }
//   //   }
//   // ]
// });

// $(".element-visible").slick({
//   adaptiveHeight: true
// });

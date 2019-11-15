//This code generate listener of scrolling to create cute changer of .user-link

window.addEventListener("scroll", function(e) {
  if (window.innerWidth >= 1024) {
    document.querySelector("nav .user-link").style.display = "flex";
    document.querySelector("nav .wrapper-settings .wrapper-trial").style.width =
      "330px";
    document.querySelector("nav .wrapper-settings").style.top = "-100%";
  }
  if (window.scrollY < 50 && window.innerWidth >= 1024) {
    document.querySelector("nav .wrapper-settings").style.top = "";
    document.querySelector("nav .user-link").style.display = "none";
    document.querySelector("nav .wrapper-settings .wrapper-trial").style.width =
      "425px";
  }
});

//This code segment initialize listener of mouse on the element
//and generate menu on the dekstop
document;
document
  .querySelector("header .wrapper-list")
  .addEventListener("mouseover", function(event) {
    if (event.target.tagName == "SPAN") {
      return;
    }
    setTimeout(() => {
      // event.stopPropagation();
      //cleaning background in the .wrapper-list ul childs
      document.querySelector(".wrapper-trial").style.display = "";
      document.querySelectorAll(".wrapper-list ul li a").forEach(function(e) {
        e.style.background = "";
      });
      document.querySelectorAll(".wrapper-list ul li ").forEach(function(e) {
        e.style.background = "";
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
          document
            .querySelectorAll(".wrapper-list ul li a")
            .forEach(function(e) {
              e.style.background = "";
            });
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
              document
                .querySelectorAll(".wrapper-list ul li a")
                .forEach(function(e) {
                  e.style.background = "";
                });
              document
                .querySelectorAll(".wrapper-list ul li")
                .forEach(function(e) {
                  e.style.background = "";
                });
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
              document
                .querySelectorAll(".wrapper-list ul li a")
                .forEach(function(e) {
                  e.style.background = "";
                });
              document
                .querySelectorAll(".wrapper-list ul li")
                .forEach(function(e) {
                  e.style.background = "";
                });
            });
        }
      }
    }, 80);
  });
document
  .querySelector("header .wrapper-list")
  .addEventListener("click", function(event) {
    if (event.target.tagName == "SPAN") {
      return;
    }
    setTimeout(() => {
      event.stopPropagation();
      // cleaning background in the .wrapper-list ul childs
      document.querySelector(".wrapper-trial").style.display = "";
      // document.querySelectorAll(".wrapper-list ul li a").forEach(function(e) {
      //   e.style.background = "";
      // });
      document.querySelectorAll(".wrapper-list ul li a").forEach(function(e) {
        e.style.background = "";
      });
      document.querySelectorAll(".wrapper-list ul li ").forEach(function(e) {
        e.style.background = "";
      });
      event.srcElement.offsetParent.children[0].childNodes.forEach(function(e) {
        if (!(e.nodeName == "#text")) {
          e.childNodes[0].style.background = "";
          // document
          //   .querySelectorAll(".wrapper-list ul li a")
          //   .forEach(function(e) {
          //     e.style.background = "";
          //   });
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
            document
              .querySelectorAll(".wrapper-list ul li a")
              .forEach(function(e) {
                e.style.background = "";
              });
            document
              .querySelectorAll(".wrapper-list ul li")
              .forEach(function(e) {
                e.style.background = "";
              });
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
            document
              .querySelectorAll(".wrapper-list ul li a")
              .forEach(function(e) {
                e.style.background = "";
              });
            document
              .querySelectorAll(".wrapper-list ul li")
              .forEach(function(e) {
                e.style.background = "";
              });
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
  ) {
    document.querySelector(".menu__box").style.top = `${document.querySelector(
      "header"
    ).offsetHeight - 1}px`;
  } else {
    document.querySelector(".menu__box").style.top = `-${document.querySelector(
      ".menu__box"
    ).offsetHeight + 100}px`;
  }
});

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
function current_page() {
  let text = location.pathname
    .split("/")[1]
    .split("-")
    .join(" ");
  if (text == "") return;
  document.querySelectorAll("menu .wrapper li").forEach((e, i) => {
    if (e.textContent.toLowerCase().includes(text)) {
      if (i <= 6) {
        document
          .querySelectorAll(".wrapper-list li")[0]
          .classList.add("active");
        document.querySelectorAll("header .active a").forEach(element => {
          element.innerHTML = `<span style="background:transparent" class="active_span">${
            document.querySelector("header .active a").textContent
          }</span>`;
        });
      } else {
        document
          .querySelectorAll(".wrapper-list li")[1]
          .classList.add("active");
        document.querySelectorAll("header .active a").forEach(element => {
          element.innerHTML = `<span style="background:transparent" class="active_span">${
            document.querySelector("header .active a").textContent
          }</span>`;
        });
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  current_page();
  if (document.querySelectorAll(".active").length > 0) {
    document.querySelectorAll(".active a").forEach(element => {
      element.innerHTML = `<span style="background:transparent" class="active_span">${
        document.querySelector(".active a").textContent
      }</span>`;
    });
  }
  if (document.querySelectorAll(".slider").length > 0) {
    $(".slider").slick({
      arrows: false,
      dots: false,
      infinite: true,
      variableWidth: true,
      speed: 300,
      // centerMode: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToScroll: 1,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            // autoplay: false,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            // autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1366,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    });

    //Code that state color
    document.querySelectorAll(".slider .block-in-slider[bg]").forEach(e => {
      e.style.background = `${e.getAttribute("bg")}`;
    });

    //Code that randomise color
    // document.querySelectorAll(".slider .block-in-slider").forEach(e => {
    //   e.style.background = `rgb(${randomInteger(0, 255)}, ${randomInteger(
    //     0,
    //     255
    //   )}, ${randomInteger(0, 255)})`;
    // });
  }
  if (document.querySelectorAll(".stick-element").length > 0) {
    window.addEventListener("scroll", function() {
      if (window.scrollY < 50) {
        document.querySelector(".stick-element").style.bottom = "unset";
        if ($(".elem").offset() != undefined) {
          document.querySelector(".stick-element").style.top = `${
            $(".elem").offset().top
          }px`;
        } else
          document.querySelector(".stick-element").style.top = `${
            $(".element").offset().top
          }px`;
      }
      if ($("footer").offset().top - $("footer").height() < window.scrollY) {
        document.querySelector(".stick-element").style.top = "unset";
        document.querySelector(".stick-element").style.bottom = `${$(
          "footer"
        ).offset().top +
          $("footer").outerHeight() -
          ($(".block-about ul").offset().top +
            $(".block-about ul").outerHeight()) +
          ($(".block-about").outerHeight() -
            $(".stick-element").outerHeight()) -
          25}px`;
      }
    });
    if ($(".elem").offset() != undefined) {
      document.querySelector(".stick-element").style.top = `${
        $(".elem").offset().top
      }px`;
    } else {
      document.querySelector(".stick-element").style.top = `${
        $(".element").offset().top
      }px`;
    }
  }
  if (document.querySelectorAll(".element-visible").length > 0) {
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
        },
        {
          breakpoint: 1024,
          settings: {
            vertical: true,
            adaptiveHeight: true
          }
        }
      ]
    });
  }
});

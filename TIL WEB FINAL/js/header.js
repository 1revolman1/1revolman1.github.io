//This code generate listener of scrolling to create cute changer of .user-link

window.addEventListener("scroll", function(e) {
  if (window.innerWidth >= 1024) {
    document.querySelector(".wrapper-trial-new").style.transition = "transform 0.6s";
    document.querySelector("aside").style.transition = "transform 0.6s";
    document.querySelector(".wrapper-trial-new p").style.transition = "all 0.6s";
   document.querySelector(".wrapper-trial-new").style.transform="translate(0,0%)";
   document.querySelector("aside").style.transform="translate(0, -200%)";
   document.querySelector(".wrapper-trial-new p").style.left="";
  }
  if (window.scrollY < 50 && window.innerWidth >= 1024) {
    document.querySelector(".wrapper-trial-new").style.transition = "transform 0.6s";
    document.querySelector("aside").style.transition = "transform 0.6s";
    document.querySelector(".wrapper-trial-new p").style.transition = "all 0.6s";
    document.querySelector(".wrapper-trial-new").style.transform="translate(0,100%)";
    document.querySelector("aside").style.transform="translate(0, 0)";
    document.querySelector(".wrapper-trial-new p").style.left="131px";
  }
});
// 425px

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
      // event.srcElement.offsetParent.children[0].childNodes.forEach(function(e) {
      //   if (!(e.nodeName == "#text")) {
      //     e.childNodes[0].style.background = "";
      //     // document
      //     //   .querySelectorAll(".wrapper-list ul li a")
      //     //   .forEach(function(e) {
      //     //     e.style.background = "";
      //     //   });
      //   }
      // });
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
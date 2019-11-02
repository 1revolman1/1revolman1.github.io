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
      "456px";
  }
});

//This code segment initialize listener of mouse on the element
//and generate menu on the dekstop

document
  .querySelector(".wrapper-list")
  .addEventListener("mouseover", function(event) {
    let text_location = document
      .querySelector("script[location]")
      .getAttribute("location");
    event.srcElement.offsetParent.children[0].childNodes.forEach(function(e) {
      if (!(e.nodeName == "#text")) {
        e.childNodes[0].style.background = "";
      }
    });
    document.querySelector(".wrapper-list ul").style.background = "";
    let section = document.createElement("section");
    section.className = "hover-menu";
    section.style.top = `${document.querySelector("header").offsetHeight -
      1}px`;
    if (!!document.querySelector(".hover-menu")) {
      //
      document.querySelector("header .wrapper").style.background = "";
      document.querySelector("header").style.background = "";
      event.target.style.background = "#33a7db";
      document.querySelector(".hover-menu").remove();
      document.querySelector(".wrapper-trial").style.display = "";
    } else if (!(event.target.textContent == "Contact")) {
      document.querySelector(".wrapper-trial").style.display = "none";
      if (event.target.textContent == "About") {
        section.innerHTML = `<div class="wrapper"> <div class="elem1"> <div class="img"><img src="${text_location}assets/Grupo 170.svg" alt=""></div> <ul> <li><a href="">What is TIL?</a></li> <li><a href="">Team</a></li> <li><a href="">Jobs</a></li> </ul> </div> <div class="elem2"> <div class="img"><img src="${text_location}assets/Grupo 121.svg" alt=""></div> <ul> <li><a href="">Results and Stats</a></li> <li><a href="">Pricing</a></li> </ul> </div> <div class="elem3"> <div class="img"><img src="${text_location}assets/Grupo 128.svg" alt=""></div> <ul> <li><a href="">TIL Events</a></li> <li><a href="">Testimonials</a></li> </ul> </div> </div>`;
        event.target.style.background = "#7d56e9";
        document.querySelector("header .wrapper").style.background = "#9879ED";
        document.querySelector("header").style.background = "#9879ED";
        section.style.background = "#7d56e9";
        document.body.append(section);
      } else if (event.target.textContent == "Teachers") {
        section.innerHTML = `<div class="wrapper"> <div class="elem1"> <div class="img"><img src="${text_location}assets/Grupo 173.svg" alt=""></div> <ul> <li><a href="">Why TIL?</a></li> <li><a href="">Our Languages</a></li> <li><a href="">Our Videos</a></li> <li><a href="">Our Exercises</a></li> <li><a href="">Our Competitions</a></li> </ul> </div> <div class="elem2"> <div class="img"><img src="${text_location}assets/Grupo 136.svg" alt=""></div> <ul> <li><a href="">Training and PD</a></li> <li><a href="">Textbooks Alignments</a></li> </ul> </div> </div>`;
        section.style.height = "381px";
        document.querySelector("header .wrapper").style.background = "#F16D94";
        document.querySelector("header").style.background = "#F16D94";
        section.style.background = "#EA4678";
        event.target.style.background = "#EA4678";
        document.body.append(section);
        section.childNodes[0].childNodes[1].style.margin = "0 15%";
        document.querySelector(".hover-menu .wrapper").style.justifyContent =
          "flex-start";
      }
    }
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

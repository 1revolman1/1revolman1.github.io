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
      let section = document.createElement("section");
      section.className = "hover-menu";
      section.style.top = `${document.querySelector("header").offsetHeight -
        1}px`;
      //if .hover-menu EXIST - remove him
      if (!!document.querySelector(".hover-menu")) {
        document.querySelector("header .wrapper").style.background = "";
        document.querySelector("header").style.background = "";
        event.target.style.background = "#33a7db";
        document.querySelector(".hover-menu").remove();
        document.querySelector(".wrapper-trial").style.display = "";
      }
      //if li="Contact" - skip. Else - do
      if (!(event.target.textContent == "Contact")) {
        document.querySelector(".wrapper-trial").style.display = "none";
        if (event.target.textContent == "About") {
          section.innerHTML = `<div class="wrapper"> <div class="elem1"> <div class="img"><img src="./img/Grupo 170.svg" alt=""></div> <ul> <li><a href="whatistil.html">What is TIL?</a></li> <li><a href="team.html">Team</a></li> <li><a href="jobs.html">Jobs</a></li> </ul> </div> <div class="elem2"> <div class="img"><img src="./img/Grupo 121.svg" alt=""></div> <ul> <li><a href="results.html">Results and Stats</a></li> <li><a href="pricing.html">Pricing</a></li> </ul> </div> <div class="elem3"> <div class="img"><img src="./img/Grupo 128.svg" alt=""></div> <ul> <li><a href="tilevents.html">TIL Events</a></li> <li><a href="testimonials.html">Testimonials</a></li> </ul> </div> </div>`;
          event.target.style.background = "#7d56e9";
          document.querySelector("header .wrapper").style.background =
            "#9879ED";
          document.querySelector("header").style.background = "#9879ED";
          section.style.background = "#7d56e9";
          document.body.append(section);
          //Cleaning SECTION
          //Listener, that check relocation from our creating section
          //if it's true(we are relocating) we remove section
          section.addEventListener("mouseleave", function(e) {
            document.querySelector("header .wrapper").style.background = "";
            document.querySelector("header").style.background = "";
            event.target.style.background = "#33a7db";
            document.querySelector(".hover-menu").remove();
            document.querySelector(".wrapper-trial").style.display = "";
          });
        } else if (event.target.textContent == "Teachers") {
          section.innerHTML = `<div class="wrapper"> <div class="elem1"> <div class="img"><img src="./img/Grupo 173.svg" alt=""></div> <ul> <li><a href="whytil.html">Why TIL?</a></li> <li><a href="ourlanguages.html">Our Languages</a></li> <li><a href="ourvideos.html">Our Videos</a></li> <li><a href="ourexercises.html">Our Exercises</a></li> <li><a href="ourcompetitions.html">Our Competitions</a></li> </ul> </div> <div class="elem2"> <div class="img"><img src="./img/Grupo 136.svg" alt=""></div> <ul> <li><a href="trainingandpd.html">Training and PD</a></li> <li><a href="textbooks.html">Textbooks Alignments</a></li> </ul> </div> </div>`;
          section.style.height = "381px";
          document.querySelector("header .wrapper").style.background =
            "#F16D94";
          document.querySelector("header").style.background = "#F16D94";
          section.style.background = "#EA4678";
          event.target.style.background = "#EA4678";
          document.body.append(section);
          section.childNodes[0].childNodes[1].style.margin = "0 15%";
          document.querySelector(".hover-menu .wrapper").style.justifyContent =
            "flex-start";
          //Cleaning SECTION
          //Listener, that check relocation from our creating section
          //if it's true(we are relocating) we remove section
          section.addEventListener("mouseleave", function(e) {
            document.querySelector("header .wrapper").style.background = "";
            document.querySelector("header").style.background = "";
            event.target.style.background = "#33a7db";
            document.querySelector(".hover-menu").remove();
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

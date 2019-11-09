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
    // if (event.target.className != "content") CheckerModalWindow();
    console.log(event.target);
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

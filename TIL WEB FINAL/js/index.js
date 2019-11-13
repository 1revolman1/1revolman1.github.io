function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

document.addEventListener("DOMContentLoaded", function(event) {
  //Code that randomise color
  document.querySelectorAll(".slider .block-in-slider").forEach(e => {
    e.style.background = `rgb(${randomInteger(0, 255)}, ${randomInteger(
      0,
      255
    )}, ${randomInteger(0, 255)})`;
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
});
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
      ($(".block-about ul").offset().top + $(".block-about ul").outerHeight()) +
      ($(".block-about").outerHeight() - $(".stick-element").outerHeight()) -
      25}px`;
  }
});
$(document).on("ready", function() {
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
          autoplay: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: false,
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

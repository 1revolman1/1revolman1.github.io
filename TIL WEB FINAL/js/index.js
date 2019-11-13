document.querySelectorAll(".slider .block").forEach(e => {
  e.style.background = `rgb(${randomInteger(0, 255)}, ${randomInteger(
    0,
    255
  )}, ${randomInteger(0, 255)})`;
});
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".stick-element").style.top = `${
    $(".elem").offset().top
  }px`;
});
window.addEventListener("scroll", function() {
  if (window.scrollY < 50) {
    document.querySelector(".stick-element").style.bottom = "unset";
    document.querySelector(".stick-element").style.top = `${
      $(".elem").offset().top
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

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
    variableWidth: true,
    // centerMode: true,
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

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
  if (
    document.querySelectorAll(".stick-element").length > 0 &&
    getComputedStyle(document.querySelector(".stick-element")).getPropertyValue(
      "display"
    ) != "none"
  ) {
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

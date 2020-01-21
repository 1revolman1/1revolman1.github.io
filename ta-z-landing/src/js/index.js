document.addEventListener("DOMContentLoaded", function() {
  if (window.outerWidth > 1024) {
    var $element = $("footer");
    document.querySelector(".sticky").style.right = `${document
      .querySelector(".block-with-text")
      .getBoundingClientRect().left - 50}px`;
    $(window).scroll(function() {
      var scroll = $(window).scrollTop() + $(window).height();
      var offset = $element.offset().top;

      if (scroll > offset) {
        // document.querySelector("footer .text").style.transform =
        //   "translate(-50%, 0)";
        // 55 %
        document.querySelector("footer .text").style.margin = "0 auto 0 30px";
        // document.querySelector("footer .text").style.marginLeft = "30px";
        document.querySelector(".footer").style.padding = "0 2% 0 125px";
      } else {
        // document.querySelector("footer .text").style.transform = "";
        document.querySelector("footer .text").style.marginRight = "";
        document.querySelector("footer .text").style.marginLeft = "";
        document.querySelector(".footer").style.padding = "0 125px";
      }
    });
  }
});

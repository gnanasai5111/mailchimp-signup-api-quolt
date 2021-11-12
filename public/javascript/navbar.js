// logo header
var contactIcon=$(".contact-icon");
contactIcon.mouseover(function(){
  $(".right-arrow-icon").css(
    {
      "color":"#ffffff",
      "right":"-1px",
      "left":"auto"

    });
  contactIcon.css({
    "padding":"9px 50px 9px 20px",
    "color":"#ffffff",
    "border":"1px solid #ffffff"
  });

});
contactIcon.mouseout(function(){
  $(".right-arrow-icon").css({
    "color":"#00F4DF",
    "left":"-1px",
    "right":"auto"
  });
  contactIcon.css({
    "padding":"9px 20px 9px 50px",
    "color":"#555555",
    "border":"1px solid #e5e9ed"
  }
);
});



/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header").style.top = "0";
    document.querySelector(".header").style.opacity = "1";
  } else {
    document.querySelector(".header").style.top = "-170px";
    document.querySelector(".header").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;
}

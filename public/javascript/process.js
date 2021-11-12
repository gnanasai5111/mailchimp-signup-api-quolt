var progress = document.querySelector(".progress");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var circles = document.querySelectorAll(".circle");
var currentactive = 0;

// $(window).bind('mousewheel' ,function(e,delta) {
//
//
//   this.scrollTop -= (delta *1);
//   e.preventDefault();
//
// });
// $(window).mousewheel(function(e, delta) {
// this.scrollTop -= (delta *1);
// e.preventDefault();
// });


// $(".progress-center").bind('mousewheel DOMMouseScroll', function(event){
//
// $("body").css({
//   "position":"fixed",
//   "top":"-800px",
//   "width":"100%"
// });
//
//     if (event.originalEvent.wheelDelta < 0) {
//
//        currentactive++;
//        for (var i = 0; i < circles.length; i++) {
//          if (currentactive >= 9) {
//            currentactive = 8;
//            next.disabled = true;
//          }
//          prev.disabled = false;
//
//          circles[currentactive].classList.add("active");
//          var actives = document.querySelectorAll(".circle.active");
//          console.log(actives.length,circles.length);
//          progress.style.height = (actives.length-1 ) / (circles.length-1 ) * 100 + "%";
//        }
//    }
//    else {
//
//        for (var i = 0; i < circles.length; i++) {
//          if (currentactive < 2) {
//            currentactive = 1;
//            prev.disabled = true;
//          }
//          next.disabled = false;
//
//
//          circles[currentactive].classList.remove("active");
//          var actives = document.querySelectorAll(".circle.active");
//          console.log(actives.length,circles.length);
//          progress.style.height = (actives.length-1 ) / (circles.length-1 ) * 100 + "%";
//
//        }
//        currentactive--;
//    }
//
//
// });
//
//
// function removeactiveclasses() {
//   circles.forEach(circle => {
//     circle.classList.remove("active");
//   });
// }

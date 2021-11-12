$(".entire-section").hide();
setTimeout(function() {
  $("body").css("position","inherit");
  $(".loading").fadeOut();
}, 3000);
setTimeout(function() {
    $("body").css("position","relative");
  $(".entire-section").show();
}, 4000);

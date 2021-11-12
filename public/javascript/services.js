var image=document.querySelector(".back-image");
var service=document.querySelectorAll(".services");
var text=document.querySelectorAll(".text-para");
var heading=document.querySelectorAll(".services-sub-heading");
var para=document.querySelectorAll(".services-para");
var up=document.querySelectorAll(".scroll-up");
var servicebg=document.querySelectorAll(".each-service");

function display(a){
  removeactiveclasses();
  removeHeading();
  removePara();
  changetextcolor();

  service[a].classList.add("active");
  text[a].style.color="#ffffff";
  heading[a].classList.add("services-sub-heading-active");
  para[a].classList.add("services-para-active");

  console.log(a);
  image.style.backgroundImage="url('images/"+ a +".jpg')";
}
function removeactiveclasses(){
  for (var i = 0; i < service.length; i++) {
    service[i].classList.remove("active");
  }

}
function removeHeading(){
  for (var i = 0; i < heading.length; i++) {
    heading[i].classList.remove("services-sub-heading-active");
  }

}
function removePara(){
  for (var i = 0; i < para.length; i++) {
    para[i].classList.remove("services-para-active");
  }

}
function changetextcolor(){
  for (var i = 0; i < text.length; i++) {
    text[i].style.color="rgb(114, 110, 132)";
  }
}




// text slidesup on scroll
window.addEventListener("scroll",move);
// move();
function move(){
  var windowHeight=window.innerHeight;
  for(var i=0;i<up.length;i++){
    var textTop=up[i].getBoundingClientRect().top;
    if(textTop<windowHeight){
      up[i].classList.add("move-up");
    }
    else{
      up[i].classList.remove("move-up");
    }
  }
}

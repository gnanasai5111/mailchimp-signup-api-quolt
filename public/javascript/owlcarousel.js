// owl carousel
jQuery("#carousel").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: false,
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
    slideBy: 3,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    770: {
      items: 2
    },

    1000: {
      items:3
    }
  }
});

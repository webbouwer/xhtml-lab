/* SwiperJS custom */
jQuery(function($){

/* custom swiper */
var swipemenu = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'];
var swiper_page_vertical = new Swiper('.swiper-container', {

  direction: 'vertical',
  slidesPerView: 1, //'auto'
  spaceBetween: 0,
  mousewheel: true,
  loop: true,
  autoHeight: true,
  speed: 600,
  parallax: true,
  //runCallbacksOnInit: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function(index, className) {
      return '<span class="' + className + '">' + (swipemenu[index]) + '</span>';
    },
  },
  hashNavigation: {
    replaceState: true,
    watchState: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

});



/* on resize */
var resizeId;
$(window).resize(function() {
  clearTimeout(resizeId);
  resizeId = setTimeout(doneResizing, 20);
});

function doneResizing() {
  swiper_page_vertical.update();
  swiper_page_vertical.scrollbar.updateSize();
}

});

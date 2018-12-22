/* SwiperJS custom */

jQuery(function($){


/* custom controls */
var checkboxes = document.getElementsByTagName('input');

for (var i=0; i<checkboxes.length; i++)  {
  if (checkboxes[i].type == 'checkbox')   {
    checkboxes[i].checked = false;
  }
}

$('#scrollbarToggle').on('change', function(){
    $('.swiper-container').toggleClass('hidescrollbar');
});
$('#colorToggle').on('change', function(){
    $('body').toggleClass('colorshow');
});



/* custom swiper */
var swipemenu = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'];
var swiper_page_vertical = new Swiper('.swiper-container', {

  direction: 'vertical',
  slidesPerView: 1, //auto
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
    scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  hashNavigation: {
    replaceState: true,
    watchState: true,
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
}


});

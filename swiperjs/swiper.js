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


/* scrolling .. */
var dir = 1;
var boxscroll = 1;
var scrollamount = 1;
disable_swiper();
$('.swiper-slide').scrollTop(1);




$(window).on('touchstart scroll wheel DOMMouseScroll', function(e){

    var prevscroll = boxscroll;
    var activeSlide = $('.swiper-slide-active');
    var viewheight = activeSlide.find('.swiper-slide-wrap').height();
    var scrollheight = activeSlide.find('.swiper-slide-content').height();

    if( viewheight < scrollheight ){

    	disable_swiper();

            var scrollamount = activeSlide.find('.swiper-slide-wrap').scrollTop();
            if( activeSlide.find('.swiper-slide-wrap').pageYOffset ){
                scrollamount = activeSlide.find('.swiper-slide-wrap').pageYOffset;
            }

            if( scrollamount < prevscroll || scrollamount == 0 ){
                dir = -1;
            }else{
                dir = 1;
            }


   					if( dir == -1 && prevscroll != 1 && scrollamount <= 0 ){
            	boxscroll = 1;
              dir = -1;
              activeSlide.find('.swiper-slide-wrap').scrollTop(1);
              swiper_page_vertical.slidePrev(swiper_page_vertical.speed);
              //enable_swiper();
            }
            if( dir == 1 && scrollamount >= (scrollheight-viewheight) ){
            	boxscroll = 1;
              dir = -1;
              activeSlide.find('.swiper-slide-wrap').scrollTop(1);
              swiper_page_vertical.slideNext(swiper_page_vertical.speed);
              //enable_swiper();
            }
      			boxscroll = scrollamount;

            $('.swiper-event-info').fadeIn(400);
            $('.swiper-event-info').html( scrollamount +' .. ' + dir + ' to '+ (scrollheight-viewheight) );

    }else{
            enable_swiper();
            boxscroll = 1;
            $('.swiper-event-info').fadeOut(400);
    }



});
swiper_page_vertical.on('transitionStart', function () {
    $('.swiper-slide').find('.swiper-slide-wrap').animate({ 'scrollTop': 1 }, swiper_page_vertical.speed );
});
swiper_page_vertical.on('slideNextTransitionEnd', function () {
});
function disable_swiper(){
    swiper_page_vertical.detachEvents();
    swiper_page_vertical.mousewheel.disable();
    //swiper_page_vertical.unsetGrabCursor();
}
function enable_swiper(){
    swiper_page_vertical.attachEvents();
    swiper_page_vertical.mousewheel.enable();
    //swiper_page_vertical.setGrabCursor();
}


});

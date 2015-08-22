var plagins = (function () {
  var init = function () {
      _setUpListners();
      $(".callback-form_select").simpleSelect();
      $('.selectbox__dropdown').jScrollPane();
    };

  var _setUpListners = function (){
      $('.slider-button').on('click', sliderModule);
      $(window).scroll(scrollButton);
      $('.button-by-scroll').on('click', scrollUp);
  
    };
  var scrollUp = function(){

    $("body").animate({"scrollTop":0},"slow");
  };
  var scrollButton = function(){

    if($(this).scrollTop() != 0) {
 
    $('.button-by-scroll').fadeIn();
 
    } else {
 
    $('.button-by-scroll').fadeOut();
 
    }
 
  };
  
  var sliderModule = function(){

    var
      $this = $(this),
      container = $this.closest('.slider'),
      list = container.find('.slider-list'),
      item = container.find('.slider-item'),
      activeSlide = item.filter('.active'),
      nextSlide = activeSlide.next(),
      prevSlide = activeSlide.prev(),
      firstSlide = item.first(),
      lastSlide = item.last(),
      sliderOffset = container.offset().left,
      reqPos = 0;

      if ($(this).hasClass('slider__button-right')) {
        if (nextSlide.length) {

          reqPos = nextSlide.offset().left - sliderOffset;
          nextSlide.addClass('active').siblings().removeClass('active')

        }else{

          reqPos = firstSlide.offset().left - sliderOffset;
          firstSlide.addClass('active').siblings().removeClass('active')

        }
      }else{

        if (prevSlide.length) {

          reqPos = prevSlide.offset().left - sliderOffset;
          prevSlide.addClass('active').siblings().removeClass('active')

        }else{

          reqPos = lastSlide.offset().left - sliderOffset;
          lastSlide.addClass('active').siblings().removeClass('active')

        }
      };

      list.css('left', '-=' + reqPos + 'px');
  };

  return {
      init: init
    }

})();

plagins.init();



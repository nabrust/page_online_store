$(document).ready(function(){

  $('form').on('submit',function(e){

    e.preventDefault();

    $('.callback-form__wrap__section__input').tooltipPlagin({});

  });


});
$.fn.tooltipPlagin = function(options) {

  options = {
    position: options.position || 'left',
    content : options.content || 'Я тултип'
  };

  var
    markup = '<div class="tooltip tooltip_' + options.position +'">' +
                  '<div class="inner__inner">' + options.content + '</div>' +
              '</div>';

  var
    $this = this,
    body = $('body');


  body.append(markup);
  _positionIt($this, body.find('.tooltip').last(), options.position);

  function _positionIt(elem, tooltip, position) {

      // измеряем элемент

  		var
  			elemWidth = elem.outerWidth(true),
  			elemHeight = elem.outerHeight(true),
  			topEdge = elem.offset().top,
  			bottomEdge = topEdge + elemHeight,
  			leftEdge = elem.offset().left,
  			rigthEdge = leftEdge + elemWidth;

  		// измеряем тултип

  		var
  			tooltipWidth = tooltip.outerWidth(true),
  			tooltipHeight = elem.outerHeight(true),
  			leftCentered = (elemWidth / 2) - (tooltipWidth / 2),
  			topCentered = (elemHeight / 2) - (tooltipHeight / 2);

  		var
  			positions = {};

      switch(position) {
			case 'right' :
				positions = {
					left: rigthEdge,
					top : topEdge + topCentered
				};
				break;
			case 'top' :
				positions = {
					left: leftEdge + leftCentered,
					top : topEdge - tooltipHeight
				};
				break;
			case 'bottom' :
				positions = {
					left : leftEdge + leftCentered,
					top : bottomEdge
				};
				break;
			case 'left' :
				positions = {
					left : leftEdge - tooltipWidth,
					top : topEdge + topCentered
				};
				break;
		}
  		tooltip
			.offset(positions)
			.css('opacity', '1');
  };
};

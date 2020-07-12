$('#menu').mouseout(function()
	{
		$('#underline').css('left','227px');
		$('#underline').css('width','80px');
	});
const small=$('.container')[0];
const bootstrap=$('#bootstrap')[0];
const big=$(".bigscreen")[0];
$(document).ready(function()
	{
if($(window).width()<1000 || $(window).height()<400)
			{
				// $('#bootstrap').remove();
				$('.bigscreen').remove();
			}
		else
		{
			$('#bootstrap').remove();
			$('.container').remove();
		}
	});
$(window).resize(function()
	{
		if($(window).width()<1000 || $(window).height()<400)
			{
				$('head > link').before(bootstrap);
				$(".bigscreen").before(small);
				$('.bigscreen').remove();
			}
		else
		{
			$('#bootstrap').remove();
			$(".container").before(big);
			$('.container').remove();
		}
	});

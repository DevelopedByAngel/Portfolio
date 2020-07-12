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
				$('.bigscreen').remove();
			}
		else
		{
			$('.container').remove();
		}
	});
$(window).resize(function()
	{
		if($(window).width()<1000 || $(window).height()<400)
			{
				$(".bigscreen").before(small);
				$('.bigscreen').remove();
			}
		else
		{
			$(".container").before(big);
			$('.container').remove();
		}
	});

/*since ths is called after portfolio.js this code will have affect in portfoilioabout*/
$('#menu').mouseout(function()
	{
		$('#underline').css('left','120px');
		$('#underline').css('width','80px');
	});
$(window).ready(function()
	{
		if($(window).width()<1000)
		{
			$('.control').css("display","none");
		}
		// $('#skills > img').attr("onclick","next(this);");
		var x=2;
		var y=x-1;
		var z=x+1;
		$('#'+x).css("filter","blur(0px)");
		$('#'+y+',#'+z).css('height','10em');	
		// $('#skills > img:not(#'+x+',#'+y+',#'+z+')').css("height","10px");
		$('#skills > img:not(#'+x+',#'+y+',#'+z+')').css("display","none");
	});
function next()
	{
		var x=$('#skills')[0];
		var x=parseInt(x.className);
		x=x+1;
		var y=x-1;
		var z=x+1;
		if(x==11){
			x=1
			y=2
			z=3
		}
		change(x,y,z);
	};
function previous()
	{
		var x=$('#skills')[0];
		var x=parseInt(x.className);
		x=x-1;
		var y=x-1;
		var z=x+1;
		if(x==0){
			x=10
			y=9
			z=8
		}
		change(x,y,z);
	};
function change(x,y,z)
{
		$('#skills > img').css("display","inline");
		$('#skills > img').css("height","15em");
		$('#skills > img').css("filter","blur(5px)");
		$('#skills').attr('class',x);
		$('#'+x).css("filter","blur(0px)");
		$('#'+y+',#'+z).css('height','10em');	
		$('#skills > img:not(#'+x+',#'+y+',#'+z+')').css("display","none"); 
}
var start=0;
var end=0;
$('#skills').on("touchstart",function(event)
	{
		start=event.originalEvent.touches[0].pageX;
	});
$('#skills').on("touchend",function(event)
	{
		end=event.originalEvent.changedTouches[0].pageX;
		console.log(start-end)
		if(start-end>100)
			next();
		else if(start-end<-100)
			previous();
	});

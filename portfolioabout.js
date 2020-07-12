/*since ths is called after portfolio.js this code will have affect in portfoilioabout*/
$('#menu').mouseout(function()
	{
		$('#underline').css('left','120px');
		$('#underline').css('width','80px');
	});
$(window).ready(function()
	{
		// $('#skills > img').attr("onclick","next(this);");
		var x=2;
		var y=x-1;
		var z=x+1;
		$('#'+x).css("filter","blur(0px)");
		$('#'+y+',#'+z).css('height','80px');	
		$('#skills > img:not(#'+x+',#'+y+',#'+z+')').css("height","10px");
		$('#skills > img:not(#'+x+',#'+y+',#'+z+')').css("display","none");
	});
function next()
	{
		var x=$('#skills')[0];
		$('#skills > img').css("display","inline");
		$('#skills > img').css("height","100px");
		$('#skills > img').css("filter","blur(5px)");
		var x=parseInt(x.className);
		x=x+1;
		var y=x-1;
		var z=x+1;
		if(x==11){
			x=1
			y=2
			z=3
		}
		$('#skills').attr('class',x);
		$('#'+x).css("filter","blur(0px)");
		$('#'+y+',#'+z).css('height','80px');	
		$('#skills > img:not(#'+x+',#'+y+',#'+z+')').css("height","10px");
		$('#skills > img:not(#'+x+',#'+y+',#'+z+')').css("display","none");

	};
function previous()
	{
		var x=$('#skills')[0];
		$('#skills > img').css("display","inline");
		$('#skills > img').css("height","100px");
		$('#skills > img').css("filter","blur(5px)");
		var x=parseInt(x.className);
		x=x-1;
		var y=x-1;
		var z=x+1;
		if(x==0){
			x=10
			y=9
			z=8
		}
		$('#skills').attr('class',x);
		$('#'+x).css("filter","blur(0px)");
		$('#'+y+',#'+z).css('height','80px');	
		$('#skills > img:not(#'+x+',#'+y+',#'+z+')').css("height","10px");
		$('#skills > img:not(#'+x+',#'+y+',#'+z+')').css("display","none");

	};

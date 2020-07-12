function image(event)	// when mouse move on selector
{
	console.log("t");
	$('#my').css("background-image","radial-gradient(transparent,transparent,rgba(255,255,255,0.2))");
	x=event.pageX/20;
	y=event.pageY/20;
	x=(x/28);
	y=(y/28);
	if(x>0.5)
		x=-1*(x-0.5);
	else
		x=0.5-x;
	if(y>0.5)
		y=-1*(y-0.5);
	else
		y=0.5-y;
	$('#my').css('transform','rotate3d('+x+','+y+',0,20deg');//rotate al three axis
}
$('#my').mouseout(function()
	{
		$('#my').css("background-image","");

	});
$('#home').mousemove(function()
	{
		$('#underline').css('left','18px');
		$('#underline').css('width','80px');
	});
$('#about').mousemove(function()
{
	$('#underline').css('left','120px');
	$('#underline').css('width','80px');
});
$('#works').mousemove(function()
{
	$('#underline').css('left','222px');
	$('#underline').css('width','85px');
});
$('#contact,table').mousemove(function()
{
	$('#underline').css('left','330px');
	$('#underline').css('width','0px');
	$('table').css('visibility','visible');
});
$('#contact,table').mouseout(function()
{
		$('table').css('visibility','hidden');
});
$('#menu').mouseout(function()
	{
		$('#underline').css('left','18px');
		$('#underline').css('width','80px');
	});
$('#email').mousemove(function()
{
	$('#email > td >img').attr('src','emailc.png');
});
$('#linkedin').mousemove(function()
{
	$('#linkedin > td >img').attr('src','linkedinc.png');
});
$('#studymonk').mousemove(function()
{
	$('#studymonk > td >img').attr('src','studymonkc.png');
});
$('#email').mouseout(function()
{
	$('#email > td >img').attr('src','email.png');
});
$('#linkedin').mouseout(function()
{
	$('#linkedin > td >img').attr('src','linkedin.png');
});
$('#studymonk').mouseout(function()
{
	$('#studymonk > td >img').attr('src','studymonk.png');
});
$('#paper1').click(function()
{
		$('#paper1').css('transition','0.6s');
				$('#paper2').css('transition','0.6s');
	$('#paper1').css('z-index','4');
	$('#paper2').css('z-index','4');
	$('#paper1').css('border-bottom','1000px solid rgba(0,0,0,0)');
	$('#paper1').css('border-left','2000px solid rgba(220,220,220,1)');
	$('#paper2').css('border-bottom','1000px solid white');
	$('#paper2').css('border-left','2000px solid rgba(220,220,220,1)');
	setTimeout(function(){
		$('<a href="https://student.studymonk.in/#/login" download></a>')[0].click();    
		window.location.href = "file:///D:/ANGEL/web%20demo/resume.pdf";
	},250);
});
function paperin()
{
	// alert("an");
	$('#paper1').css('border-bottom','80px solid rgba(0,0,0,0)');
	$('#paper1').css('border-left','80px solid rgba(135,3,61,1)');
	$('#paper2').css('border-bottom','80px solid white');
	$('#paper2').css('border-left','80px solid rgba(135,3,61,1)');

};
function paperout()
{
	// alert("an");
	$('#paper1').css('border-bottom','50px solid rgba(255,255,255,0)');
	$('#paper1').css('border-left','50px solid rgba(83,1,36,1)');
	$('#paper2').css('border-bottom','50px solid rgba(255,255,255,1)');
	$('#paper2').css('border-left','50px solid rgba(83,1,36,1)');

};
$(window).scroll(function() {
	// alert($(document).height());
   if($(window).scrollTop() + $(window).height() > $(document).height()-50) {
       $('')
   }
});
$('#m').on('click',function()
	{
		$('#m').css("animation-name","unset");
	});
$('#m').on("touchstart touchmove",function(event)
{
		$('#m').css("animation-name","unset");
	$('#m').css("background-image","radial-gradient(transparent,transparent,rgba(255,255,255,0.2))");
	x=event.originalEvent.touches[0].pageX/30;
	// original event to access the event thae was actually triggered and touches is  fingers  used[0] is one finger
	y=event.originalEvent.touches[0].pageY/30;
	x=(x/28);
    y=(y/28);
	if(x>0.5)
		x=-1*(x-0.5);
	else
		x=0.5-x;
	if(y>1.0)
		y=-1*(y-1);
	else
		y=0.5-y;
$('#m').css('transform','rotate3d('+x+','+y+',0,20deg');
});
$('#m').on("touchend",function()
	{
		$('#m').css("background-image","");
	});

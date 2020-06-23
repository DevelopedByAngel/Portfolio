// 		$('* :not(#loader,html,body,#vid,#wings)').css('display','none');

// $('#vid').on("playing",function()
// 	{
// 		setTimeout(function()
// 			{
// 				$('img').css('opacity','100%');
// 			},3300);
// 		setTimeout(function()
// 			{
// 				$('#loader').css("opacity","0%");
// 				$('*').css('display','');
// 			},5100);
// 		setTimeout(function()
// 			{
// 				$('#loader').remove();
// 			},5200);
// 	});


$('#my').mousemove(function(event)
	// when mouse move on selector
{
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
});
$('#my').mouseout(function()
	{
			$('#my').css("background-image","");

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
	setTimeout(function(){window.location.href = "resume.pdf";},250);
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
$(document).ready(function()
	{
	if($(window).width()<1000){
$("#back").css("visibility",'visible');
	alert("This site is primarly developed for larger screens(laptops or computers)");}
else
$("#back").css("visibility",'hidden');	});

$(window).resize(function()
	{
	if($(window).width()<1000)
$("#back").css("visibility",'visible');
else
$("#back").css("visibility",'hidden');	});
// function name()
// {


// 	setTimeout(function(){
// 		$('.i').css('visibility','hidden');
// 	},1000);
	
// }
// function move()
// {
// $('.i').css('transform','translateX(90px) ');
// // $('.i'.css('left','40px');
// // $('.i').css('top',t);
// }

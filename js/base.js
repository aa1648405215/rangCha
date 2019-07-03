$(function(){
	
	
	//lastheader    start*
	$('.a1').click(function(){
		$('.clickMenu').show();
		$('.clikBg').show();
	})
	
	$('.clikBg').click(function(){
		$('.clickMenu').hide();
		$('.clikBg').hide();
	})
	
	$('.firstUl li').hover(function(){
		$(this).addClass('curLine').siblings().removeClass('curLine');
	})
	$('.firstUl li').click(function(){
		$(this).addClass('firstLi').siblings().removeClass('firstLi');
	})
	//lastheader    end*
	
	
	$('.baseList li').bind('mouseenter mouseleave',function(e){
		var w = $(this).width();
		var h = $(this).height();
		var x = (e.pageX-this.offsetLeft - (w/2))*(w>h?(h/w):1);
		var y = (e.pageY-this.offsetTop - (h/2))*(h>w?(w/h):1);
		//direction的值为“0，1，2，3”分别对应着“上，右，下，左
		var direction = Math.round((((Math.atan2(y,x)*(180/Math.PI))+180)/90)+3)%4;
		var eventType = e.type;
//		var dirName = new Array('上方','右侧','下方','左侧');
		var mask = $(this).children('.mask');
		if(e.type == 'mouseenter'){
			switch (direction){
				case 0:
				mask.css({
					top:-300,
					left:0
				})
					break;
				case 1:
				mask.css({
					top:0,
					left:300
				})
					break;
				case 2:
				mask.css({
					top:300,
					left:0
				})
					break;
				case 3:
				mask.css({
					top:0,
					left:-300
				})
					break;			
			}
			mask.stop(true).css({display:'block'}).animate({
				left:0,
				top:0
			},400);
		}else{
			var end = {};
			switch (direction){
				case 0:
				end = {
					top:-300,
					left:0
				}
					break;
				case 1:
				end = {
					top:0,
					left:300
				}
					break;
				case 2:
				end = {
					top:300,
					left:0
				}
					break;
				case 3:
				{
					end = {
					top:0,
					left:-300
					};
					break;	
				}						
			}
			mask.stop(true).css({display:'block'}).animate(end,400);
		}
	})
	
	//回顶部
	$(document).scroll(function(){
		var top = $(document).scrollTop();
		console.log('aaaaa'+top);
		if(top>600){
			$('.lastIcon').css('opacity','1');
		}
		$('.lastIcon').click(function(){
			$('.lastIcon').scrollTop(0);
		})
	})
	
})
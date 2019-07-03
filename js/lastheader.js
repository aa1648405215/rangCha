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
})
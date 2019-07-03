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
	
	
	$('.teaRow ul li').click(function(){
		
		$('.teaList').eq($(this).index()).addClass('current1').siblings().removeClass('current1');
	})
	//分页
	$('.teaBut a:nth-child(1)').click(function(){
		$('.teaList').eq(0).addClass('current1').siblings().removeClass('current1');
	})
	$('.teaBut a:nth-child(2)').click(function(){
		$('.teaList').eq(1).addClass('current1').siblings().removeClass('current1');
	})
	$('.teaBut a:nth-child(3)').click(function(){
		$('.teaList').eq(1).addClass('current1').siblings().removeClass('current1');
	})
	$('.teaBut a:nth-child(4)').click(function(){
		$('.teaList').eq(1).addClass('current1').siblings().removeClass('current1');
	})
	//第二页分页
	$('.teaBut2 a:nth-child(1)').click(function(){
		$('.teaList').eq(0).addClass('current1').siblings().removeClass('current1');
	})
	$('.teaBut2 a:nth-child(2)').click(function(){
		$('.teaList').eq(0).addClass('current1').siblings().removeClass('current1');
	})
	$('.teaBut2 a:nth-child(3)').click(function(){
		$('.teaList').eq(0).addClass('current1').siblings().removeClass('current1');
	})
	$('.teaBut2 a:nth-child(4)').click(function(){
		$('.teaList').eq(1).addClass('current1').siblings().removeClass('current1');
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
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
	
	
	var i=-1;
	var j=-1;
	var timer;
	var timer01;
	var m=[0,15,60,75,80,90,95,100,120,138];
	var n=[0,35,65,125,225,265,315,355,401,423];
	var x=[0,12,34,42,53,59,65,72,77,89];
	var y=[0,65,125,235,312,355,425,455,532,567];
	
	timer = setInterval(function(){
		i++;
		if(i>m.length){
			clearInterval(timer)
		}
		$('ul li:nth-child(1) p').html(m[i]);	
		$('ul li:nth-child(2) p').html(n[i]);
		$('ul li:nth-child(3) p').html(x[i]);
		$('ul li:nth-child(4) p').html(y[i]);
	},100);	
	
	$(window).stop().scroll(function(){
		
		if($(document).scrollTop()>100){	
			console.log($(document).scrollTop())
			timer01 = setInterval(function(){
				j++;
				if(j>n.length){
					clearInterval(timer01)
				}
				$('ul li:nth-child(1) p').html(m[j]);	
				$('ul li:nth-child(2) p').html(n[j]);
				$('ul li:nth-child(3) p').html(x[j]);
				$('ul li:nth-child(4) p').html(y[j]);
			},100);			
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
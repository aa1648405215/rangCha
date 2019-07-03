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
  	
  		$(window).resize(function(){
				var j = $('.ag-image').width()+'px';
	  		$('#bpic').css('left','j');
		})
  		
  		$('.main-image').mousemove(function(event){
				//var pageX = $(document).pageX;
				var nowleft = event.pageX - $('.main-image').offset().left-110.25;
				var nowtop = event.pageY - $('.main-image').offset().top-110.25;
				//console.log('nowleft'+nowleft,'nowtop'+nowtop);
				if(nowleft<0){
					nowleft = 0;
				}
				//nowleft值获取图片大小
		//		$('#s .ag-image').Width;
		        console.log('宽')
				console.log($('.main-image').width()-220.5);
				if(nowleft>$('.main-image').width()-220.5){
					nowleft = $('.main-image').width()-220.5;
				}
				if(nowtop<0){
					nowtop = 0;
				}
				//nowtop值获取图片大小
				console.log('高')
				console.log($('.main-image').height()-220.5);
				if(nowtop>$('.main-image').height()-220.5){
					nowtop = $('.main-image').height()-220.5;
				}
				
				$('#sq').css({
					'top':nowtop,
					'left':nowleft
				})
				console.log('nowleft'+nowleft,'nowtop'+nowtop);
				$('#bpic').css({
		//			'top':-nowtop*0.525,
		//			'left':-nowleft*0.525
					'backgroundPositionX':-nowtop*($('.main-image').width()/220.5),
					'backgroundPositionY':-nowleft*($('.main-image').height()/220.5)
				})
			})
  		
  		//购物车加减
  		$('.minus').click(function(){
  			var num = parseInt($('.input-text').val());
  			if($('.input-text').val()<=0){
  				$('.input-text').val(0)
  			}else{
  				$('.input-text').val(--num);
  			}
  			
  			
  			console.log($('.input-text').val());
  		})
  		
  		$('.plus').click(function(){
  			var num = parseInt($('.input-text').val());
  			
  				$('.input-text').val(++num);
  			
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
 
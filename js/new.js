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
	
	    console.log($('.newLi ul li:nth-child(1) a').html())
		
		
		$('.newLi ul li:nth-child(1)').click(function(){
			console.log($('#aaa').html())
			if($('#aaa').html()=='新闻分类'){
				$('#aaa').html('关闭')
			}else{
				$('#aaa').html('新闻分类')
			}
			console.log($(window).width())
			if($(window).width()<=992){
				$('.newLi ul li:nth-child(1)').siblings().toggle();
			}else{
				$('.newLi ul li:nth-child(1)').siblings().show();
			}
			//$('.newLi ul li:nth-child(1)').siblings().toggle();
		})
		
		$('.lastclick a').click(function(){
			var str=`<div class="media mediaList">						  
						  <div class="media-body">
						    <a href="#">2019茶叶展-第十六届上海国际茶业交易春季博览会</a>
						    <p>野生种遍见于中国长江以南各省的山区，为小乔木状，叶片较大，常超过10厘米长，长期以来，经广泛栽培，毛被及叶型变化很大。茶叶可作饮品，含有多种有益成分，并有保健功效。</p>
						    <a href="#">阅读正文 →</a>
						  </div>
						  <div class="media-right">
						    <a href="#">
						      <img class="media-object" src="img/news/02-news.jpg" alt="">
						    </a>
						  </div>
						</div>`;
						
			$('.newRight').append(str+str+str);
			$('.lastclick').css({display:'none'});
		})
		
		
		//tab栏切换
		$('.newLi ul li:nth-child(2)').click(function(){
			$('.rightA').show();
			$('.rightB').hide();
		})
		$('.newLi ul li:nth-child(3)').click(function(){
			$('.rightA').hide();
			$('.rightB').show();
		})
		$('.newLi ul li:nth-child(4)').click(function(){
			$('.rightA').hide();
			$('.rightB').show();
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
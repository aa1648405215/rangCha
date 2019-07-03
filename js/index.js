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
	
	//banner高度随视窗宽度改变   start
	$(window).resize(function(){
		var cliHeight = document.body.clientWidth;
		var aHeight = (cliHeight-6)/2;
		console.log('高度'+aHeight);
		$('#box').css('height',aHeight+'px');
	})
	//banner高度随视窗宽度改变   end
	
	//index 第一个轮播图 start
	//01.布局
	//02. 点击按钮切换图片
	//  封装函数bind函数    绑定.onclick事件
	//  得到按钮的索引值
	//  封装了changePic函数   根据索引值改变图片的透明度
	//  先把大图数组遍历一遍并把所有大图透明度设置为0
	//  然后再判断 当大图索引值等于按钮索引值是  将当前的大图透明值设置为0
	// 03.自动轮播 ，每间隔2s换一张图片显示
	//   setInterval  设置一个全局的iNow  控制显示图片的索引
	//  为了确保点击事件  和自动轮播的图片能契合
	//  点击的时候 index 赋值给iNow

	slider();
	function slider(){
		inter();
		var iNow = 0;
		var timer;
		//遍历按钮数组,取索引值
		for(var i=0;i<$('.btn').length;i++){
			console.log('遍历按钮数组,取索引值'+i);
			bind(i);
		}
		//为按钮绑定点击事件,当点击事件发生时,调用changePic(index)改变图片透明度
		function bind(index){
			$('.btn').eq(index).click(function(){
		//当点击按钮时,清除定时器, 让后面changePic( index )调用++后,再重启定时器
				clearInterval(timer);
				iNow = index;
				console.log('点击按钮时'+index);
				changePic( index );
				inter ();
			})
		}
		//
		//先遍历大图,把所有大图透明度改为0
		//然后把点击事件的索引值赋值给j,使当前大图透明度为1
		function changePic( index ){					
			for(var j=0;j<$('.pic').length;j++){
				$('.pic').eq(j).css('opacity','0');
				if(j==index){
					$('.pic').eq(index).css('opacity','1');
					$('.btn').eq(index).css('background-color','#85bf41');
				}else{
					$('.btn').eq(j).css('background-color','#FFFFFF'); 
				}
			}
		}
		//设置间隔定时器  来完成自动轮播
		function inter (){
			//timer全局变量 
			timer = setInterval(function(){
			//console.log('自动'+iNow);
				iNow++;
				//console.log('自动'+iNow);
				if(iNow>=$('.pic').length-1){
					iNow = 0;
				}						
				changePic( iNow );
			},4000)
		}
	}
	
	
	//index 第一个轮播图  end
	
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

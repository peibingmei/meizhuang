window.onload=function(){

   var left=document.getElementById("left");
   var cover=document.getElementById("cover");
  var box=document.getElementById("box");
  var right=document.getElementById("right");
  var tb=document.getElementById("tb");
  //给左侧加鼠标移动事件
 cover.onmousemove=function(e){
   //鼠标移动就要应该获得鼠标位置，获得鼠标位置就要获得事件对象
   var ev=window.event||e;
   var mouse_left=ev.offsetX||ev.layerX;//获得鼠标当前位置，也就是获得鼠标和div之间的位置
   var mouse_top=ev.offsetY||ev.layerY;
   document.title=mouse_left+"|"+mouse_top;
   //计算色块的位置
   var box_left=mouse_left-110;
    var box_top=mouse_top-100;
	//判断边界
	if(box_left<0){
	  box_left = 0;
	}
	if(box_left>180){
	 box_left = 180;
	}
	if(box_top<0){
	 box_top = 0;
	}
	if(box_top>200){
	 box_top = 200;
	}

	//让色块移动
	box.style.left=box_left+"px";
	box.style.top=box_top+"px";
    //计算右侧图片的位置
	var tb_left=box_left*-2;
    var tb_top=box_top*-2;
	//让右侧图片移动
	tb.style.left=tb_left+"px";
	tb.style.top=tb_top+"px";
    //给左侧加鼠标移入事件
	cover.onmouseover=function(){
	  box.style.display="block";
	 right.style.display="block";	
	};
	cover.onmouseout=function(){
	  box.style.display="none";
	  right.style.display="none";	
	};
 }
 
 
 var nav=document.getElementById('nav');
     var navFixed=document.getElementById('navFixed');
     window.onscroll=function(){
         var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        if(scrollTop>nav.offsetTop){
             navFixed.style.display='block';    
         }else if(scrollTop<nav.offsetTop){
             navFixed.style.display='none';
         }
     }
     
     
     $(document).ready(function(){
				var layer0=$(".layer0");
				var cream=$(".cream");
				cream.mouseover(function(){
					layer0.slideDown();
				})
				layer0.mouseover(function(){
					layer0.show();
				})
				layer0.mouseout(function(){
					layer0.hide();
				})
			})
			$(document).ready(function(){
  
  $('li.mainlevel').mousemove(function(){
  $(this).find('ul').slideDown("1000");//you can give it a speed
  });
  $('li.mainlevel').mouseleave(function(){
  $(this).find('ul').slideUp("fast");
  });
  
});
}
   


   
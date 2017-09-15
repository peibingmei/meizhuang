
       window.onload = function () {
	/*star-product*/
	var ularr1=document.getElementById("ularr1");
	var ularr2=document.getElementById("ularr2");
	var span1=document.getElementById("last");
	var span2=document.getElementById("next");
	span2.onclick=function(){
		ularr2.style.display="block";
		ularr1.style.display="none";
	}
	span1.onclick=function(){
		ularr1.style.display="block";
		ularr2.style.display="none";
	}
	
	/*search-all-fixed*/
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
	}
/*下拉框动画*/
	

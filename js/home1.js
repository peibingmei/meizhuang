
       window.onload = function () {
	
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
	

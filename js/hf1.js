window.onload=function(){
var kinds=document.getElementsByName("kinds");
var ulArr=product.getElementsByTagName("ul");
for (var i=0;i<kinds.length;i++) {
	      kinds[i].index = i;
	kinds[i].onclick=function(){		
		      for(var j=0;j<kinds.length;j++){
                  ulArr[j].style.display = "none";
                }
		     
		ulArr[this.index].style.display="block";
		
	  }
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
  
  $('li.mainlevel').mousemove(function(){
  $(this).find('ul').slideDown("1000");//you can give it a speed
  });
  $('li.mainlevel').mouseleave(function(){
  $(this).find('ul').slideUp("fast");
  });
  
});
}
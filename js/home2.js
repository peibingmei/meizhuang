 window.onload=function(){
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
				var layer1=$(".layer1");
				var cosmetics=$(".cosmetics");
				cosmetics.mouseover(function(){
					layer1.slideDown();
				})
				layer1.mouseover(function(){
					layer1.show();
				})
				layer1.mouseout(function(){
					layer1.hide();
				})
			})
			
			
			$(document).ready(function(){
				var layerfixed0=$(".layerfixed0");
				var creamfixed=$(".creamfixed");
				creamfixed.mouseover(function(){
					layerfixed0.slideDown();
				})
				layerfixed0.mouseover(function(){
					layerfixed0.show();
				})
				layerfixed0.mouseout(function(){
					layerfixed0.hide();
				})
			})
			$(document).ready(function(){
				var layerfixed1=$(".layerfixed1");
				var cosmeticsfixed=$(".cosmeticsfixed");
				cosmeticsfixed.mouseover(function(){
					layerfixed1.slideDown();
				})
				layerfixed1.mouseover(function(){
					layerfixed1.show();
				})
				layerfixed1.mouseout(function(){
					layerfixed1.hide();
				})
			})
		}
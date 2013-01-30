


require( ["plugins/domReady"], function(domReady){
    
	domReady(function(){
		
		require(["thirdparty/jquery","renderer/Renderer"], function(jQuery, Renderer) {
			
			var oRenderer = new Renderer();
			oRenderer.drawSomeLine();
		});
		
	});

});





require( ["plugins/domReady"], function(domReady){
    
	domReady(function(){
		
		require(["thirdparty/jquery","renderer/Renderer", "touch/TouchController", "touch/ReflectorTouchController"], function(jQuery, Renderer, TouchController, ReflectorTouchController) {
			
			var oRenderer = new Renderer();
			
			var eInnerStageWrapper = $(".innerStage");
			
			var oTouchController = new TouchController( eInnerStageWrapper, oRenderer );
			oTouchController.init();
			
			var oReflectorTouchController = new ReflectorTouchController( oRenderer );
			
			
			
			window.onresize = function(){
				oTouchController.handleResize();
			};
			
			oRenderer.renderAllLines();
		});
		
	});

});


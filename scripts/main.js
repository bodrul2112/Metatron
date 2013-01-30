


require( ["plugins/domReady"], function(domReady){
    
	domReady(function(){
		
		require(["thirdparty/jquery","renderer/Renderer", "touch/TouchController"], function(jQuery, Renderer, TouchController) {
			
			var oRenderer = new Renderer();
			
			var eInnerStageWrapper = $(".innerStage");
			
			var oTouchController =  new TouchController( eInnerStageWrapper, oRenderer );
			oTouchController.init();
			
			window.onresize = function(){
				oTouchController.handleResize();
			};
		});
		
	});

});


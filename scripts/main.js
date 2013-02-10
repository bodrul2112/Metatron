


require( ["plugins/domReady"], function(domReady){
    
	domReady(function(){
		
		require(["thirdparty/jquery", "global/Configuration", "renderer/Renderer", "touch/TouchController",
		         "touch/ReflectorTouchController", "touch/TouchNormalizer", "menu/MenuBar"], 
		         
		         function(jQuery, Configuration, Renderer, TouchController, ReflectorTouchController, TouchNormalizer, MenuBar) {
			
			
			CONF = new Configuration();
			TOUCH_NORMALIZER = new TouchNormalizer();
			var oRenderer = new Renderer();
			
			var eInnerStageWrapper = $(".innerStage");
			
			var oTouchController = new TouchController( eInnerStageWrapper, oRenderer );
			oTouchController.init();
			
			var oReflectorTouchController = new ReflectorTouchController( oRenderer );
			
			var oMenuBar = new MenuBar( CONF.getOuterStage() );
			oMenuBar.resize();
			
			window.onresize = function(){
				oTouchController.handleResize();
				oMenuBar.resize();
			};
			
			oRenderer.renderAllLines();
		});
		
	});

});


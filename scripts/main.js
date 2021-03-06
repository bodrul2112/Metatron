


require( ["plugins/domReady"], function(domReady){
    
	domReady(function(){
		
		require(["thirdparty/jquery", "global/Configuration", "renderer/Renderer", "touch/TouchController", "touch/ReflectorTouchController","menu/MenuBar"], function(jQuery, Configuration, Renderer, TouchController, ReflectorTouchController, MenuBar) {
			
			
			CONF = new Configuration();
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


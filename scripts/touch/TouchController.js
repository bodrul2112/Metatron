
define(["thirdparty/jquery", "drawing/Point"], function( jQuery, Point ) {

	var TouchController =  function( eInnerStageWrapper, oRenderer ) {
		
		this.m_eCanvas = $("#drawingArea");
		this.m_eInnerStageWrapper = eInnerStageWrapper;
		this.m_nLeft = this.m_eInnerStageWrapper.position().left;
		this.m_nTop = this.m_eInnerStageWrapper.position().top;
		this.m_oRenderer = oRenderer;
		
		this.m_bIsDragging = false;
		
		this._initialiseMouseControls();
	}
	
	TouchController.prototype._initialiseMouseControls = function() {
		
		this.m_eCanvas.on("mousedown touchstart",  function(e) { 
			console.log("start")
			e.preventDefault(); 
			this._propagateMouseResponse(  this._mousedown.bind(this), e ); }.bind(this) 
		);
		
		this.m_eCanvas.on("mousemove touchmove",  function(e) { 
			console.log("move")
			e.preventDefault; 
			this._propagateMouseResponse(  this._mousemove.bind(this), e ); }.bind(this) 
		);
		
		this.m_eCanvas.on("mouseup touchend",    function(e) { 
			console.log("end")
			e.preventDefault; 
			this._propagateMouseResponse(  this._mouseup.bind(this),   e ); }.bind(this) 
		);
		
		this.m_eCanvas.on("mouseleave", function(e){ 
			e.preventDefault; 
			this._propagateMouseResponse(  this._mouseleave.bind(this),e ); }.bind(this) 
		);
		
	}
	
	TouchController.prototype._propagateMouseResponse = function( fFunction, e ) {
		
		if(CONF.getState()==CONF.DRAW){
			
			e = TOUCH_NORMALIZER.getCoordinates( e );
			if(e){
				console.log(e.clientX, e.clientY);
			}
			fFunction(e)
		}
	}
	
	TouchController.prototype.handleResize = function() {

		this.m_nLeft = this.m_eInnerStageWrapper.position().left;
		this.m_nTop = this.m_eInnerStageWrapper.position().top;
	}
	
	TouchController.prototype._click = function(e) {
		
	}
	
	TouchController.prototype._mousedown = function(e) {
		
		//e.preventDefault();
		this.m_bIsDragging = true;
		var oPoint =  this._getPointOnCanvas(e)
		this.m_oRenderer.startDrawing( oPoint );
	}
	
	
	TouchController.prototype._mouseup = function(e) {
		
		//e.preventDefault();
		this.m_bIsDragging = false;
		this.m_oRenderer.endDrawing();
		
	}
	
	TouchController.prototype._mouseenter = function(e) {
		
	}
	
	TouchController.prototype._mouseleave = function(e) {
		
		//e.preventDefault();
		this.m_bIsDragging = false;
	}
	
	
	TouchController.prototype._mousemove = function(e) {
		
		//e.preventDefault();
		if(this.m_bIsDragging)
		{
			var oPoint =  this._getPointOnCanvas(e)
			this.m_oRenderer.commenceDrawing( oPoint );
		}
	}
	
	
	TouchController.prototype._mouseout = function(e) {
		
	}
	
	TouchController.prototype._getPointOnCanvas = function(e) {
		
		var nX = e.clientX - this.m_nLeft;
		var nY = e.clientY - this.m_nTop;
		var oPoint = new Point(nX, nY);
		return oPoint;
	}
	
	TouchController.prototype.init = function() {
		
	}
	
	return TouchController;
	

});
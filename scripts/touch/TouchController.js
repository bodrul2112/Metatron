
define(["thirdparty/jquery", "drawing/Point"], function( jQuery, Point ) {

	var TouchController =  function( eInnerStageWrapper, oRenderer ) {
		
		this.m_eCanvas = $("#drawingArea");
		this.m_eInnerStageWrapper = eInnerStageWrapper;
		this.m_nLeft = this.m_eInnerStageWrapper.position().left;
		this.m_nTop = this.m_eInnerStageWrapper.position().top;
		this.m_oRenderer = oRenderer;
		
		this.m_bIsDragging = false;
		
	}
	
	TouchController.prototype.handleResize = function() {

		this.m_nLeft = this.m_eInnerStageWrapper.position().left;
		this.m_nTop = this.m_eInnerStageWrapper.position().top;
	}
	
	TouchController.prototype._click = function() {
		
	}
	
	TouchController.prototype._mousedown = function(e) {
		
		this.m_bIsDragging = true;
		var oPoint =  this._getPointOnCanvas(e)
		this.m_oRenderer.startDrawing( oPoint );
	}
	
	
	TouchController.prototype._mouseup = function() {
		
		this.m_bIsDragging = false;
		this.m_oRenderer.endDrawing();
		
	}
	
	TouchController.prototype._mouseenter = function() {
		
	}
	
	TouchController.prototype._mouseleave = function() {
		
		this.m_bIsDragging = false;
	}
	
	
	TouchController.prototype._mousemove = function(e) {
		
		if(this.m_bIsDragging)
		{
			var oPoint =  this._getPointOnCanvas(e)
			this.m_oRenderer.commenceDrawing( oPoint );
		}
	}
	
	
	TouchController.prototype._mouseout = function() {
		
	}
	
	TouchController.prototype._getPointOnCanvas = function(e) {
		
		var nX = e.clientX - this.m_nLeft;
		var nY = e.clientY - this.m_nTop;
		var oPoint = new Point(nX, nY);
		return oPoint;
	}
	
	TouchController.prototype.init = function() {
		
		this.m_eCanvas.mousedown(this._mousedown.bind(this) );
		this.m_eCanvas.mousemove(this._mousemove.bind(this) );
		this.m_eCanvas.mouseup(this._mouseup.bind(this) );
		this.m_eCanvas.mouseleave(this._mouseleave.bind(this) );
	}
	
	return TouchController;
	

});
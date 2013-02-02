
define(["thirdparty/jquery", "drawing/Point"], function( jQuery, Point ) {

	var TouchController =  function( eInnerStageWrapper, oRenderer ) {
		
		this.m_eCanvas = $("#drawingArea");
		this.m_eInnerStageWrapper = eInnerStageWrapper;
		this.m_nLeft = this.m_eInnerStageWrapper.position().left;
		this.m_nTop = this.m_eInnerStageWrapper.position().top;
		this.m_oRenderer = oRenderer;
		
		this.m_bIsDragging = false;
		
		this.m_eCanvas.mousedown( function(e){ this._mousedown(e); }.bind(this) );
		this.m_eCanvas.mousemove( function(e){ this._mousemove(e); }.bind(this) );
		this.m_eCanvas.mouseup( function(e){ this._mouseup(e); }.bind(this) );
		this.m_eCanvas.mouseleave( function(e){ this._mouseleave(e); }.bind(this) );
		//this.m_eCanvas.mousemove(this._mousemove.bind(this) );
		//this.m_eCanvas.mouseup(this._mouseup.bind(this) );
		//this.m_eCanvas.mouseleave(this._mouseleave.bind(this) );
		
	}
	
	TouchController.prototype.handleResize = function() {

		this.m_nLeft = this.m_eInnerStageWrapper.position().left;
		this.m_nTop = this.m_eInnerStageWrapper.position().top;
	}
	
	TouchController.prototype._click = function(e) {
		
	}
	
	TouchController.prototype._mousedown = function(e) {
		
		e.preventDefault();
		this.m_bIsDragging = true;
		var oPoint =  this._getPointOnCanvas(e)
		this.m_oRenderer.startDrawing( oPoint );
	}
	
	
	TouchController.prototype._mouseup = function(e) {
		
		e.preventDefault();
		this.m_bIsDragging = false;
		this.m_oRenderer.endDrawing();
		
	}
	
	TouchController.prototype._mouseenter = function(e) {
		
	}
	
	TouchController.prototype._mouseleave = function(e) {
		
		e.preventDefault();
		this.m_bIsDragging = false;
	}
	
	
	TouchController.prototype._mousemove = function(e) {
		
		e.preventDefault();
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
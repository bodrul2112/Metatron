
define(["thirdparty/jquery", "drawing/Point"], function( jQuery, Point ) {
	
	var Renderer = function() {
		
		this.m_eWrapper = $('.innerStage');
		
		this.m_eCanvas =  document.getElementById('drawingArea');
		this.m_eCanvas.width = this.m_eWrapper.width();
		this.m_eCanvas .height = this.m_eWrapper.height();
		
		this.m_oContext =  this.m_eCanvas.getContext('2d');
		this.m_oContext.lineWidth = 3;
		this.m_pPoints = [];
		
		this.m_pPoints.push(new Point(0,0));
		this.m_pPoints.push(new Point(100,100));
		this.m_pPoints.push(new Point(150,50));
		this.m_pPoints.push(new Point(200,50));
	}
	
	Renderer.prototype.drawSomeLine = function() {
		
		if(this.m_pPoints.length>1){
			
			var ctx = this.m_oContext; 
			ctx.beginPath();
			var oFirstPoint = this.m_pPoints[0];
			ctx.moveTo( oFirstPoint.x, oFirstPoint.y );
			
			for(var i=1; i<this.m_pPoints.length; i++) {
			    
				var oPoint = this.m_pPoints[i];
			    ctx.lineTo( oPoint.x, oPoint.y );
			}
			
			ctx.closePath();
		    ctx.stroke();
		}
	}
	
	return Renderer;
});
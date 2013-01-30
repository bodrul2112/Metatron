
define(["thirdparty/jquery", "drawing/Point"], function( jQuery, Point ) {
	
	var Renderer = function() {
		
		this.m_eWrapper = $('.innerStage');
		
		this.m_eCanvas =  document.getElementById('drawingArea');
		
		this.m_nWidth = this.m_eWrapper.width();
		this.m_nHeight = this.m_eWrapper.height()
		
		this.m_eCanvas.width = this.m_nWidth;
		this.m_eCanvas.height = this.m_nHeight;
		
		this.m_oContext =  this.m_eCanvas.getContext('2d');
		
		this.m_nLineDir = 1;
		this.m_nLineWidth = 2;
		this.m_oContext.lineWidth = this.m_nLineWidth;
		
		this.m_pPoints = [];
		
		this.m_pPoints.push(new Point(0,0));
		this.m_pPoints.push(new Point(100,100));
		this.m_pPoints.push(new Point(150,50));
		this.m_pPoints.push(new Point(200,50));
		
		this.m_oLastPoint;
	}
	
	Renderer.prototype.startDrawing = function( oPoint ) {
		
		this.m_oLastPoint = oPoint;
		this.m_oContext.beginPath();
		this.m_oContext.moveTo( oPoint.x, oPoint.y ); 
	} 
	
	Renderer.prototype.commenceDrawing = function( oPoint ) {
		
		this.m_oContext.lineTo( oPoint.x, oPoint.y );
		this.m_oContext.stroke();
		this.m_oContext.beginPath();
		this.m_oContext.moveTo( oPoint.x, oPoint.y ); 
		this.m_oLastPoint = oPoint;
		this.lol();
	}
	
	Renderer.prototype.lol = function()
	{
		
		if(this.m_nLineWidth>6){
			this.m_nLineDir = -1;
		}
		
		if(this.m_nLineWidth<2){
			this.m_nLineDir = 1;
		}
		
		this.m_nLineWidth += this.m_nLineDir;
		this.m_oContext.lineWidth = this.m_nLineWidth;
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
			    ctx.stroke();
			}
			
			//ctx.closePath();
		   
		}
	}
	
	return Renderer;
});
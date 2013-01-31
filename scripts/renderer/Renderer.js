
define(["thirdparty/jquery", "drawing/Point", "drawing/Line"], function( jQuery, Point, Line ) {
	
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
		
		this.m_pLines = [];
		this.m_oLastLine;
	}
	
	Renderer.prototype.clear = function() {
		
		this.m_oContext.fillStyle = "white";
		this.m_oContext.fillRect(0, 0, this.m_nWidth, this.m_nHeight);
	} 
	
	Renderer.prototype.renderAllLines = function() {

		for(var i=0; i<this.m_pLines.length; i++ ) {
		
			var oLine = this.m_pLines[i];
			oLine.render( this.m_oContext );
		}
	}
	
	Renderer.prototype.startDrawing = function( oPoint ) {
		
		var oLine = new Line();
		oLine.addPoint( oPoint );
		this.m_pLines.push( oLine );
		this.m_oLastLine = oLine;
	} 
	
	Renderer.prototype.commenceDrawing = function( oPoint ) {
		
		this.m_oLastLine.addPoint( oPoint );
		this.m_oLastLine.render( this.m_oContext );
	}
	
	Renderer.prototype.endDrawing = function( oPoint ) {
		
		this.m_oLastPoint = null;
		this.clear();
		this.renderAllLines();
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
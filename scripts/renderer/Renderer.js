
define(["thirdparty/jquery", "drawing/Point", "drawing/Line", "symmetry/Reflector"], function( jQuery, Point, Line, Reflector ) {
	
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
		
		this.m_pReflectors = [];
		this.m_pReflectors.push( new Reflector(0,0,700,700) );
		this.m_pReflectionBuffer = [];
	}
	
	Renderer.prototype.clear = function() {
		
		this.m_oContext.fillStyle = "white";
		this.m_oContext.fillRect(0, 0, this.m_nWidth, this.m_nHeight);
	} 
	
	Renderer.prototype.renderAllLines = function() {
		
		for(var i=0; i<this.m_pReflectors.length; i++) {
			
			var oReflector = this.m_pReflectors[i];
			oReflector.render( this.m_oContext );
		}

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
		
		this.computeReflections( oPoint );
	}
	
	Renderer.prototype.computeReflections = function( oPoint ) {
		
		this.m_pReflectionBuffer = [];
		
		for(var i=0; i<this.m_pReflectors.length; i++) {
			
			var oReflector = this.m_pReflectors[i];
			var p0 = oReflector.getStart();
			var p1 = oReflector.getEnd();
			
			var nx = p1.x - p0.x;
			var ny = p1.y - p0.y;
			
			var d = Math.sqrt( nx*nx + ny*ny );
			nx = nx/d;
			ny = ny/d;
			
			var oLine = new Line();
			
			var pCurrentLinePoints = this.m_oLastLine.getPoints();
			
			for(var i=0; i<pCurrentLinePoints.length; i++) {
				
				var p = pCurrentLinePoints[i];
				var px = p.x - p0.x;
				var py = p.y - p0.y;
				var w = ( nx*px + ny*py );
				var rx = ( 2*p0.x - p.x + 2*w*nx );
				var ry = ( 2*p0.y - p.y + 2*w*ny );
				
				oLine.addPoint( new Point(rx, ry) );
			}
			
			this.m_pReflectionBuffer.push( oLine );
			oLine.render( this.m_oContext );
			
		}
	}
	
	Renderer.prototype.endDrawing = function( oPoint ) {
		
		this.m_oLastPoint = null;
		this.clear();
		this.transferReflections();
		this.renderAllLines();
	}
	
	Renderer.prototype.transferReflections = function() {
		
		for(var i=0; i<this.m_pReflectionBuffer.length; i++ ) {
			
			this.m_pLines.push( this.m_pReflectionBuffer[i] );
		}
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
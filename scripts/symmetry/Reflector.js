
define(["thirdparty/jquery", "drawing/Point", "symmetry/Handle"], function( jQuery, Point, Handle ) {
	
	
	var Reflector = function( nX1, nY1, nX2, nY2 ){
		
		this.m_oStartPoint = new Point(nX1, nY1);
		this.m_oEndPoint = new Point(nX2, nY2);
		this.m_sLineColor = "rgba(78,166,234,0.2);";
		
		this.m_oHandleOne = new Handle(0,0);
		this.m_oHandleTwo = new Handle(300,0);
		this.m_pHandles = [];
		this.m_pHandles.push( this.m_oHandleOne );
		this.m_pHandles.push( this.m_oHandleTwo );
	}
	
	Reflector.prototype.getStart = function() {
		
		return this.m_oStartPoint;
	}

	Reflector.prototype.getEnd = function() {
		
		return this.m_oEndPoint;
	}
	
	Reflector.prototype.getHandles = function() {
		
		return this.m_pHandles;
	}
	
	Reflector.prototype.render = function( ctx ) {
		
		ctx.strokeStyle = this.m_sLineColor;
		ctx.beginPath();
		ctx.moveTo( this.m_oStartPoint.x, this.m_oStartPoint.y );
		ctx.lineTo( this.m_oEndPoint.x, this.m_oEndPoint.y );
		ctx.stroke();
	}
	
	return Reflector;
	
});
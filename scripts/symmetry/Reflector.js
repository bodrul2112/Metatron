
define(["thirdparty/jquery", "drawing/Point"], function( jQuery, Point ) {
	
	
	var Reflector = function( nX1, nY1, nX2, nY2 ){
		
		this.m_oStartPoint = new Point(nX1, nY1);
		this.m_oEndPoint = new Point(nX2, nY2);
		this.m_sLineColor = "red";
	}
	
	Reflector.prototype.getStart = function() {
		
		return this.m_oStartPoint;
	}

	Reflector.prototype.getEnd = function() {
		
		return this.m_oEndPoint;
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
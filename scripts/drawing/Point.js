

define(["thirdparty/jquery"], function( jQuery ){
	
	var Point = function( nX, nY ) {
		this.x = nX;
		this.y = nY
	}
	
	Point.prototype.getX = function() {
		return this.x;
	}
	
	Point.prototype.getY = function() {
		return this.y;
	}	
	
	Point.prototype.setX = function( nX ) {
		this.x = nX;
	}
	
	Point.prototype.setY = function( nY ) {
		this.y = nY;
	}
	
	return Point;
});
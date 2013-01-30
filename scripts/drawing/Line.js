
define(["thirdparty/jquery"], function( jQuery ) {
	
	var Line = function() {
		
		this.m_pPoints = [];
	}
	
	
	Line.protoype.addPoint = function( oPoint ) {
		
		this.m_pPoints.push( oPoint )
	}
	
	// yup its going to some funny things 
	Line.protoype.doFunnyThings = function() {
		
		
	} 
	
	Line.prototype.render = function( oCanvas ) {
		
		// draw it yo
	}
	
	return Line;
	
});
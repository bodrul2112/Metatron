
define(["thirdparty/jquery"], function( jQuery ) {
	
	var Line = function() {
		
		this.m_pPoints = [];
	}
	
	
	Line.prototype.addPoint = function( oPoint ) {
		
		this.m_pPoints.push( oPoint )
	}
	
	// yup its going to some funny things 
	Line.prototype.doFunnyThings = function() {
		
		
	} 
	
	Line.prototype.render = function( ctx ) {
		
		if( this.m_pPoints.length > 2 )
		{
			var oFirstPoint = this.m_pPoints[0];
			ctx.beginPath();
			ctx.moveTo( oFirstPoint.x, oFirstPoint.y );
			
			for(var i=1; i<this.m_pPoints.length; i++)
			{
				var oPoint = this.m_pPoints[i];
				ctx.lineTo( oPoint.x, oPoint.y );
			    ctx.stroke();
			}
		}
	}
	
	
	
	return Line;
	
});
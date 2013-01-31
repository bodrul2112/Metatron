
define(["thirdparty/jquery"], function( jQuery ) {
	
	var Line = function() {
		
		this.m_pPoints = [];
		this.m_sColor = "black";
		
		this.m_p1;
		this.m_p2;
	}
	
	
	Line.prototype.addPoint = function( oPoint ) {
		
		this.m_pPoints.push( oPoint )
		this.m_p1 = this.m_p2;
		this.m_p2 = oPoint;
	}
	
	Line.prototype.getPoints = function( oPoint ) {
		
		return this.m_pPoints;
	}
	
	// yup its going to some funny things 
	Line.prototype.doFunnyThings = function() {
		
		
	} 
	
	Line.prototype.render = function( ctx ) {
		
		ctx.strokeStyle = this.m_sColor;

		if( this.m_pPoints.length > 2 )
		{
			ctx.beginPath();
			ctx.moveTo( this.m_p1.x, this.m_p1.y );
			ctx.lineTo( this.m_p2.x, this.m_p2.y );
			ctx.stroke();
		}
	}
	
	Line.prototype.renderAllPoints = function( ctx ) {
		
		ctx.strokeStyle = this.m_sColor;

		if( this.m_pPoints.length > 2 )
		{
			var oFirstPoint = this.m_pPoints[0];
			
			
			for(var i=1; i<this.m_pPoints.length; i++)
			{
				var oPoint = this.m_pPoints[i];
				ctx.beginPath();
				ctx.moveTo( oFirstPoint.x, oFirstPoint.y );
				ctx.lineTo( oPoint.x, oPoint.y );
			    ctx.stroke();
			    oFirstPoint = oPoint;
			}
		}
	}
	
	
	
	return Line;
	
});
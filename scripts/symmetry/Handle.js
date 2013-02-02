
define(["thirdparty/jquery", "services/TemplateService","drawing/Point"], function( jQuery, tpl, Point ) {
	
	var ReflectionHandle = function( nX, nY ) {
		
		this.m_nX = nX;
		this.m_nY = nY;
		
		this.m_eElement = tpl.getTemplate(".reflectorHandle");
		this.m_eElement.css("left", this.m_nX);
		this.m_eElement.css("top", this.m_nY);
		
	}
	
	ReflectionHandle.prototype.getElement = function() {
		
		return this.m_eElement;
	}
	
	ReflectionHandle.prototype.getMidX = function() {
		
		var nMidX = this.m_eElement.position().left + (this.m_eElement.width()/2);
		return nMidX;
	}
	
	ReflectionHandle.prototype.getMidY = function() {
		
		var nMidY = this.m_eElement.position().top + (this.m_eElement.height()/2);
		return nMidY;
	}
	
	ReflectionHandle.prototype.move = function( nX, nY ) {
		
		var nMidX = (nX-this.m_eElement.width()/2);
		var nMidY = (nY-this.m_eElement.height()/2);
		this.m_eElement.css("left", nMidX );
		this.m_eElement.css("top", nMidY );
	}
	
	ReflectionHandle.prototype.contains = function( nX, nY ) {
		
		if(nX>= this.m_eElement.position().left && nX<= this.m_eElement.position().left+this.m_eElement.width()) {
			if(nY>= this.m_eElement.position().top && nY<= this.m_eElement.position().top+this.m_eElement.height() ){
				return true;
			}
		}
		return false;
	}
	
	return ReflectionHandle;
	
});
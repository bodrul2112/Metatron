
define(["thirdparty/jquery", "services/TemplateService","drawing/Point"], function( jQuery, tpl, Point ) {
	
	var ReflectionHandle = function() {
		
		this.m_eElemenent = tpl.getTemplate(".reflectionHandle");
		
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
	
	ReflectionHandle.prototype.contains = function( nX, nY ) {
		
		if(nX>= this.m_eElemenent.position().left && nX<= this.m_eElemenent.position().left+this.m_eElemenent.width()) {
			if(nY>= this.m_eElemenent.position().top && nY<= this.m_eElemenent.position().top+this.m_eElemenent.position().height ){
				return true;
			}
		}
		return false;
	}
	
	return ReflectionHandle;
	
});
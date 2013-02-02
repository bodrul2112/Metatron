
define(["thirdparty/jquery", "services/TemplateService","drawing/Point"], function( jQuery, tpl, Point ) {
	
	var ReflectionHandle = function( nX, nY, oPoint ) {
		
		this.m_nX = nX;
		this.m_nY = nY;
		this.m_nMidX;
		this.m_nMidY;
		this.m_oPoint = oPoint;
		
		this.m_eElement = tpl.getTemplate(".reflectorHandle");
		this.m_eElement.css("left", this.m_nX);
		this.m_eElement.css("top", this.m_nY);
		
		
		this.m_pHandleListeners = [];
	}
	
	ReflectionHandle.prototype.getElement = function() {
		
		return this.m_eElement;
	}
	
	ReflectionHandle.prototype.addHandleListener = function( oHandleListener ) {
		
		this.m_pHandleListeners.push( oHandleListener );
	}
	
	// not exactly getting marks for genius, but this is a small app after all and my care this <----> much
	ReflectionHandle.prototype._updateHandlePosition = function() {
		
		var nXOffSet = CONF.getInnerStage().position().left - (this.m_eElement.width()/2);
		var nYOffSet = CONF.getInnerStage().position().top - (this.m_eElement.height()/2);
		
		this.m_oPoint.setXY( this.m_nMidX-nXOffSet, this.m_nMidY-nYOffSet );
		for(var i=0; i<this.m_pHandleListeners.length; i++) {
			this.m_pHandleListeners[i].updateHandlePosition();
		} 
	}
	
	ReflectionHandle.prototype.getMidX = function() {
		
		return this.m_nMidX;
	}
	
	ReflectionHandle.prototype.getMidY = function() {
		
		return this.m_nMidY;
	}
	
	ReflectionHandle.prototype.move = function( nX, nY ) {
		
		this.m_nMidX = (nX-this.m_eElement.width()/2);
		this.m_nMidY = (nY-this.m_eElement.height()/2);
		this.m_eElement.css("left", this.m_nMidX );
		this.m_eElement.css("top", this.m_nMidY );
		this._updateHandlePosition();
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
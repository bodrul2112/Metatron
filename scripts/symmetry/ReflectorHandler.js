
define(["thirdparty/jquery", "services/TemplateService", "drawing/Point"], function( jQuery, tpl, Point ) {
	
	var ReflectorHandler = function() {
		
		this.m_eElement = tpl.getTemplate(".reflectorHandle");
		
		this.m_bDragging = false;
	}
	
	ReflectorHandler.prototype._mousedown = function(e) {
		
		this.m_bDragging = true;
		
	}
	
	ReflectorHandler.prototype._mousemove = function(e) {
		
	}
	
	ReflectorHandler.prototype._mouseup = function(e) {
		
		this.m_bDragging = false;
	}
	
	ReflectorHandler.prototype.init = function() {
		
		this.m_eElement.mousedown(this._mousedown.bind(this) );
		this.m_eElement.mousemove(this._mousemove.bind(this) );
		this.m_eElement.mouseup(this._mouseup.bind(this) );
		
	}
	
	return ReflectorHandler;
	
});
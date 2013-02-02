
define(["thirdparty/jquery"], function( jQuery ) {

	var Configuration = function() {
	
		this.m_eOuterStage = $('.outerStage');
		this.m_eInnerStage = $('.innerStage');
		this.m_eInnerHandleStage = $('.innerHandleStage');
		
		this.m_pUpdateListeners = [];
	}
	
	Configuration.prototype.addUpdateListener = function() {
		
	}
	
	Configuration.prototype.removeUpdateListener = function() {
		
	}
	
	Configuration.prototype.update = function() { 
		
		for( var i=0; i<this.m_pUpdateListeners.length; i++ ) {
			
			this.m_pUpdateListeners[i].update();
			
		}
	}
	
	Configuration.prototype.getOuterStage = function() {
	
		return this.m_eOuterStage;
	}
	
	Configuration.prototype.getInnerStage = function() {
		
		return this.m_eInnerStage;
	}
	
	return Configuration;

});
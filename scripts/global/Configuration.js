
define(["thirdparty/jquery"], function( jQuery ) {

	var Configuration = function() {
		
		this.NEW = "NEW"
		this.DRAW = "DRAW";
		this.NAVIGATE = "NAVIGATE";
		this.SYMMETRY = "SYMMETRY";
		this.MENU = "MENU";
	
		this.m_eOuterStage = $('.outerStage');
		this.m_eInnerStage = $('.innerStage');
		this.m_eInnerHandleStage = $('.innerHandleStage');
		
		this.m_pUpdateListeners = [];
		
		this.m_nBorderWidth = 40;
		this.m_nBottomBarAreaHeight = 100;
		
		this.init();
		
		this.m_sState = this.DRAW;
	}
	
	Configuration.prototype.init = function() {
	
		var nWidth = this.m_eOuterStage.width()-(2*this.m_nBorderWidth);
		var nHeight = this.m_eOuterStage.height()-(2*this.m_nBorderWidth) - this.m_nBottomBarAreaHeight;
		
		this.m_eInnerStage.width(nWidth);
		this.m_eInnerStage.height(nHeight);
		this.m_eInnerStage.css( "top", this.m_nBorderWidth );
		this.m_eInnerStage.css( "left", this.m_nBorderWidth );
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
	
	Configuration.prototype.getState = function() {
		
		return this.m_sState;
	}
	
	Configuration.prototype.setState = function( sState ) {
		
		this.m_sState = sState;
	}
	
	return Configuration;

});
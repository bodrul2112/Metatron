
define(["thirdparty/jquery", "services/TemplateService"], function( jQuery, tpl ) {
	
	var MenuButton = function( oMenuBar, sState ) {
		
		this.m_oMenuBar = oMenuBar;
		this.m_eElement = tpl.getTemplate(".menuBarButton");
		this.m_eElement.click(function(e){ this._click(e) }.bind(this));
		this.m_bIsActive = false;
		this.m_sState = sState;
		this.m_eElement.append($("<div class='placeHolderText'>"+this.m_sState+"</div>"));
	}
	
	MenuButton.prototype.getElement = function() {
		
		return this.m_eElement;
	}
	
	MenuButton.prototype._click = function(e) {
		
		if(e){
			e.preventDefault();
		}
		
		this.m_oMenuBar.blurAll();
		this.m_eElement.addClass("clicked");
		this.m_bIsActive = true;
		CONF.setState( this.m_sState );
	}
	
	MenuButton.prototype.blur = function(e) {
		
		this.m_eElement.removeClass("clicked");
		
		if(this.m_bIsActive) {
			this._handleUnclick();
			this.m_bIsActive = false;
		}
	}
	
	MenuButton.prototype._handleUnclick = function() {
		
	}
	
	return MenuButton;
	
});
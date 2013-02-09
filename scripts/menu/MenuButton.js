
define(["thirdparty/jquery", "services/TemplateService"], function( jQuery, tpl ) {
	
	var MenuButton = function( oMenuBar ) {
		
		this.m_oMenuBar = oMenuBar;
		this.m_eElement = tpl.getTemplate(".menuBarButton");
		this.m_eElement.click(function(e){ this._click(e) }.bind(this));
		this.m_bIsActive = false;
	}
	
	MenuButton.prototype.getElement = function() {
		
		return this.m_eElement;
	}
	
	MenuButton.prototype._click = function(e) {
		
		this.m_oMenuBar.blurAll();
		this.m_eElement.addClass("clicked");
		this.m_bIsActive = true;
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
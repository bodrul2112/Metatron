
define(["thirdparty/jquery","services/TemplateService"], function( jQuery, tpl ) {
	
	var MenuBar = function( eContainer ) {
		
		this.m_eContainer = eContainer;
		this.m_eElement = tpl.getTemplate(".menuBar");
		
		this.m_eContainer.append( this.m_eElement );		
	}
	
	MenuBar.prototype.resize = function() {
		
		var nTop = this.m_eContainer.height()-80;
		var nLeft = (this.m_eContainer.width() - this.m_eElement.width())/2;
		this.m_eElement.css("top", nTop );
		this.m_eElement.css("left", nLeft );
	}
	
	return MenuBar;
	
});
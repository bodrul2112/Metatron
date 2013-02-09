
define(["thirdparty/jquery","services/TemplateService","menu/MenuButton"], function( jQuery, tpl, MenuButton ) {
	
	var MenuBar = function( eContainer ) {
		
		this.m_eContainer = eContainer;
		this.m_eElement = tpl.getTemplate(".menuBar");
		
		this.m_eContainer.append( this.m_eElement );	
		this.m_eButtonContainer =  this.m_eElement.find(".buttonContainer");
		
		this.m_nButtonWidthEdge = 15;
		this.m_pMenuButtons = [];
		this._initMenuBarArea();
		this._initButtons(5);
	}
	
	MenuBar.prototype._initMenuBarArea = function() {
		
		var nButtonWidth = this.m_eElement.width() - (this.m_nButtonWidthEdge*2);
		this.m_eButtonContainer.width(nButtonWidth);
		this.m_eButtonContainer.height(78)
		this.m_eButtonContainer.css({
			"top":0,
			"left":this.m_nButtonWidthEdge
		});
	}
	
	MenuBar.prototype._initButtons = function( nButtons ) {
		
		var nButtonWidth = (this.m_eButtonContainer.width()/nButtons)-3;
		
		for(var i=0; i<nButtons; i++) {
			
			var oMenuButton = new MenuButton( this );
			var eMenuButton = oMenuButton.getElement();
			eMenuButton.width( nButtonWidth );
			this.m_eButtonContainer.append( eMenuButton );
			this.m_pMenuButtons.push( oMenuButton );
		}
		
		this.m_pMenuButtons[this.m_pMenuButtons.length-1].getElement().addClass("rightMostButton");
		
	}
	
	MenuBar.prototype.blurAll = function() {
		
		for(var i=0; i<this.m_pMenuButtons.length; i++) {
			
			this.m_pMenuButtons[i].blur();
		}
	} 
	
	MenuBar.prototype.addButtonListener = function( oButtonListener, nPosition ) {
		
	}
	
	MenuBar.prototype.resize = function() {
		
		var nTop = this.m_eContainer.height()-80;
		var nLeft = (this.m_eContainer.width() - this.m_eElement.width())/2;
		this.m_eElement.css("top", nTop );
		this.m_eElement.css("left", nLeft );
	}
	
	
	return MenuBar;
	
});
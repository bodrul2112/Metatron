
define(["thirdparty/jquery", "drawing/Point", "symmetry/Reflector"], function( jQuery, Point, Reflector ) {
	
	var ReflectorTouchController = function( oRenderer ) {
		
		this.m_eElement = $('.innerHandleStage');
		this.m_oRenderer = oRenderer;
		this.m_pReflectorHandles = [];
		
		this.m_eElement.mousedown(function(e){ this._mousedown(e) }.bind(this));
		this.m_eElement.mouseenter(function(e){ this._mouseenter(e) }.bind(this));
		this.m_eElement.mousemove(function(e){ this._mousemove(e) }.bind(this));
		this.m_eElement.mouseup(function(e){ this._mouseup(e) }.bind(this));
		this.m_eElement.mouseleave(function(e){ this._mouseleave(e) }.bind(this));
		
		this.m_bDragging = false;
		this.m_oDraggingHandle;
		
		
		var nY = CONF.getOuterStage().height()/2;
		var nX = CONF.getOuterStage().width()/2;
		
		//TODO: get rid of these
		var oReflectorOne = new Reflector(0,nY,CONF.getOuterStage().width()-30,nY, oRenderer );
		var oReflectorTwo = new Reflector(nX,0,nX,CONF.getOuterStage().height()-90, oRenderer );

		oRenderer.addReflector( oReflectorOne );
		oRenderer.addReflector( oReflectorTwo );
		
		this.addReflectionHandles( oReflectorOne );
		this.addReflectionHandles( oReflectorTwo );
		
	}
	
	ReflectorTouchController.prototype.addReflectionHandles = function( oReflector ) {
		
		var pHandles = oReflector.getHandles();
		
		for( var i=0; i<pHandles.length; i++ ) {
			
			var oHandle = pHandles[i];
			var eHandle = oHandle.getElement();
			this.m_eElement.append( eHandle );
			this.m_pReflectorHandles.push( oHandle );
		} 
	}

	ReflectorTouchController.prototype._mousedown = function(e) {
		this._start(e);
	}
	
	ReflectorTouchController.prototype._mouseenter = function(e) {

		//this._start(e);
	}

	ReflectorTouchController.prototype._mousemove = function(e) {
		
		e.preventDefault();
		if( this.m_bDragging ) {
			if(this.m_oDraggingHandle) {
				this.m_oDraggingHandle.move( e.clientX, e.clientY );
			}
		}
	}
	
	ReflectorTouchController.prototype._mouseup = function(e) {
		
		this._end(e);
	}
	
	ReflectorTouchController.prototype._mouseleave = function(e) {
		
		this._end(e);
	}
	
	ReflectorTouchController.prototype._start = function(e) {
		
		e.preventDefault();
		this.m_bDragging = true;
		for(var i=0; i<this.m_pReflectorHandles.length; i++){
			
			var oReflectorHandle = this.m_pReflectorHandles[i];
			if( oReflectorHandle.contains( e.clientX, e.clientY ) ) {
				this.m_oDraggingHandle = oReflectorHandle;
			}
		}
	}
	
	ReflectorTouchController.prototype._end = function(e) {
		
		e.preventDefault();
		this.m_bDragging = false;
		this.m_oDraggingHandle = null;
	}
	
	return ReflectorTouchController;
	
});
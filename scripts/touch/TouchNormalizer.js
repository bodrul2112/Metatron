

define(["thirdparty/jquery"], function( jQuery ) {
	
	var TouchNormalizer = function() {
		
	}
	
	TouchNormalizer.prototype.getCoordinates = function( e ){
		
		if(e.clientX){
			return e;
		}else{
			
			if(e.touches && e.touches[0]){
				return {
					clientX: e.touches[0].clientX,
					clientY: e.touches[0].clientY
				}
			}
			else if(e.originalEvent.touches && e.originalEvent.touches[0] ) {
				return {
					clientX: e.originalEvent.touches[0].clientX,
					clientY: e.originalEvent.touches[0].clientY
				}
			}
		}
		
	}
	
	return TouchNormalizer;
	
});
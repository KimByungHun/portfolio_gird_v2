var container = document.getElementById('map'); 
var options = {
	center: new kakao.maps.LatLng(37.498757606731745, 127.02874707106132),
	level: 3 
};

var map = new kakao.maps.Map(container, options); 

setDraggable(true); 
function setDraggable(draggable) {
   map.setDraggable(draggable);    
}

setZoomable(true); 
function setZoomable(zoomable) {
   map.setZoomable(zoomable);    
}


var markerPosition  = new kakao.maps.LatLng(37.498757606731745, 127.02874707106132); 

var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);
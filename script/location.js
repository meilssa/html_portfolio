var container = document.getElementById('map')
var options = {
	center: new kakao.maps.LatLng(37.5240837, 127.1291074),
	level: 1
}

var map = new kakao.maps.Map(container, options)

function setCenter() {
    var moveLatLon = new kakao.maps.LatLng(37.5240837, 127.1291074)
    map.setCenter(moveLatLon)
}
function panTo() {
    var moveLatLon = new kakao.maps.LatLng(37.4868302, 126.7829877)
    map.panTo(moveLatLon)        
}
var positions = [
    {
        title: 'JYP 본사', 
        latlng: new kakao.maps.LatLng(37.5240837, 127.1291074)
    },
    {
        title: '우리인재개발원', 
        latlng: new kakao.maps.LatLng(37.4868302, 126.7829877)
    }
]

var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
for (var i = 0; i < positions.length; i ++) {
    
    var imageSize = new kakao.maps.Size(24, 35); 
    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    var marker = new kakao.maps.Marker({
        map: map,
        position: positions[i].latlng,
        title : positions[i].title,
        image : markerImage
    });
}
var mapTypeControl = new kakao.maps.MapTypeControl();

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

marker.setMap(map)
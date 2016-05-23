/*global google */


var LATITUDE=36.386119;
var LONGITUDE=138.618026;
var $map = document.getElementById("map");

var map = new google.maps.Map($map,{
	center: new google.maps.LatLng(LATITUDE,LONGITUDE),
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	zoom: 16
});

var marker = new google.maps.Marker({
	position: new google.maps.LatLng(LATITUDE,LONGITUDE),
	map: map
})

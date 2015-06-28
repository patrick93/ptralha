var jsonNoCache = 'geo-data-homo.json?nocache=' + (new Date()).getTime();

var heatMapData = [
	{"value" : 2, "latitude": -20, "longitude": -55.20},
	{"value" : 4, "latitude": -25, "longitude": -52.20},
	{"value" : 8, "latitude": -30, "longitude": -58.20},
	{"value" : 1, "latitude": -35, "longitude": -47.20}
];

$(window).on('load', function() {
	//$.getJSON(jsonNoCache, function(heatMapData){
	  $('#mapContainer').jHERE({
			enable: ['behavior', 'zoombar'],
			center: [-15.0, -55.384],
			zoom: 5
		}).jHERE('heatmap', heatMapData, 'density');
		$('.expand-one').click(function(){
			$('.content-one, .number').slideToggle('slow');
		});
		var totalTweets = "Tweets contabilizados até agora: " + heatMapData.length;
		$('.number').text(totalTweets);
	//});
});
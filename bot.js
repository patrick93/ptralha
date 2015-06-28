var Twit = require('twit');

var T = new Twit({
    consumer_key:         'nbLLiWBBvBnjks5v5orC7A'
  , consumer_secret:      '7JYDuOwd52UosLGBm3EcSXt1vsOy1CEJo7gmn7DENI'
  , access_token:         '79890974-iYKxg3fzml3JJJClz6XsKJ0yPJWQoINiHmcJ6xVPY'
  , access_token_secret:  'HGT7xyC68U1OEMkKyZYc8lC9Z1xKUrvMn6UAiTrslI'
});

// T.get('search/tweets', { q: 'ptralha OR #ptralha OR foraDilma OR #foraDilma OR foraPT OR #foraPT'}, function(err, data, response) {
// 	//console.log(data);

// 	for(var index in data.statuses){
// 		console.log(data.statuses[index]);
// 		if(data.statuses[index].place != null){
// 			console.log("Longitude: " + data.statuses[index].place.bounding_box.coordinates[0][0][0]);
// 			console.log("Latitude: " + data.statuses[index].place.bounding_box.coordinates[0][0][1]);
// 			console.log("");
// 		}
// 	}
	
// });

var palavrasChaves =[
	"ptralha",
	"foraPT",
	"foraDilma",
	"renuncieDilma",
	"renunciaDilma",
];

var stream = T.stream('statuses/filter', { track: palavrasChaves});//, locations: '-73.992222,-33.750833,-34.791667,5.272222' 

stream.on('tweet', function (tweet) {
	console.log(tweet);
	if(tweet.coordinates){
		
		console.log("Longitude: " + tweet.coordinates.coordinates[0]);
		console.log("Latitude: " + tweet.coordinates.coordinates[1]);
		console.log("");
	}
  
});
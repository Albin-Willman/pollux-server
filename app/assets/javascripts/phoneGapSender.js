var sender = {
	sendMessage: function(reqJSON){
		console.log("Pollux server, phoneGapSender.js, sendMessage: " + JSON.stringify(reqJSON));
		window.parent.postMessage(JSON.stringify(reqJSON), "file://");
	},

	requestImage: function(){
		var requestImageJSON = {
			"type": "camera"
		};
		this.sendMessage(requestImageJSON);
	},

	requestGeolocation: function () {
		var requestGeolocationJSON = {
			"type": "geolocation"
		};
		this.sendMessage(requestGeolocationJSON);
	}
}
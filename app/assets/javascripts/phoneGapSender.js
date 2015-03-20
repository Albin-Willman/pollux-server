var sender = {
	sendMessage: function(reqJSON){
		console.log("Pollux server, phoneGapSender.js, sendMessage: " + JSON.stringify(reqJSON));
		window.parent.postMessage(JSON.stringify(reqJSON), "file://");
	},

	requestCamera: function(){
		var requestCameraJSON = {
			"type": "camera"
		};
		this.sendMessage(requestCameraJSON);
	},
	requestImage: function() {
			var requestImageJSON = {
			"type": "image"
		};
		this.sendMessage(requestImageJSON);
	}

	requestGeolocation: function () {
		var requestGeolocationJSON = {
			"type": "geolocation"
		};
		this.sendMessage(requestGeolocationJSON);
	}
}
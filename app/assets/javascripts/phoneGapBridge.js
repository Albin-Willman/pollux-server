var bridge = {
	requestImage: function(){
		console.log("webclient, bridge: sent imagerequest");
		sender.requestImage();
	},
	
	requestGeolocation: function() {
		console.log("webclient, bridge: sent geolocationRequest");
		sender.requestGeolocation();
	},

	cameraCallback: function (data) {
		addImgBase64(data);
	},

	geolocationCallback: function (data) {
		var locationJSON = JSON.parse(data);

			'Latitude: '          + position.coords.latitude          + '\n' +
			'Longitude: '         + position.coords.longitude         + '\n' +
			'Altitude: '          + position.coords.altitude          + '\n' +
			'Accuracy: '          + position.coords.accuracy          + '\n' +
			'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
			'Heading: '           + position.coords.heading           + '\n' +
			'Speed: '             + position.coords.speed             + '\n' +
			'Timestamp: '         + position.timestamp                + '\n');
	}
}
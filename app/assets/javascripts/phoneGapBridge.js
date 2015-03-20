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

	getGeolocation: function(){
		sender.requestGeolocation();
	},

	geolocationCallback: function (data) {
		var locationJSON = JSON.parse(data);
	}
}
var bridge = {
	requestCamera: function(){
		console.log("webclient, bridge: requestCamera");
		sender.sendMessage("camera");
	},
	
	requestImage: function(){
		console.log("webclient, bridge: requestImage");
		sender.sendMessage("image");
	},

	getGeolocation: function() {
		console.log("webclient, bridge: getGeolocation");
		sender.sendMessage("geolocation");
	},

	cameraCallback: function (data) {
		addImgBase64(data);
	},

	geolocationCallback: function (locationJSON) {
		showLocation(locationJSON);
	}
}
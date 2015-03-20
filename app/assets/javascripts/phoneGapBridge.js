var bridge = {
	requestCamera: function(){
		console.log("webclient, bridge: requestCamera");
		sender.requestCamera();
	},
	
	requestImage: function(){
		console.log("webclient, bridge: requestImage");
		sender.requestImage();
	},

	requestGeolocation: function() {
		console.log("webclient, bridge: requestGeolocation");
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
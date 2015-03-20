var receiver = {
	addMessageListener: function(){
		window.addEventListener("message", this.messageReceived, false);
		console.log("webclient receiver: added message listner");
	},

	messageReceived: function(event){
		console.log("webclient receiver: messageReceived - " + event.data);
		console.log("webclient receiver: messageReceived - " + event.data.type);
		var eventJSON = JSON.parse(event.data); // Add typeof check for stability?
		if (eventJSON.type === "camera"){
			console.log("webclient receiver: event type camera");
			addImageBase64(eventJSON.data);
		} else if (eventJSON.type === "geolocation") {
			console.log("webclient receiver: event type geolocation");
			var locationJSON = JSON.parse(eventJSON.data);

		} else if (eventJSON.type === "phonegap"){
			setPhoneGapDevice();
		} else {
			console.log("webclient receiver: event type not found");
		}
	}
}
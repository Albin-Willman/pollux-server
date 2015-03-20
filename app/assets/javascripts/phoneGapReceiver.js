/**
* Contains functions for listening to postMessage calls
*
*/
var receiver = {
	// Adds messageReceived as a message listener for this window
	addMessageListener: function(){
		window.addEventListener("message", this.messageReceived, false);
		console.log("webclient receiver: added message listener");
	},

	// Listens to calls of postMessage on this window
	messageReceived: function(message){
		var messageAsJSON = JSON.parse(message.data); 
		console.log("webclient receiver: messageReceived - " + messageAsJSON);

		// Calls appropriate function in bridge object based on message type
		if (messageAsJSON.type === "camera"){
			console.log("webclient receiver: event type camera");
			bridge.cameraCallback(messageAsJSON.data);
		} else if (messageAsJSON.type === "geolocation") {
			console.log("webclient receiver: event type geolocation");
			bridge.geolocationCallback(messageAsJSON.data);
		} else if (messageAsJSON.type === "phonegap"){ 
			console.log("webclient receiver: event type phonegap");
			setPhoneGapDevice();
		} else {
			console.log("webclient receiver: event type not found");
		}
	}
}
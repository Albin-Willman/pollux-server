var receiver = {
	addMessageListener: function(){
		window.addEventListener("message", this.messageReceived, false);
		console.log("webclient receiver: added message listner");
	},

	messageReceived: function(event){
		console.log("webclient receiver: messageReceived - " + event.data);
		console.log("webclient receiver: messageReceived - " + event.data.type);

		/*var eventJSON = event.data;
		if(eventJSON.type === "camera"){
			addImageBase64(eventJSON.image);
			console.log("webclient receiver: event type camera");
		} else if(eventJSON.type === "phonegap"){
			setPhoneGapDevice();
		} else{
			console.log("webclient receiver: event type not found");
		}*/
	}
}
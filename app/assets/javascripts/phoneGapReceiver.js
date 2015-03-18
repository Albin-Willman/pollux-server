var receiver = {
	addMessageListener: function(){
		window.addEventListener("message", this.messageReceived, false);
		console.log("webclient receiver: added message listner");
	},

	messageReceived: function(event){
		var eventJSON = event.data;
		if(eventJSON.type === "camera"){
			addImageBase64(eventJSON.image);
			console.log("webclient receiver: event type camera");
		} else{
			console.log("webclient receiver: event type not found");
		}
	}
}
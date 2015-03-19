var sender = {
	sendMessage: function(reqJSON){
		console.log("Pollux server, phoneGapSender.js, sendMessage: " + JSON.stringify(reqJSON));
		window.postMessage(JSON.stringify(reqJSON), "file://");
	},

	requestImage: function(){
		var reqJSON = {
			"type": "camera"
		}
		this.sendMessage(reqJSON);
	}
}
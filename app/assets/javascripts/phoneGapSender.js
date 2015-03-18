var sender = {
	sendMessage: function(reqJSON){
		window.postMessage(JSON.stringify(reqJSON), "file://");
	},

	requestImage: function(){
		var reqJSON = {
			"type": "camera"
		}
		this.sendMessage(reqJSON);
	}
}
var sender = {
	sendMessage: function(requestType){
		var requestJSON = {
			"type": requestType
		};
		window.parent.postMessage(JSON.stringify(requestJSON), "file://");
	}
}
$( document ).ready(function() {
    window.addEventListener('message', messageListener, false);

    $('#js-send-message').on('click', function(){
    	// e.preventDefault();
    	window.parent.postMessage("Hi phonegap", "file://");
    })
});

function messageListener(event){
	console.log('Received message from phonegap: ' + event);
	$('#received-message').append(event.data);
}




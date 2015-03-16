$( document ).ready(function() {
    window.addEventListener('message', wizMessageReceiver);
});


function wizMessageReceiver (event) {
   	$("#phonegap-msg").append(event);
}
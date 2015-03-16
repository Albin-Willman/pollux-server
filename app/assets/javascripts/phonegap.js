$( document ).ready(function() {
    window.addEventListener('message', wizMessageReceiver);
});

function wizMessageReceiver (event) {
   	$("#phonegap-msg").append("The method was succesfully called");
}
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {
  receiver.addMessageListener();
  
  $("#take-image-button").on('click', function(e) {
    e.preventDefault();
    PolluxDevice.requestCamera();
  });

  $("#upload-image-button").on('click', function(e) {
    e.preventDefault();
    PolluxDevice.requestImage();
  });

  
  $("#button-add-location").on('click', function(e) {
    e.preventDefault();
    PolluxDevice.getGeoLocation();
  });
});

function showLocation(locationJSON){
    $("#longitude-location").css("display","block");
    $("#longitude-location").append(locationJSON.coords.longitude);

    $("#latitude-location").css("display","block");
    $("#latitude-location").append(locationJSON.coords.latitude);

    // $("#location-div").css("display","block");
}

function addImgBase64(base64) {
  document.getElementsByTagName('img')[0].src = base64StringToImgSrc(base64);
}

function base64StringToImgSrc (base64String) {
    return 'data:image/jpeg;base64,' + base64String;
}
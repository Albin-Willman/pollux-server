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


function debug(msg) {
  if (typeof console == 'undefined' || typeof console.log == 'undefined')
    return;

  if (typeof msg !== 'string' && typeof JSON !== 'undefined')
    msg = JSON.stringify(msg);

  console.log('DEBUG: ' + msg);
}

$(document).ready(function() {
  $('#take-picture').on('click', function(e) {
    e.preventDefault();
    Pollux.device.requestCamera();
  });

  $('#upload-image').on('click', function(e) {
    e.preventDefault();
    Pollux.device.requestImage();
  });

  $('#add-location').on('click', function(e) {
    e.preventDefault();
    Pollux.device.getGeoLocation();
  });

  $('#capture-webcam').on('click', function(event) {
    event.preventDefault();
    Pollux.device.streamVideo(function(src) {
       var video = document.querySelector('video');
       video.src = src;
       video.play();
    });
  });
});

function showLocation(locationJSON){
  var setLocationDataPoint = function($element, dataPoint) {
    $element.show();
    $element.append(dataPoint);
  };

  setLocationDataPoint($('#longitude-location'), locationJSON.coords.longitude);
  setLocationDataPoint($('#latitude-location'), locationJSON.coords.latitude);
}

function addImgBase64(base64) {
  debug('web client, application.js, function: addImgBase64');
  $('#image').attr('src', base64StringToImgSrc(base64));
}

function base64StringToImgSrc (base64String) {
  return 'data:image/jpeg;base64,' + base64String;
}

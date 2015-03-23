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
  var localMediaStream = null;

  $('#take-picture').on('click', function(e) {
    e.preventDefault();
    Pollux.device.requestCamera('addImgBase64');
  });

  $('#upload-image').on('click', function(e) {
    e.preventDefault();
    Pollux.device.requestImage('addImgBase64');
  });

  $('#add-location').on('click', function(e) {
    e.preventDefault();
    Pollux.device.getGeoLocation("showLocation");

  });

  $('#capture-webcam').on('click', function(e) {
    e.preventDefault();
    Pollux.device.streamVideo(function(src, stream) {
      var video = document.querySelector('#captured-video');
      video.src = src;
      video.play();
    });
  });

  $('#capture-webcam-image').click(function(e) {
    e.preventDefault();
    Pollux.device.requestCamera('addImgBase64');
  });
});

function overlay(overlayText, id, callback){
  debug("overlayText: " + overlayText);
  debug("id: " + id);
  debug("callback: " + callback);
  debug("callback: " + (typeof callback !== 'undefined'));

  var id         = id;
  var overlayTag = '<a href="#" class="video-overlay" id="' + id + '">' + overlayText + '</a>';
  var video      = document.querySelector("#captured-video");
  $(video).after(overlayTag);
  $('#' + id).click(function(e) {
    if(typeof callback !== 'undefined'){
      callback();
    }
    e.preventDefault();
    video.src="";
    $('#' + id).remove();
  });
}

function showLocation(locationJSON){
  var setLocationDataPoint = function($element, dataPoint) {
    $element.show();
    $element.empty();
    $element.append(dataPoint);
  };

  setLocationDataPoint($('#longitude-location'), "Longitude: " + locationJSON.longitude);
  setLocationDataPoint($('#latitude-location'), "Latitude: " + locationJSON.latitude);
}

function addImgBase64(base64) {
  debug('web client, application.js, function: addImgBase64');
  var imageData = null;
  if (base64.substring(0, 10) === 'data:image') {
    imageData = base64;
  } else {
    imageData = 'data:image/jpeg;base64,' + base64;
  }
  $('#caputred-image').attr('src', imageData);
}

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
  var video  = document.querySelector('video');
  var canvas = document.querySelector('canvas#captured-image-canvas');
  var ctx    = canvas.getContext('2d');

  $('#take-picture').on('click', function(e) {
    e.preventDefault();
    Pollux.device.requestCamera();
  });

  $('#upload-image').on('click', function(e) {
    e.preventDefault();
    Pollux.device.requestImage('addImgBase64');
  });

  $('#add-location').on('click', function(e) {
    e.preventDefault();
    Pollux.device.getGeoLocation();
  });

  $('#capture-webcam').on('click', function(event) {
    event.preventDefault();
    initVideo(function(localVideo, stream) {
      video            = video;
      localMediaStream = stream;
    });
  });

   var cameraSnapshot = function() {
    var setImage = function(video) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      // "image/webp" works in Chrome, other browsers will fall back to image/png.
      document.querySelector('#caputred-image').src = canvas.toDataURL('image/webp');
    };

    if (localMediaStream) {
      setImage(video);
    } else {
      initVideo(function(video, stream) {
        video            = video;
        localMediaStream = stream;
        setImage(video);
      });
    }
  }

  $('#capture-webcam-image').on('click', function(e) {
    e.preventDefault();
    cameraSnapshot();
  });
});

function initVideo(callback) {
  Pollux.device.streamVideo(function(src, stream) {
    var video = document.querySelector('video');
    video.src = src;
    video.play();

    if (typeof callback === 'function') {
      callback(video, stream);
    }
  });
}

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
  $('#caputred-image').attr('src', base64StringToImgSrc(base64));
}

function base64StringToImgSrc (base64String) {
  return 'data:image/jpeg;base64,' + base64String;
}

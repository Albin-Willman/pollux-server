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


function showToast(toast) {
    Android.showToast(toast);
} 

function requestImage(){
	Android.requestImage();
}

function addImgBase64(base64){
	document.getElementsByTagName("img")[0].src="data:image/jpeg;base64," + base64;
}

var deviceInfoUnformated;

function getDeviceInfo(){
  	deviceInfoUnformated = Android.getDeviceInfo();
  	console.log('Unformated:'  + deviceInfoUnformated);
  	var deviceInfo = JSON.parse(deviceInfoUnformated);
  	console.log(deviceInfo);
	
	for (var key in deviceInfo) {
	  if (deviceInfo.hasOwnProperty(key)) {
	    var val = deviceInfo[key];
	    appendChild(key, val);
	  }
	}
 }

 function appendChild(infoType, value){
 	var deviceList = document.getElementById("deviceInfoList");
  	var listElement = document.createElement('li');
  	listElement.appendChild(document.createTextNode(infoType + ': ' + value));
  	deviceList.appendChild(listElement);
 }

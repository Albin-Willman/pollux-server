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




var PolluxDevice = function() {
  this.device = null;
  if (typeof Android !== 'undefined') {
    console.log('Running on a native Android device.');
    return TbAndroidAdapter;
  } else {
    console.log('Not running on native device.');
    return TbWebInterface;
  }
};


var TbAndroidAdapter = function() {
  this.client = Android;

  this.showToast = function(msg) {
    client.showToast(msg);
  };

  this.requestImage = function(){
  	client.requestImage();
  };

  this.showDeviceInfo = function(){
  	var deviceInfo = client.showDeviceInfo();

  }
};


function showToast(toast) {
    device.showToast(toast);
} 	

var device = PolluxDevice();
device.showToast('Hello native toaster!'); // Will show toast on both Android, iOS and Web
// device.showDeviceInfo();


var TbWebInterface = function() {
  this.webToast = function(msg) {
    alert(msg);
  };

  this.requestImage = function(){
  	alert("Not supported yet");
  };
  this.showDeviceInfo = function(){
  	alert("Not supported yet");
  };

};



function requestImage(){
	device.requestImage();
}

function addImgBase64(base64){
	document.getElementsByTagName("img")[0].src="data:image/jpeg;base64," + base64;
}
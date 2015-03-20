
var PhoneGapDeviceAdapter = function() {
  this.deviceType = 'phonegap';

  this.requestCamera = function() {
    bridge.requestCamera();
  };

  this.requestImage = function(){
    bridge.requestImage();
  };

  this.getGeoLocation = function() {
    bridge.getGeolocation();
  };
  return this;
};

var WebDeviceAdapter = function() {
  this.deviceType = 'web';

  this.requestCamera = function() {
    alert('Not supported yet');
  };

  this.requestImage = function(){
    alert('Not supported yet');
  };

  this.getGeoLocation = function(callback) {
    alert('Not supported yet');
    // navigator.geolocation.getCurrentPosition(function(geoLocation){
    //   callback(JSON.stringify(geoLocation.coords));
    // });
  };
  return this;
};

// Called when running on PhoneGap
function setPhoneGapDevice(){
  PolluxDevice = new PhoneGapDeviceAdapter();
  console.log("web client, device: device set to PhoneGapDevice");
  
  //show right styling on the blog 
  $("#take-image-button").css("display","block");
}

var PolluxDevice = new WebDeviceAdapter(); // PolluxDevice defaults to WebDeviceAdapter
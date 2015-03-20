
var PhoneGapDeviceAdapter = function() {
  this.deviceType = 'phonegap';

  this.requestImage = function() {
    bridge.requestImage();
  };

  this.getGeoLocation = function() {
    bridge.requestGeolocation();
  }
  return this;
};

var WebDeviceAdapter = function() {
  this.deviceType = 'web';

  this.requestImage = function() {
    alert('Not supported yet');
  };

  this.getGeoLocation = function(callback) {
    navigator.geolocation.getCurrentPosition(function(geoLocation){
      callback(JSON.stringify(geoLocation.coords));
    });
  };
  return this;
};

// Called when running on PhoneGap
function setPhoneGapDevice(){
  PolluxDevice = new PhoneGapDeviceAdapter();
  console.log("web client, device: device set to PhoneGapDevice");
}

var PolluxDevice = new WebDeviceAdapter(); // PolluxDevice defaults to WebDeviceAdapter
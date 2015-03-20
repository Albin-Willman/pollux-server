
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
  //show right styling on the blog 
  $("#image-webclient").css("display","none");
  $("#image-native-app").css("display","block");
  $("#location-webclient").css("display","none");
  $("#location-native-app").css("display","block");

  console.log("web client, device: device set to PhoneGapDevice");
}

var PolluxDevice = new WebDeviceAdapter(); // PolluxDevice defaults to WebDeviceAdapter
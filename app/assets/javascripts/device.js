// Android adapter

var Pollux = function() {
  this.base64StringToImgSrc = function(base64String) {
    return 'data:image/jpeg;base64,' + base64String;
  };
};

var PhoneGapDeviceAdapter = function() {
  this.deviceType = 'PhoneGap';

  this.showToast = function(msg) {
    alert("not supported");
  };

  this.requestImage = function() {
    bridge.requestImage()
  };

  this.showDeviceInfo = function() {
    alert("not supported");
  };

  this.getGeoLocation = function() {
    alert("not supported");
  }
  this.discoverBluetoothDevices = function() {
    alert("not supported");
  }
  return this;
};

var WebDeviceAdapter = function() {
  this.deviceType = 'web';

  this.showToast = function(msg) {
    alert(msg);
  };

  this.requestImage = function() {
    alert('Not supported yet');
  };

  this.getGeoLocation = function(callback) {
    navigator.geolocation.getCurrentPosition(function(geoLocation){
      callback(JSON.stringify(geoLocation.coords));
    });
  };
  this.discoverBluetoothDevices = function() {
    alert('Not supported');
  }

  this.showDeviceInfo = function() {
    return showDeviceInfo(JSON.stringify({
      name :         navigator.userAgent,
      bluetooth:     false,
      camera:        false,
      accelerometer: false
    }));
  };

  return this;
};

function setPhoneGapDevice(){
  PolluxDevice = new PhoneGapDeviceAdapter();
}

var PolluxDevice = new WebDeviceAdapter();

// Android adapter

var Pollux = function() {
  this.base64StringToImgSrc = function(base64String) {
    return 'data:image/jpeg;base64,' + base64String;
  };
};

var PolluxDeviceFactory = function() {
  this.device = null;

  if (typeof Android !== 'undefined') {
    console.log('Running on a native Android device.');
    device = new AndroidDeviceAdapter();
  } else {
    console.log('Not running on native device.');
    device = new WebDeviceAdapter();
  }
  return device;
};

var AndroidDeviceAdapter = function() {
  this.client = Android;
  this.deviceType = 'android';

  this.showToast = function(msg) {
    client.showToast(msg);
  };

  this.requestImage = function() {
    client.requestImage();
  };

  this.showDeviceInfo = function() {
    var deviceInfo = client.getDeviceInfo();
  };

  this.getGeoLocation = function() {
    return '{ error: "Not implemented yet!" }'
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

  this.showDeviceInfo = function() {
    return JSON.stringify({
      name :         navigator.userAgent,
      bluetooth:     false,
      camera:        false,
      accelerometer: false
    });
  };

  return this;
};

var PolluxDevice = new PolluxDeviceFactory();
console.log('Device: '      + PolluxDevice.deviceType);
console.log('Device info: ' + PolluxDevice.showDeviceInfo())

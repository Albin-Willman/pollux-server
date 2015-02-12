// Android adapter
var PolluxAndroidAdapter = function() {
  this.client = Android;

  this.showToast = function(msg) {
    client.showToast(msg);
  };
};

// Ios adapter
var PolluxIosAdapter = function() {
  this.client = NSWebInterface;

  this.showToast = function(msg) {
    client.NSbottomNotifyDrawerShow(msg);
  };
};

// TbWebInterface somewhat mimics the functions of a
// native device such as android or iOS
var TbWebInterface = function() {
  this.webToast = function(msg) {
    alert(msg);
  };
};

// Web adapter
var PolluxWebAdapter = function() {
  this.client = TbWebInterface;

  this.showToast = function(msg) {
    return client.webToast(msg);
  };

}

// PolluxDevice interface
var PolluxDevice = function() {
  this.device = null;

  if (typeof Android !== 'undefined') {
    console.log('Running on a native Android device.');
    device = TbAndroidAdapter;
  } else if (typeof NSWebInterface !== 'undefined') {
    console.log('Running on a native iOS device.');
    device = TbIosAdapter;
  } else {
    console.log('Not running on native device.');
    device = TbWebInterface;
  }
};

var device = new PolluxDevice().device;
device.showToast('Hello native toaster!'); // Will show toast on both Android, iOS and Web

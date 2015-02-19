// Android adapter

var PolluxDevice = function() {
  this.device = null;
  if (typeof Android !== 'undefined') {
    console.log('Running on a native Android device.');
    device = TbAndroidAdapter;
  } else {
    console.log('Not running on native device.');
    device = TbWebInterface;
  }
  return device;
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


var device = PolluxDevice();
console.log("Device:" + device);
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

function showToast(toast) {
    device.showToast(toast);
}

function requestImage(){
 device.requestImage();
}

function addImgBase64(base64){
 document.getElementsByTagName("img")[0].src="data:image/jpeg;base64," + base64;
}
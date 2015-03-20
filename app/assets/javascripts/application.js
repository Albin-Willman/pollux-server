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

$(document).ready(function() {
  receiver.addMessageListener();
  
  $("#take-image-button-native-app").on('click', function(e) {
    e.preventDefault();
    // PolluxDevice.requestImage();
  });



  $("#upload-image-button-native-app").on('click', function(e) {
    e.preventDefault();
    //not implemented yet
    // PolluxDevice.uploadImage();
  });

  
  $("#button-add-location").on('click', function(e) {
    e.preventDefault();
    // PolluxDevice.getGeolocation();
    //not implemented yet
    // PolluxDevice.uploadImage();
  });
});

function addImgBase64(base64) {
  document.getElementsByTagName('img')[0].src = base64StringToImgSrc(base64);
}

function base64StringToImgSrc (base64String) {
    return 'data:image/jpeg;base64,' + base64String;
}



// To be deleted
/*function showPairedBluetoothDevices(pairedBluetoothDevices){
  addJSONStringToList(pairedBluetoothDevices, "bluetoothPairedList");
}
function foundBluetoothDevices(foundBluetoothDevice){
  addJSONStringToList(foundBluetoothDevice, "bluetoothDeviceList");
}
function showDeviceInfo(deviceInfo) {
  addJSONStringToList(deviceInfo, "deviceInfoList");
}
function addJSONStringToList(aJSONString, id){
  var aJSON = JSON.parse(aJSONString);
  
  var createListElement = function(infoType, value, listId) {
    var list  = document.getElementById(listId);
    var listElement = document.createElement('li');
    listElement.appendChild(document.createTextNode(infoType + ': ' + value));
    list.appendChild(listElement);
  }
  for (var key in aJSON) {
    if (aJSON.hasOwnProperty(key)) {
      var val = aJSON[key];
      createListElement(key, val, id);
    }
  } 
}*/
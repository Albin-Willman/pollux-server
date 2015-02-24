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
  $('#js-toaster').on('click', function(e) {
    e.preventDefault();
    PolluxDevice.showToast("Hello world! I'm a web client");
  });

  $('#js-request-image').on('click', function(e) {
    e.preventDefault();
    PolluxDevice.requestImage();
  });

  $('#js-device-info').on('click', function(e) {
    e.preventDefault();
    // getDeviceInfo();
    mockGetDeviceInfo();
  });
  $('#js-bluetooth-devices').on('click', function(e) {
    e.preventDefault();
    // PolluxDevice.discoverBluetoothDevices();
    Android.discoverBluetoothDevices();
  });
  $('#js-bluetooth-paired').on('click', function(e) {
    e.preventDefault();
    // PolluxDevice.discoverBluetoothDevices();
    Android.getPairedBluetoothDevices();
  });
  $('#js-hard-calculation').on('click', function(e) {
    e.preventDefault();
    // PolluxDevice.discoverBluetoothDevices();
    hardCalculation("button 1");
  });
  $('#js-hard-calculation-2').on('click', function(e) {
    e.preventDefault();
    // PolluxDevice.discoverBluetoothDevices();
    hardCalculation("button 2");
  });
  $('#js-android-log').on('click', function(e) {
    e.preventDefault();
    // PolluxDevice.discoverBluetoothDevices();
    androidLog();
  });
});

var timeStamp1;
var timeStamp2;

function hardCalculation(button){
  if (button === "button 1") {
    timeStamp1 = Date.now();
    Android.sleepFiveSecAndLog();
    // console.log((Date.now() - timeStamp1) / 1000);
  } else if(button === "button 2"){
    console.log(button + " button 2 clicked");
    timeStamp2 = Date.now();
    console.log(button + " The time between the button was clicked: " + (timeStamp2-timeStamp1));
    Android.sleepFiveSecAndLog();
    console.log(button + " is this appr 5 sec?: " +  ((Date.now() - timeStamp2) / 1000));
  } else{
    console.log("wrong button pressed yaaaw");  
  }
}
function androidLog(){
  Android.log();
  console.log((Date.now() - timeStamp1)/1000);
}

function showPairedBluetoothDevices(pairedBluetoothDevices){
  addJSONStringToList(pairedBluetoothDevices, "bluetoothPairedList");
}

function mockGetDeviceInfo() {
  addJSONStringToList(Android.getDeviceInfo(), "deviceInfoList");
}

function foundBluetoothDevices(foundBluetoothDevice){
	addJSONStringToList(foundBluetoothDevice, "bluetoothDeviceList");
}

function addJSONStringToList(aJSONString, id){
	var aJSON = JSON.parse(aJSONString);
	for (var key in aJSON) {
    if (aJSON.hasOwnProperty(key)) {
      var val = aJSON[key];
      createListElement(key, val, id);
    }
  }	
}


function addImgBase64(base64) {
  document.getElementsByTagName('img')[0].src = Pollux.base64StringToImgSrc(base64);
}

function getDeviceInfo() {
  var deviceInfoUnformated = PolluxDevice.showDeviceInfo();
  var deviceInfo = JSON.parse(deviceInfoUnformated);

  console.log('Unformated: '  + deviceInfoUnformated);
  console.log(deviceInfo);

  for (var key in deviceInfo) {
    if (deviceInfo.hasOwnProperty(key)) {
      var val = deviceInfo[key];
      createListElement(key, val, "deviceInfoList");
    }
  }
}

function createListElement(infoType, value, listId) {
  var list  = document.getElementById(listId);
  var listElement = document.createElement('li');
  listElement.appendChild(document.createTextNode(infoType + ': ' + value));
  list.appendChild(listElement);
}

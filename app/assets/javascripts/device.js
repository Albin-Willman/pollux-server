(function (window) {
  'use strict';

  var adapterCallback = function(context, callback) {
    if (typeof callback === 'function') {
      callback(context);
    }
  };

  var executeFunctionByName = function(functionName, context /*, args */) {
    var args       = [].slice.call(arguments).splice(2);
    var namespaces = functionName.split('.');
    var func       = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }
    return context[func].apply(this, args);
  }

  var debug = function(msg) {
    if (typeof console == 'undefined' || typeof console.log == 'undefined') {
      return;
    }

    if (typeof msg !== 'string' && typeof JSON !== 'undefined') {
      msg = JSON.stringify(msg);
    }

    console.log('DEBUG: ' + msg);
  };

  var PolluxDeviceFactory = function() {
    var device = null;

    if (typeof Android !== 'undefined') {
      debug('Running on a native Android device.');
      device = new AndroidDeviceAdapter();
    } else {
      debug('Running in webbrowser');
      device = new WebDeviceAdapter();
    }

    return device;
  };

  var AndroidDeviceAdapter = function(callback) {
    var self        = this;
    self.client     = Android;
    self.deviceType = 'android';

    self.showToast = function(msg) {
      self.client.showToast(msg);
    };

    self.requestCamera = function(callback) {
      self.client.requestCamera(callback);
    };

    self.requestImage = function(callback) {
      self.client.requestImage(callback);
    };

    self.showDeviceInfo = function() {
      showDeviceInfo(self.client.getDeviceInfo());
    };

    self.getGeoLocation = function(callback) {
      self.client.getGeolocation(callback);
    };

    self.discoverBluetoothDevices = function() {
      self.client.discoverBluetoothDevices();
    };

    adapterCallback(self, callback);
    return self;
  };

  var PhoneGapDeviceAdapter = function(callback) {
    var self        = this;
    self.deviceType = 'phonegap';
    self.phonegap   = window.parent;

    self.requestCamera = function(callbackName) {
      debug('webclient, bridge: requestCamera');
      self.send('camera', callbackName);
    };

    self.requestImage = function(callbackName) {
      debug('webclient, bridge: requestImage');
      self.send('image', callbackName);
    };

    self.getGeoLocation = function(callbackName) {
      debug('webclient, bridge: getGeolocation');
      self.send('geolocation', callbackName);
    };

    self.deviceCallback = function(data, callbackName) {
      executeFunctionByName(callbackName, window, data);
    };

    self.send = function(requestType, callbackName) {
      var jsonRequest = JSON.stringify({
        type:         requestType,
        callbackName: callbackName
      });
      self.phonegap.postMessage(jsonRequest, 'file://');
    };

    adapterCallback(self, callback);
    return self;
  };

  var WebDeviceAdapter = function(callback) {
    var self        = this;
    self.deviceType = 'web';

    navigator.getUserMedia = (navigator.getUserMedia       ||
                              navigator.webkitGetUserMedia ||
                              navigator.mozGetUserMedia    ||
                              navigator.msGetUserMedia);

    self.requestImage = function() {
      alert('Not supported yet');
    };

    self.requestCamera = function(callbackName) {
      var id      = 'captured-image-canvas';
      var canvas  = document.querySelector(id);
      var body    = null;
      var element = null;
      var ctx     = null;

      if (canvas === null) {
        body   = document.querySelector('body');
        canvas = document.createElement('canvas');
        canvas.id            = id;
        canvas.style.display = 'none';
        body.appendChild(canvas);
      }
      ctx = canvas.getContext('2d');

      var takePicture = function(video) {
        var id      = 'capture-from-video';
        var overlay = '<a href="#" class="video-overlay" id="' + id + '">Capture</a>';

        $(video).after(overlay);
        $('#' + id).click(function(e) {
          e.preventDefault();
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          // "image/webp" works in Chrome, other browsers will fall back to image/png.
          executeFunctionByName(callbackName, window, canvas.toDataURL('image/webp'));
        });
      };

      self.streamVideo(function(src, stream) {
        var video = document.querySelector('#captured-video');
        video.src = src;
        video.play();

        takePicture(video);
      });
    };

    self.streamVideo = function(callback) {
      if (navigator.getUserMedia) {
        navigator.getUserMedia(
          // constraints
          {
            video: true,
            audio: false
          },
          // successCallback
          function(stream) {
            var vendorUrl = window.URL || window.webkitURL;
            var src       = vendorUrl.createObjectURL(stream);
            callback(src, stream);
          },
          // errorCallback
          function(err) {
            debug('The following error occured: ' + err);
          }
        );
      } else {
         debug('getUserMedia not supported');
      }
    };

    self.getGeoLocation = function(callbackName) {
      navigator.geolocation.getCurrentPosition(function(geoLocation){
        // callback(JSON.stringify(geoLocation.coords));
        // callback(geoLocation.coords);
        self.deviceCallback(geolocation.coords, callbackName);
      });
    };

    self.deviceCallback = function(data, callbackName) {
      executeFunctionByName(callbackName, window, data);
    };

    adapterCallback(self, callback);
    return self;
  };

  var Pollux = function(device) {
    var self    = this;
    self.device = null;

     // Called when running on PhoneGap
    self.setDevice = function(deviceName, callback) {
      if (deviceName === 'phonegap') {
        self.device = new PhoneGapDeviceAdapter(callback);
        debug('web client, device: set to PhoneGapDevice');
      } else if (deviceName === 'web') {
        self.device = new WebDeviceAdapter(callback);
        debug('web client, device: set to WebDevice');
      } else if (deviceName === 'android') {
        self.device = new AndroidDeviceAdapter(callback);
        debug('web client, device: set to AndroidDevice');
      }
      return self.device;
    };

    if (device === undefined) {
      self.device = new PolluxDeviceFactory();
    } else {
      self.device = self.setDevice(device);
    };

    return self;
  };

  window.Pollux = new Pollux();
}(window));

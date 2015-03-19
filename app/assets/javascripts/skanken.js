window.addEventListener('message', function(e) {
  var message = e.data;
  $("#header").append(message);
});
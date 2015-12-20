$(document).ready(function() {
  var now = new Date();
  var timeNow = (now.getHours() + ':' + (('0' + now.getMinutes()).slice(-2)).toString());

  document.getElementById('time').innerHTML = timeNow;
  
   console.log(now.getHours() + ':' + ('0' + now.getMinutes()).slice(-2));
  $('#btn').click(function() {
    $('#gif').toggleClass("hidden");
  })
})

$(document).ready(function() {
	
	navigator.geolocation.getCurrentPosition(complete, unknown);

function unknown() {
$('[error]').text("That's weird! We couldn't find you!");
}

function complete(position) {
      loadWeather(position.coords.latitude+','+position.coords.longitude);
  }
})
function loadWeather(location, woeid) {
	$.simpleWeather({
    location: 'location',
    woeid: 'woeid',
    unit: 'f',
    success: function(weather) {
      temp = weather.temp+'&deg;'+weather.units.temp;
      city = weather.city+', '+weather.region;
  
      $("#temp").html(temp);
      $("#city").html(city);
    },
    error: function(error) {
      $("#temp").html('<p>'+error+'</p>');
    }
  });
}
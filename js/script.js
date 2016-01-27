$(document).ready(function() {

    getLocation();

})

function getLocation() {
    var location = "";
    var zip = "";
    $.get("http://ipinfo.io", function(response) {
        location = response.city + ", " + response.region;
        zip = response.postal;
    }, "jsonp");
    loadWeather(location, zip);
}

function loadWeather(location, zip) {
    $.simpleWeather({
        zipcode: "",
        woeid: "2357536",
        location: "",
        unit: 'f',
        success: function(weather) {
            temp = weather.temp + '&deg;' + weather.units.temp;
            city = weather.city + ', ' + weather.region;
            icon = '<img src="' + weather.image + '">';
            humidity = '<center>Humidity <br>' + weather.humidity + '%</center>';
            description = weather.currently;
            wind = '<center>Wind <br>' + weather.wind.direction + ' ' + weather.wind.speed + ' ' + weather.units.speed + '</center>';
            lowHigh = 'L ' + weather.low + '  H ' + weather.high;

            $("#temp").html(temp);
            $("#city").html(city);
            $("#icon").html(icon);
            $("#humid").html(humidity);
            $("#descrip").html(description);
            $("#wind").html(wind);
            $("#lowHigh").html(lowHigh);

            forecast = '';
            for (i = 1; i < 5; i++) {
                forecast += '<td><center><img src="' + weather.forecast[i].thumbnail + '"><br><b>' + weather.forecast[i].high + '</b><br>' + weather.forecast[i].low + '<br>' + weather.forecast[i].day + '</center></td>';
            }
            $("#daily").html(forecast);
            $('td').show();
        },
        error: function(error) {
            $("#city").html('<p>Error</p>');
            $('td').show();

        }
    });
}

$(document).ready(function () {


    $('#btn').click(function () {
        var city = $('.inputCity').val();
        alert("Ciudad de " + city);
        const apiKey = 'eabab65e54b94dd09c0223613251109';
        const url = https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=es;


        $.getJSON(url, function (data) {
            console.log(data)
            var htmlClima = "<p>" + data.location.name + "</p>";
            htmlClima  += "<p>" + data.current.temp_c + "°C</p>";
            htmlClima  += "<img src='" + data.current.condition.icon + "'>";
            htmlClima  += "<p>" + data.current.condition.text + "</p>";
            htmlClima  += "<p>Humedad: " + data.current.humidity + "%</p>";
            htmlClima  += "<p>Viento: " + data.current.wind_kph + " km/h</p>";
            $("#container").html(htmlClima);
            console.log(htmlClima);

        })
    })
});
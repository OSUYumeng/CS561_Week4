"use strict"

var express = require('express')
var app = express()

app.listen(3000)
console.log('Node.js Express server id running on port 3000...')

app.get('/data/2.5/weather', get_weather)

function get_weather(request, response) {
    response.json({
        "coord": {
            "lon": -123.262,
            "lat": 44.5646
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 288.81,
            "feels_like": 288.7,
            "temp_min": 287.25,
            "temp_max": 290.98,
            "pressure": 1016,
            "humidity": 87
        },
        "visibility": 10000,
        "wind": {
            "speed": 0,
            "deg": 0
        },
        "clouds": {
            "all": 100
        },
        "dt": 1664422281,
        "sys": {
            "type": 2,
            "id": 2040223,
            "country": "US",
            "sunrise": 1664374040,
            "sunset": 1664416792
        },
        "timezone": -25200,
        "id": 5720727,
        "name": "Corvallis",
        "cod": 200
    })
}

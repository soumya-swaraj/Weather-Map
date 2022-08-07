const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const { DateTime } = require('luxon');

const formatToLocalTime = (secs, zone, format) => {
    return DateTime.fromSeconds(secs).setZone(zone).toFormat(format)
}

const getWeatherData = async (infoType, searchParams) => {
    const url = new URL(`${BASE_URL}/${infoType}`);
    url.search = new URLSearchParams({ ...searchParams, appid: `${process.env.REACT_APP_API_KEY}` });
    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
}


const formatTheWeatherData = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name, dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data;

    const { main: details, icon } = weather[0];

    return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, weather, details, icon, speed };
}

const formatForecastWeather = async (data) => {
    let { timezone, daily, hourly } = data;
    daily = daily.slice(1, 6).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon

        };
    });

    hourly = hourly.slice(1, 6).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon

        };
    });
    return { timezone, daily, hourly };
}

const getFormattedWeatherData = async (infoType = 'weather', searchParams) => {
    const data = await getWeatherData(infoType, searchParams);
    const formattedWeather = formatTheWeatherData(data);

    const { lat, lon } = formattedWeather;

    const data1 = await getWeatherData('onecall', { lat, lon, exclude: 'current,minutely,alerts', units: searchParams.units })
    const formattedForecastWeather = await formatForecastWeather(data1);

    return { ...formattedWeather, ...formattedForecastWeather }

}

const iconUrlFromCode = (code) => {
    return `https://openweathermap.org/img/wn/${code}@2x.png`;
}

export { getFormattedWeatherData, iconUrlFromCode, formatToLocalTime };
const API_KEY = "5c8378614df918913aa54fc29c3ffc60";
const makeIconURL = (iconID) => `https://openweathermap.org/img/wn/${iconID}@2x.png`

const getFormattedWeatherData = async (city, units = "metric") => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

    const {
        weather, 
        main: {temp, feels_like, temp_min, temp_max, humidity, pressure},
        wind: {speed},
        sys: {country},
        name,
    } = data;

    const {description, icon} = weather[0];

    return {
        description, iconURL : makeIconURL(icon), temp, feels_like, temp_min, temp_max, humidity, speed, country, name, pressure, description}
};

export { getFormattedWeatherData };
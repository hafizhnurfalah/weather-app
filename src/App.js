import simpanasbgt from "./assets/simpanasbgt.jpg";
import simsaljubgt from "./assets/simdinginbgt.jpg";
import Descriptions from "./components/Descriptions";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherServices";

function App() {
  const [city, setCity] = useState("Paris");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(simpanasbgt)

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);

      const treshold = units === 'metric' ? 20 : 60;
      if (data.temp <= treshold) setBg(simsaljubgt);
      else setBg(simpanasbgt);
    };
    
    fetchWeatherData();

  }, [units, city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    
    const isCelcius = currentUnit === "C";
    button.innerText = isCelcius ? '°F' : '°C';
    setUnits(isCelcius ? "metric" : "imperial");
  }

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value)
      e.currentTarget.blur();
    }
  }

  return (
    <div className='app' style={{backgroundImage: `url(${bg})`}}>
      <div className='overlay'>
        {weather && (
          <div className='container'>
          <div className='section section__inputs'>
            <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder='Enter City Name'/>
            <button onClick={(e) => handleUnitsClick(e)}>°F</button>
          </div>
          <div className='section section__temperature'>
            <div className='icon'>
              <h3>{`${weather.name}, ${weather.country}`}</h3>
              <img src="https://openweathermap.org/img/wn/10d@2x.png"/>
              <h3>{weather.description}</h3>
            </div>
            <div className='temperature'>
              <h1>{`${weather.temp.toFixed()} °${units === 'metric' ? 'C' : 'F'}`}</h1>
            </div>
          </div>

          <Descriptions weather={weather} units={units} />
        </div>
        )
        }
      </div>
      <footer className="footer">
        &copy;2023. <b> Abdu Hafizh</b>
      </footer>
    </div>
  );
}

export default App;

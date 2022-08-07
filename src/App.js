import TopBrandBar from './components/TopBrandBar'
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import { getFormattedWeatherData } from './services/weatherService'
import { useEffect, useState } from 'react';

function App() {


  const [query, setQuery] = useState({ q: "" });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  const onStartUpAutoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      })
    }
  }


  useEffect(onStartUpAutoLocation, [])

  useEffect(() => {
    getFormattedWeatherData('weather', { ...query, units }).then((data) => {
      setWeather(data);
    })
  }, [query, units])

  return (
    <div className='min-h-screen px-5 bg-gradient-to-br from-cyan-700 to-blue-700'>
      <div className='backgroundImgDiv'>
        <div className="mx-auto max-w-screen-md py-5 px-32  h-fit">
          <TopBrandBar />
          <Inputs query={query} setWeather={setWeather} setQuery={setQuery} setUnits={setUnits} />
          {weather &&
            <div>
              <TimeAndLocation weather={weather} />
              <TemperatureAndDetails weather={weather} />
              <Forecast items={weather.hourly} title="hourly forecast" />
              <Forecast items={weather.daily} title="daily forecast" />
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
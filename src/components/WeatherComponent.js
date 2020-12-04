import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../redux";
import WeatherCard from "./WeatherCard";

function WeatherComponent({ fetchWeather, weatherData }) {
  const [city, setCity] = useState("");
  console.log(weatherData);
  return (
    <div className="container">
      <div className="App">
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <button onClick={() => fetchWeather(city)}>Get Forecast</button>
      </div>
      {weatherData.loading ? (
        <div class="lds-roller"><div></div><div></div><div></div><div></div></div>
      ) : weatherData.weather_data.cod === 200 ? (
        <WeatherCard />
      ) : weatherData.error ? (
        <div className="error">{weatherData.error}</div>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    weatherData: state.weather,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeather: (city) => dispatch(fetchWeather(city)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherComponent);

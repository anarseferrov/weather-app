import React from "react";
import { connect } from "react-redux";

function WeatherCard({ weatherData }) {
  return (
    <div className="weather-card">
      <div className="card-header">
        <div className="city-info">
          <span className="city-name">{weatherData.name}</span>,
          <span className="country-name">{weatherData.sys.country}</span>
        </div>
        <div className="icon">
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          ></img>
        </div>
        <h5>{weatherData.weather[0].description}</h5>
        <div className="temp">
          {Math.round(weatherData.main.temp - 273)}
          <sup>o</sup>
        </div>
        <div className="small-temp">
          {Math.round(weatherData.main.feels_like) - 273}
          <sup>o</sup>
        </div>
      </div>
      <div className="card-footer">
        <span>H {weatherData.main.humidity}%</span>
        <span>Wind {weatherData.wind.speed} MPH</span>
        <span>{weatherData.main.pressure} ATM</span>
        <span>Visibility {weatherData.visibility} M</span>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    weatherData: state.weather.weather_data,
  };
};

export default connect(mapStateToProps, null)(WeatherCard);

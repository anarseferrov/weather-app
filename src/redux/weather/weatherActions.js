import axios from "axios";
import {
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
} from "./weatherTypes";

export const fetchWeatherRequest = () => {
  return {
    type: FETCH_WEATHER_REQUEST,
  };
};

export const fetchWeatherSuccess = (weather_data) => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: weather_data,
  };
};

export const fetchWeatherFailure = (error) => {
  return {
    type: FETCH_WEATHER_FAILURE,
    payload: error,
  };
};

//don't share your api key!!!
const API_KEY = '3d849daa77fc5e881348707889c4a51d'

export const fetchWeather = (city) => {
  return (dispatch) => {
    dispatch(fetchWeatherRequest());
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then((response) => {
        const weather_data = response.data;
        dispatch(fetchWeatherSuccess(weather_data));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchWeatherFailure(errorMessage));
      });
  };
};

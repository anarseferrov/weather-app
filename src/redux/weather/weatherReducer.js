const {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} = require("./weatherTypes");

const initialState = {
  loading: false,
  weather_data: [],
  error: "",
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        loading: false,
        weather_data: action.payload,
        error: "",
      };
    case FETCH_WEATHER_FAILURE:
      return {
        loading: false,
        weather_data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;

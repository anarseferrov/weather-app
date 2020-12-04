import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import WeatherComponent from "./components/WeatherComponent";

function App() {
  return (
    <Provider store={store}>
      <div>
        <nav className="header">
          <h1>React Redux Weather App</h1>
        </nav>
        <WeatherComponent />
      </div>
    </Provider>
  );
}

export default App;

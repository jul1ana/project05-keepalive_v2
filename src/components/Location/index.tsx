import React from "react";
import {ReactComponent as Temp} from "../../assets/temp.svg"
import * as C from "./styles";

class Location extends React.Component {
  state = {
    lat: undefined,
    lon: undefined,
    city: undefined,
    state: undefined,
    temperatureC: undefined,
    temperatureF: undefined,
    errorMessage: undefined,
  };
  getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  getWeather = async (lat: number, lon: number) => {
    const api_call = await fetch(
      `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6dfd3286db7896488177f7439e4431e4&units=metric`
    );
    const data = await api_call.json();
    this.setState({
      lat: lat,
      lon: lon,
      city: data.name,
      state: data.name,
      temperatureC: Math.round(data.main.temp),
      temperatureF: Math.round(data.main.temp * 1.8 + 32),
      icon: data.weather[0].icon,
      // sunrise: moment.unix(data.sys.sunrise).format("hh:mm a"),
      // sunset: moment.unix(data.sys.sunset).format("hh:mm a"),
    });
  };
  componentDidMount() {
    this.getPosition()
      .then((position: any) => {
        this.getWeather(position.coords.latitude, position.coords.longitude);
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message });
      });
  }

  render() {
    const { city, temperatureC } = this.state;
    if (city) {
      return (
        <C.Location>
          <p>{city} - SC</p>
          <div>
            <Temp/>
            <h2>{temperatureC}°</h2>
          </div>
        </C.Location>
      );
    } else {
      this.getWeather(-15.7801, -41.9292);
      return(
        <C.Location>
          <p>{city} - DF</p>
          <div>
            <Temp/>
            <h2>{temperatureC}°</h2>
          </div>
        </C.Location>
      );
    }
  }
}
export default Location;
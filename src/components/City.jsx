import React from "react";
import Styles from "./styles/City.module.css";
import Temperature from '../img/Temperature.png'
import Clima from '../img/Clima.png'
import Humedad from '../img/Humedad.png'
import Viento from '../img/Viento.png'
import Nubes from '../img/Nubes.png'
import Latitud from '../img/Latitud.png'

export default function City({ city }) {
    return (
      <div className={Styles.ciudad}>
        <div>
        <h2 className={Styles.title}>{city.name}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
          alt="Img Weather"
          className={Styles.img}
          width={130}
        />
      </div>
        <div className={Styles.text}>
          <div className={Styles.temperature}>
          <img src={Temperature} alt="Temperature" width={32} />
          <p>Temperatura: {city.temp}ºc</p>
          </div>
          <div className={Styles.temperature}>
          <img src={Clima} alt="Temperature" width={32} />
          <p>Clima: {city.weather}</p>
          </div>
          <div className={Styles.temperature}>
          <img src={Viento} alt="Temperature" width={32} />
          <p>Viento: {city.wind} km/h</p>
          </div>
          <div className={Styles.temperature}>
          <img src={Nubes} alt="Temperature" width={32} />
          <p>Nubosidad: {city.clouds}</p>
          </div>
          <div className={Styles.temperature}> 
          <img src={Latitud} alt="Temperature" width={32} />
          <p>Latitud: {city.latitud}º</p>
          </div>
          <div className={Styles.temperature}>
          <img src={Humedad} alt="humidity" width={32} />
          Humedad: {city.humidity}%
        </div>
        </div>
      </div>
  );
}

import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import About from "./components/About";
import City from "./components/City.jsx";
// import Styles from "./App.css";


  


function App() {
  const [cities, setCities] = useState([]);
  const apiKey = "43d8a713252ef0fae58ffd40ab7b6834";

  //=========================================
  // TRAER LA CARD CON LOS DATOS DEL CLIMA DE NUESTRA UBICACIÓN
  useEffect(() => {
    // >>>>>>>> LE PEDIMOS PERMISO AL USUARIO PARA ACCEDER A SU UBICACIÓN GEOGRAFICA <<<<<<<<<<<<<<<
    if (navigator.geolocation) {
      //SI ACEPTA, OBTENEMOS SUS COORDENADAS
      const success = function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        function weatherLocation() {
          //LLAMAMOS A LA API PIDIENDOLE LA CIUDAD CON ESAS COORDENADAS Y EXTRAEMOS SUS DATOS PARA LA "CARD"
          fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
          )
            .then((r) => r.json())
            .then((recurso) => {
              if (recurso.main !== undefined) {
                const city = {
                  id: recurso.id,
                  img: recurso.weather[0].icon,
                  weather: recurso.weather[0].main,
                  description: recurso.weather[0].description,
                  min: Math.round(recurso.main.temp_min),
                  max: Math.round(recurso.main.temp_max),
                  temp: recurso.main.temp,
                  feels_like: recurso.main.feels_like,
                  humidity: recurso.main.humidity,
                  wind: recurso.wind.speed,
                  name: recurso.name,
                  country: recurso.sys.country,
                  clouds: recurso.clouds.all,
                  latitud: recurso.coord.lat,
                  longitud: recurso.coord.lon,
                };
                return setCities((oldCities) => [...oldCities, city]); //SI LA CIUDAD EXISTE, ES AGREGADA A NUESTRO ESTADO DE CITIES
              }
            });
        }
        weatherLocation();
      };
      navigator.geolocation.getCurrentPosition(success, function (msg) {
        console.error(msg);
      });
    }
  }, []); //SOLO SE EJECUTARÁ AL RECARGAR LA PÁGINA

  // ========================================


  function onSearch(ciudad) {
    // Hacempos el pedido a la Api
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        // Si la cuidad es valida, entra al if
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            humidity: recurso.main.humidity,
            longitud: recurso.coord.lon,
          };
          // Agregamos la nueva cuidad buscada con las nuevas
          setCities((oldCities) => [...oldCities, ciudad]);
          // Si la ciudad no es valida
        } else {
          alert("La Ciudad no existe");
        }
      });
  }
  // Definimos la funcion onClose que eliminara nuestra Card
  // Utilizamos setCities para modoficar el arreglo de ciodades
  // Y le aplicamos un filter para encontrar el id correspondiente
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((city) => city.id !== id));
  }
  function onFilter(cityId) {
    let city = cities.filter((c) => c.id === parseInt(cityId));
    if (city.length > 0) {
      return city[0];
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
        <Route exact path="/">
          <Cards cities={cities} onClose={onClose} />
        </Route>
        <Route
        exact
        path={"/city/:cityId"}
        render={({ match }) => <City city={onFilter(match.params.cityId)} />}
      />
      <Route exact path="/about">
          <About  />
        </Route>
    </div>
  );
}

export default App;

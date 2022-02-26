import React from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import Styles from "./styles/Cards.module.css";

export default function Cards({ cities, onClose }) {
  if (cities) {
    return (
      <div>
        <div className={Styles.cards}>
          {cities.map((city) => {
            return (
              <Card
                key={city.id}
                max={city.max}
                min={city.min}
                name={city.name}
                img={city.img}
                // Le pasamos el id de la city para que pueda eliminar la correcta
                onClose={() => onClose(city.id)}
                id={city.id}
              />
            );
          })}
        </div>
        <footer className={Styles.content_about}>
          <NavLink to="/about">
            <span className={Styles.about}>About</span>
          </NavLink>
          <div>
          <p className={Styles.title}>&#169; 2022 copyrigth all rigth reserved</p>
          </div>
        </footer>
      </div>
    );
  } else {
    return <div>No cities</div>;
  }
}

import React from "react";
import Styles from "./styles/Card.module.css";
import { NavLink } from "react-router-dom";

export default function Card({ min, max, name, img, onClose, id }) {
  // acá va tu código
  return (
    <div className={Styles.card}>
      <button className={Styles.button} onClick={onClose}>
        X
      </button>
      <div className={Styles.text}>
        {/* Le agregamos el link al name, para que cuando lo oquemos nos de su información */}
        <NavLink to={`/city/${id}`}>
          <h4>{name}</h4>
        </NavLink>

        <div className={Styles.temp}>
          <h6>Máx</h6>
          <p>{max}° </p>

          <h6>Min</h6>
          <p>{min}°</p>
        </div>
      </div>
      <div className={Styles.content_img}>
        <img
          className={Styles.img}
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="Tiempo"
          width={95}
        />
      </div>
    </div>
  );
}

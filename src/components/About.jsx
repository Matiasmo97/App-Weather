import React from "react";
import Styles from "./styles/About.module.css";

export default function About() {
  return (
    <div className={Styles.contenedor}>
      <div className={Styles.title}>
        <h4>Hola!!! Mi nombre es Matias</h4>
      </div>
      <p>
        Estoy estudiando desarrollo Web ya hace un tiempo, la verdad desde chico
        me encantaba la idea de programar, y siempre fue mi sueño, pero aún asi
        nunca se me habia dado la oportunidad de estudiar. Sinceramente me
        termino gustando más de lo que esperaba y mientras mas avanzo mas me
        gusta.
      </p>
      <div className={Styles.redes}>
        <a className={Styles.iconGitHub} href="https://github.com/Matiasmo97">
          <i class="bx bxl-github"></i>
        </a>
        <a className={Styles.iconInstagram} href="https://www.instagram.com/matiasmontini16/">
          <i class="bx bxl-instagram"></i>
        </a>
        <a className={Styles.iconLinkedin} href="https://www.linkedin.com/in/matias-montini-b7b845221">
          <i class="bx bxl-linkedin-square"></i>
        </a>
      </div>
    </div>
  );
}

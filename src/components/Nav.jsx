import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../img/Weather2.png";
import SearchBar from "./SearchBar.jsx";
import Styles from "./styles/Nav.module.css";

function Nav({ onSearch }) {
  return (
    <div className={Styles.nav}>
      <div className={Styles.logo}>
      {/* Envolvemos el logo en un link para usarlo como botón de inicio */}
      <Link to='/'>
        <img className={Styles.img} src={Logo} width={55} alt="Logo"/>
      </Link>
        <h1 className={Styles.title}>Weather</h1>
      </div>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
}

export default Nav;

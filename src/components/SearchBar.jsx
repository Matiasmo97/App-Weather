import React from "react";
import Styles from "./styles/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  function resetearValue(e) {
    // Me guardo el valor del input
    const valInput = document.getElementById("inputCity").value;
    // Ejecutamos la funcion preventDefault para que no se recargue la pagina
    e.preventDefault();
    // Le pasamos a la funcion onSearch el valor que el usuario ingreso en el input
    onSearch(valInput);
    // Vaciamos el input por estetica
    document.getElementById("inputCity").value = "";
  }

  return (
    <div>
      <input
        className={Styles.input}
        id="inputCity"
        type="text"
        placeholder="Ciudad..."
        autoComplete="off"
      />
      <input
        className={Styles.button}
        type="submit"
        value="Agregar"
        onClick={resetearValue}
      />
    </div>
  );
}

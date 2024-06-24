import React, { useState } from 'react';
export default function Ejercicio1() {

  return (
    <div>
      <h2>Ejercicio 1: Lista desplegable</h2>

      <label>Seleccione una fruta: </label>
      <select>
        <option type="apple">Manzana</option>
        <option type ="pera">Pera</option>
        <option type ="orange">Naranja</option>
        <option type ="mandarina">Madarina</option>
      </select>
    </div>
  )
}

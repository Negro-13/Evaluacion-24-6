import React, { useState } from 'react';
export default function Ejercicio2() {
  const [formData, setFromData] = useState({
    Nombre: '',
    Edad: ''
  });
  const handleChange = (event) => {
    const {name, value } = event.target;
    setFromData({
      ...formData,
      [name]: value
    });
  };
  const handleSumbit = () => {

  };
  return (
    <div>
      <h2>Ejercicio 2: Formulario</h2>
      <form onSubmit={/*handleSumbit */} >
      <label>Nombre:</label>
      <input {/*ns si va el tipo de imput */  text} onChange={handleChange}/>
      <label>Edad:</label>
      <input {/* */ Number} onChange={handleChange} ></input>
      <button>Enviar</button>
    </form>
    </div>
  )
}

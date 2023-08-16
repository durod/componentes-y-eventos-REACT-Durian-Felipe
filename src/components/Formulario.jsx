/* eslint-disable react/prop-types */
import React from 'react';

const Formulario = ({ onSubmit, nombre, correo, contraseña, onChange, errores }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={onChange}
        />
        {errores.nombre && <span className="error">{errores.nombre}</span>}
      </div>
      {/* Resto de los campos y validaciones */}
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Formulario;
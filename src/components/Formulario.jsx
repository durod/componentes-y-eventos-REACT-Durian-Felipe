/* eslint-disable react/prop-types */
import React from "react";

const Formulario = ({
  onSubmit,
  nombre,
  correo,
  contraseña,
  onChange,
  errores,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Nombre: </label>
        <input type="text" name="nombre" value={nombre} onChange={onChange} />
        {errores.nombre && <span className="error">{errores.nombre}</span>}

        
          <label>Correo: </label>
          <input
            type="email"
            name="correo"
            value={correo}
            onChange={onchange}
          />
        

        <label>Contraseña: </label>
        <input
          type="password"
          name="contraseña"
          value={contraseña}
          onChange={onchange}
        />
      </div>
      {/* Resto de los campos y validaciones */}
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Formulario;

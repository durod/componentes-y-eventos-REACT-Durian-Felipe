/* eslint-disable react/prop-types */
import React from "react";

const Formulario = ({
  onSubmit,
  nombre,
  correo,
  contraseña,
  confirmaContraseña,
  onChange,
  errores,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>

        <div>
          <label>Nombre: </label>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={onChange}
            placeholder="Nombre"
          />
          {errores.nombre && <span className="error">{errores.nombre}</span>}
        </div>

        <div>
          <label>Correo: </label>
          <input
            type="email"
            name="correo"
            value={correo}
            onChange={onChange}
            placeholder="tuemail@ejemplo.com"
          />
          {errores.correo && <span className="error">{errores.correo}</span>}
        </div>

        <div>
          <label>Contraseña: </label>
          <input
            type="password"
            name="contraseña"
            value={contraseña}
            onChange={onChange}
            placeholder="Contraseña"
          />
          {errores.contraseña && (
            <span className="error">{errores.contraseña}</span>
          )}
        </div>

        <div>
          <label>Confirma tu contraseña: </label>
          <input
            type="password"
            name="confirmaContraseña"
            value={confirmaContraseña}
              onChange={onChange}
            placeholder="Confirma tu contraseña"
          />
          {errores.confirmaContraseña && (
            <span className="error">{errores.confirmaContraseña}</span>
          )}
        </div>
      </div>

      {/* Resto de los campos y validaciones */}
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Formulario;

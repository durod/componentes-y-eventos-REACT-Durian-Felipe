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
      <div className="formulario-container">

        <div >
          
          <input className="estilo-input"
            type="text"
            name="nombre"
            value={nombre}
            onChange={onChange}
            placeholder="Nombre"
          /> <br />
          {errores.nombre && <span className="error">{errores.nombre}</span>}
        </div>

        <div >
          
          <input className="estilo-input"
            type="email"
            name="correo"
            value={correo}
            onChange={onChange}
            placeholder="tuemail@ejemplo.com"
          /><br />
          {errores.correo && <span className="error">{errores.correo}</span>}
        </div>

        <div >
          
          <input  className="estilo-input"
            type="password"
            name="contraseña"
            value={contraseña}
            onChange={onChange}
            placeholder="Contraseña"
          /><br />
          {errores.contraseña && (
            <span className="error">{errores.contraseña}</span>
            
          )}
        </div>

        <div >
          <input className="estilo-input"
            type="password"
            name="confirmaContraseña"
            value={confirmaContraseña}
              onChange={onChange}
            placeholder="Confirma tu contraseña"
          /><br />
          {errores.confirmaContraseña && (
            <span className="error">{errores.confirmaContraseña}</span>
          )}
        </div>
      </div>

      {/* Resto de los campos y validaciones */}
      <button className="button-register"type="submit">Registrarse</button>
    </form>
  );
};

export default Formulario;

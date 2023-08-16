/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Formulario from './Formulario';
import SocialButton from './SocialButton';
import Alert from './Alert';
import '@fortawesome/fontawesome-free/css/all.css';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmaContraseña, setconfirmaContraseña] = useState('');
  const [errores, setErrores] = useState({});
  const [alerta, setAlerta] = useState(null);

  const handlerSubmit = (event) => {
    event.preventDefault();
    const newErrores = {};

    if (!nombre.trim()) {
      newErrores.nombre = 'El nombre es requerido';
    }

    if (!correo.trim()) {
      newErrores.correo = 'El correo es requerido';
    }

    if (!contraseña.trim()) {
      newErrores.contraseña = 'La contraseña es requerida';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(contraseña)) {
      newErrores.contraseña =
        'La contraseña debe tener al menos 8 caracteres, incluyendo una letra minúscula, una letra mayúscula y un número';
    }

    if (contraseña !== confirmaContraseña) {
      newErrores.confirmaContraseña = 'Las contraseñas no coinciden';
    }

    setErrores(newErrores);

    /*if (Object.keys(newErrores).length === 0) {
      setAlerta({ type: 'success', message: 'Formulario enviado' });
      
    }*/
  };

  return (
    <div className="registro-container">
      <h1>Crea una cuenta</h1>
      {alerta && <Alert type={alerta.type} message={alerta.message} />}
      <div className="social-buttons-container">
        <SocialButton
          provider="Google"
          icon={<i className="fab fa-google"></i>} // agregar icono
          onClick={() => alert('Iniciar sesión con Google')}
        />
        <SocialButton
          provider="Facebook"
          icon={<i className="fab fa-facebook"></i>}// agregar icono
          onClick={() => alert('Iniciar sesión con Facebook')}
        />
        <SocialButton
          provider="LinkedIn"
          icon={<i className="fab fa-linkedin"></i>} // agregar icono
          onClick={() => alert('Iniciar sesión con LinkedIn')}
        />
        <h3>O usa tu email para registrarte</h3>
      </div>
      <Formulario
        onSubmit={handlerSubmit}
        nombre={nombre}
        correo={correo}
        contraseña={contraseña}
        confirmaContraseña={ confirmaContraseña}
        onChange={(e) => {
          const { name, value } = e.target;
          if (name === 'nombre') setNombre(value);
          if (name === 'correo') setCorreo(value);
          if (name === 'contraseña') setContraseña(value);
          if (name === 'confirmaContraseña') setconfirmaContraseña(value);
        }}
        errores={errores}
      />
      
    </div>
  );
};

export default Registro;
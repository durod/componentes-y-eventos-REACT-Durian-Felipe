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
      newErrores.nombre = ' Nombre es requerido';
    }

    if (!correo.trim()) {
      newErrores.correo = ' Correo es requerido';
    }

    if (!contraseña.trim()) {
      newErrores.contraseña = 'Contraseña requerida';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(contraseña)) {
      newErrores.contraseña =
        'La contraseña debe tener al menos 8 caracteres, incluyendo una letra minúscula, una letra mayúscula y un número';
    }

    if (contraseña !== confirmaContraseña) {
      newErrores.confirmaContraseña = 'Las contraseñas no coinciden';
    }

    setErrores(newErrores);

    if (Object.keys(newErrores).length === 0) {
      setAlerta({ type: 'success', message: 'Formulario enviado' });      
    } else {
      setAlerta({ type: 'error', message: 'Faltan campos por llenar' });
    
  };
  };

  return (
    <div className="registro-container">
      <h1>Crea una cuenta</h1>      

      <div className="social-buttons-container">

        <div className='social-buttons-container-icons'>
        
        <SocialButton
          provider="Facebook"
          icon={<i className="fab fa-facebook"></i>}
          onClick={() => alert('Iniciar sesión con Facebook')}
        />


        <SocialButton
          provider="Github"
          icon={<i className="fab fa-github"></i>} 
          onClick={() => alert('Iniciar sesión con GitHub')}
        />
        <SocialButton
          provider="LinkedIn"
          icon={<i className="fab fa-linkedin"></i>}
          onClick={() => alert('Iniciar sesión con LinkedIn')}
        />
        </div>

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
      {alerta && (
        <div
          className={`alert ${alerta.type}`}
          style={{
            padding: '10px',
            marginTop: '10px',
            backgroundColor: alerta.type === 'success' ? 'green' : 'red',
            color: 'white',
            textAlign: 'center',
            width: '15rem',
            borderRadius: '20px',
          }}
        >
          {alerta.message}
          <br />
        </div>
      )}
      <br />
    </div>
  );
};

export default Registro;
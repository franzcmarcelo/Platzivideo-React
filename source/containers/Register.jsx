import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions';
import Header from '../components/Header';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.register(form);
    props.history.push('/');
    console.log(form);
  };

  return (
    <>
      <Header isRegister />
      <section className='register'>
        <section className='register__container'>
          <h2>Regístrate</h2>
          <form className='register__container--form' onSubmit={handleSubmit}>
            <input
              name='name'
              className='input'
              type='text'
              placeholder='Nombre'
              onChange={handleInput}
            />
            <input
              name='email'
              className='input'
              type='text'
              placeholder='Correo'
              onChange={handleInput}
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
            />
            {/* FIXME: Para ejecutar el evento onSubmit de nuestro form
                El button tiene que tener type='submit'  */}
            <button type='submit' className='button'>
              Registrarme
            </button>
          </form>
          <Link to='./login'>
            Iniciar sesión
          </Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  register,
};

export default connect(null, mapDispatchToProps)(Register);

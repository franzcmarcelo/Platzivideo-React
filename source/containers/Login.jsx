/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import Header from '../components/Header';

import googleIcon from '../assets/static/icon-google.png';
import twitterIcon from '../assets/static/icon-twitter.png';
import '../assets/styles/components/Login.scss';

const Login = (props) => {

  // El Hook useState nos devuelve:
  // [valor de nuestro estado, fn que nos permite actualizar ese valor]
  // Y recibe como argumento: el valor por defecto de nuestro estado
  const [form, setValuesForm] = useState({
    email: '',
  });

  const handleInput = (event) => {
    // event.target: Hace referencia al elemento que llamo al Event
    // -> <input name='email' className='input type='text' placeholder='Correo'>
    // event.value: valor que se ingresa en cada input
    setValuesForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  // Va a capturara la informacion cuando enviemos nuestro form
  const handleSubmit = (event) => {
    // FIXME: Para formularios, sobre todo en React
    // Para que no se cumpla la forma que tiene html para manejar eventos
    // entro de un form, esto es: cuando le damos al btn submit
    // manda los parametros por url, y eso complica nuestra forma de trabajar
    event.preventDefault();
    console.log(form);
    // Action
    props.loginRequest(form);
    // si se logea, lo redireccionamos al home
    props.history.push('/');
  };

  return (
    <>
      <Header isLogin />
      <section className='login'>
        <section className='login__container'>
          <h2>Inicia sesión</h2>
          <form className='login__container--form' onSubmit={handleSubmit}>
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
            <div className='login__container--remember-me'>
              <label>
                <input type='checkbox' id='cbox1' value='first_checkbox' />
                Recuérdame
              </label>
              <a href='/'>Olvidé mi contraseña</a>
            </div>
            <button className='button' type='submit'>
              Iniciar sesión
            </button>
          </form>

          <section className='login__container--social-media '>
            <div>
              <img src={googleIcon} alt='Google' />
              Inicia sesión con Google
            </div>
            <div>
              <img src={twitterIcon} alt='Twitter' />
              Inicia sesión con Twitter
            </div>
          </section>

          <p className='login__container--register '>
            <span>No tienes ninguna cuenta</span>
            <Link to='./register'>
              Registrate
            </Link>
          </p>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);

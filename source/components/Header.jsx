import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { logoutRequest } from '../actions';

import logo from '../assets/static/logoplatzi.png';
import gravatar from '../utils/gravatar';
import userIcon from '../assets/static/icon-user.png';
import '../assets/styles/components/Header.scss';

const Header = (props) => {
  const { user } = props;

  const { isLogin, isRegister } = props;

  const hasUser = Object.keys(user).length > 0;
  // > [email, passwor] -> true

  const handleLogout = () => {
    // Pasamos un objeto vacio, para reiniciar el estado
    props.logoutRequest({});
  };

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>

          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt='' />}

          {hasUser ?
            <p>{user.email.slice(0, 5).toUpperCase()}</p> :
            <p>Logeate!</p>}

        </div>

        <ul>
          {hasUser ?
            (
              <li>
                <Link to='/'>
                  {user.email.split('@', 1)[0]}
                </Link>
                {/* Al utilizar el tag a, nuestro estado se reinicia
                pq desaparece nuestro avatar */}
                {/* <a href='/'>
                  {user.email.split('@', 1)[0]}
                </a> */}
              </li>
            ) :
            null}

          {hasUser ?
            (
              <li>
                <Link to='/' onClick={handleLogout}>
                  Cerrar Sesión
                </Link>
              </li>
            ) :
            (
              <li>
                <Link to='/login'>
                  Iniciar Sesión
                </Link>
              </li>
            )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

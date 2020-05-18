import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { setFavorite, deleteFavorite } from '../actions';

import '../assets/styles/components/CarouselItem.scss';

import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  // Por props vienen:
  // Un item (obj) de las categorias de video y las action de
  // mapDispatchToProps

  const { id, title, year, contentRating, duration, cover } = props;
  const { inMyList } = props;

  //FIXME:
  // 7. Despachamos las props, mediante los Actions
  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration,
    });
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className='carousel-item'>
      <img
        className='carousel-item__img'
        src={cover}
        alt={title}
      />
      <div className='carousel-item__details'>
        <div>
          {/* transmitimos el id a la url, y ahi es donde vamos a capturar este valor
          para saber cual es el video que corresponde a ese item*/}
          <Link to={`/player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={playIcon}
              alt='Play Icon'
            />
          </Link>

          {/* Validacion de item en mylist (desde Home */}
          {inMyList ?
            (
              <img
                className='carousel-item__details--img'
                src={removeIcon}
                alt='Remove Icon'
                //FIXME:
                // 6. Recibimos un evento y ejecutamos la funcion que
                // emitira el Action respectivo
                onClick={() => handleDeleteFavorite(id)}
              />
            ) :
            (
              <img
                className='carousel-item__details--img'
                src={plusIcon}
                alt='Plus Icon'
                onClick={handleSetFavorite}
              />
            )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

// Creando las validaciones
// Pasar con minuscula propTypes a nuestra funcion
CarouselItem.propTypes = {
  cover: PropTypes.string.isRequired, //obligatorio
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

// FIXME:
// 5. Objeto con las acciones que vamos a ejecutar
// Mediante el type del action, se adentificara su respectivo
// reducer (dentro del store)

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);

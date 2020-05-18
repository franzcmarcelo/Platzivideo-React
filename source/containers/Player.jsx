import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import NotFound from './NotFound';
import '../assets/styles/components/Player.scss';

const Player = (props) => {

  // Sabemos que por Props viene los elementos history, location y match
  //  Esto es greacias a <Route>
  // Entonces, mediante este tambien hay froma de pasar propiedades a nuestras tuas
  // -> player/:id (en routes>App.js)
  // Por ejemplo accedemos a este id mediante match
  console.log(props);
  // > match:
  // isExact: true
  // params: {id: "2"}
  // path: "/player/:id"
  // url: "/player/2"
  // Podemos acceder a id haciendo props.match.parms.id
  const { match } = props;
  const { id } = match.params;

  // Validamos si hay un video que se este ejcutando
  const { playing } = props;
  const hasPlaying = Object.keys(playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ?
    (
      <div className='Player'>
        <video controls autoPlay>
          <source src={playing.source} type='video/mp4' />
        </video>
        <div className='Player-back'>
          <button type='button' onClick={() => props.history.goBack()}>
            Regresar
          </button>
        </div>
      </div>
    ) : <NotFound />;
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);

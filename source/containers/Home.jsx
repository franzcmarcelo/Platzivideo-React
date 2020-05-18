/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { connect } from 'react-redux';

import '../assets/styles/App.scss';

import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';

// Props: forma de comunicar cada componente
// con el resto de la app, similar a parametros
const Home = (props) => {
  // Por porps viene:
  // Las props mapeados del estado en mapStateToProps
  // y otros objetos como history, location, match...

  const { mylist, trends, originals } = props;
  return (
    <>
      <Header />
      <Search isHome />

      {mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {mylist.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
                // Validacion de item en mylist, inMyList=true
                inMyList
              />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title='Originales de PlatziVideo'>
        <Carousel>
          {originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </>
  );
};

// FIXME:
// 4. Mapeamos el estado y retornamos las props que necesitamos
const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

// FIXME:
// 3. Creamos el conector
// Permitiéndonos conectar nuestro Componente
// con los Reducers y el State, que estamos pasando por medio del Provider

export default connect(mapStateToProps, null)(Home);

// connect(mapStateToProps, mapDispatchToProps)
// connect(props, actions)(Home);
// -> mapStateToProps: estado a props
// Recibe el estado, y mapea pasando lo que tenemos en el estado
// a props que vamos a utilizar. Le indica al provider que
// informacion necesitamos del store
// -> mapDispatchToProps: despacha las props fnAction( {props} )
// Objeto con las acciones que vamos a ejecutar
// Mediante el type del action, se adentificara su respectivo
// reducer (dentro del store)
// --> Tanto las props pasados por el estado y las acciones,
// se pasan como props de nuestro Componente

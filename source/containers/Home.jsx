import React from 'react';

import '../assets/styles/App.scss';

import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const Home = () => {
  const initialState = useInitialState(API);

  return initialState.length === 0 ? <h1> Loading API... </h1> : (
    <>
      <Search />

      {/* Haremos la validacion para que, si MI lista esta vacia, no se muestre*/}
      {initialState.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {videos.trends.map((item) => {
              // Pasamos un key solo para identificarlo
              // y todos los elemntos que tenga mi item
              // para usarlos en el Componente CarouselItem
              return <CarouselItem key={item.id} {...item} />;
            })}
          </Carousel>
        </Categories>
      )}

      {/* Mientras que para estas categorias, haremos que iteren c/u de los elementos */}
      <Categories title='Tendencias'>
        <Carousel>
          {initialState.trends.map((item) => {
            return <CarouselItem key={item.id} {...item} />;
          })}
        </Carousel>
      </Categories>

      <Categories title='Originales de PlatziVideo'>
        <Carousel>
          {initialState.trends.map((item) => {
            return <CarouselItem key={item.id} {...item} />;
          })}
        </Carousel>
      </Categories>

    </>
  );
};

export default Home;

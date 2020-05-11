import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? <h1> Loading... </h1> : (
    <div className='App'>
      <Header />
      <Search />

      {/* Haremos la validacion para que, si MI lista esta vacia, no se muestre*/}
      {initialState.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {videos.trends.map((item) => {
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

      <Footer />
    </div>
  );
};

export default App;

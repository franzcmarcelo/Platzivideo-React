import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) =>(
  <div className='App'>
    <Header />
    {/* Permitira empujar el componente segun la ruta que accdemos*/}
    {children}
    <Footer />
  </div>
);

export default Layout;

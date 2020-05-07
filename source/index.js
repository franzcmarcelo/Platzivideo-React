// En este archivo principal añadiremos nuestra
// aplicacion completa y donde la vamos a empujar

import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';

// Utilizamos ReactDOM para pasar nuestro componente
// render() recibe dos parametros
// 1. Nuestro componente
// 2. Donde voy a empujar este componente
ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('app')
);




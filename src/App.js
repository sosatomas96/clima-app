import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const {ciudad, pais} = busqueda;

  const [consultar, guardarConsultar] = useState(false);

  useEffect(() =>{
    console.log(ciudad);
  },[consultar]);

  return (
    <>
      <Header 
        titulo='Clima React App'
      />

      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Formulario 
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                consultarGuardar={guardarConsultar}
              />
            </div>
            <div className='col m6 s12'>
              2
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

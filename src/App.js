import './App.css';
import Mostrar from './Componentes/mostrar';
import Crear from './Componentes/crear';
import Editar from './Componentes/editar';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mostrar/>}/>
        <Route path='/crearusuario' element={<Crear/>}/>
        <Route path='/editarusuario/:id' element={<Editar/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;


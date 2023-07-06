import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {collection, addDoc} from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';
import {async} from '@firebase/util';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


const CrearUsuario = () => {
      //1 declar los hooks

      const [nombre, setNombre] = useState("");
      const [apellido, setApellido] = useState("");
      const [edad, setEdad] = useState();
      const navigate = useNavigate();
  
      //2 referenciamos la bd
  
      const usuariosCollection = collection(db, "usuario");
  
      //3 alerta de creacion
  
  
      //4 declaración de la función de creación
  
      const nuevo = async (e)=>{
          e.preventDefault();
          await addDoc(usuariosCollection, {Nombre: nombre, Apellido: apellido, Edad: edad});
         
          navigate("/");
      }
  
      //5 mostrar al usuario el form
   
    return (
      <div className='container'>
          <div className='row'>
               <div className='col '>
  
               <h1 className='mt-3 '>Crear Usuario Nuevo</h1>
  
               <form onSubmit={nuevo} className='mt-5 '>
                  <div className='mb-4'>
                      <label className='form-label h3 '>Nombre:</label>
                      <input 
                          value={nombre}
                          type="text"
                          className='form-control w-50 m-auto '
                          onChange={(e)=>setNombre(e.target.value)}
                      />
                  </div>
  
                  <div className='mb-4'>
                  <label className='form-label h3 '>Apellido:</label>
                  <input 
                      value={apellido}
                      type="text"
                      className='form-control w-50 m-auto'
                      onChange={(e)=>setApellido(e.target.value)}
                  />
                  </div>
  
                  <div className='mb-4'>
                  <label className='form-label h3 '>Edad:</label>
                  <input 
                      value={edad}
                      type="text"
                      className='form-control w-50 m-auto'
                      onChange={(e)=>setEdad(e.target.value)}
                  />
                  </div>
  
                  <button type="submit" className='btn btn-success btn-lg mt-3'>Agregar</button>
                  <Link to="/" className="btn btn-info btn-lg mt-3">Cancelar</Link>
               </form>
               </div>
          </div>
      </div>
    )
  }
  
  export default CrearUsuario;
  
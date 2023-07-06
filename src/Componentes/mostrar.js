import React, {useState, useEffect} from 'react';
import {collection, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';
import {async} from '@firebase/util';
import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


// or less ideally


const Mostrar = () => {

    //1 configuración de los hook de mostrar
    const usuariosCollection = collection(db, "usuario");

    const [usuarios, setUsuarios] = useState([]);

    //2 referenciar la db de firebase


    //3 creamos la funcionabilidad para mostrar los documentos con asincronismo

    const getUsuarios = async ()=> { 
        const data = await getDocs(usuariosCollection); 
        console.log(data.docs);
 
        setUsuarios(
           data.docs.map((doc)=>({...doc.data(), id:doc.id}))
        ); 
       
    }
    useEffect(()=>{
        getUsuarios();
        
    }, [])
 
    console.log(usuarios);

   //4 declaración función delete para eliminar registros
   
   const deleteUsuario = async (id)=>{
       const usuarioDoc = doc(db, "usuario", id);
       await deleteDoc(usuarioDoc);
       getUsuarios();
   }
    //5 configuración sweetalert


return(
    <div className='container'>
    <div className='row'>
        <div className='col'>
            <div className='d-grid gap-2'>
                <Link to="/crearusuario" className='btn btn-info btn-lg mt-3 mb-4 w-25' >Agregar Usuario Nuevo <i className="fa-solid fa-plus"></i></Link>
            </div>
            <table className='table table-ligth table-hover'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                    </tr>
                </thead>
                <tbody>
                    { usuarios.map((usu)=>(
                        <tr key={usu.id}>
                            <td key={usu.Nombre} >{usu.Nombre || ''}</td>
                            <td key={usu.Apellido} >{usu.Apellido || ''}</td>
                            <td key={usu.Edad} >{usu.Edad || ''} </td>
                            <td>
                            <Link to={`/editarusuario/${usu.id}`} className="btn btn-info btn-lg mt-3">Editar</Link>
                            <button onClick={()=>{deleteUsuario(usu.id)}} className="btn btn-danger btn-lg mt-3">Eliminar</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    </div>
</div>
)


}

export default Mostrar;
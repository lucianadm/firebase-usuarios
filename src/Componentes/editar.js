import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getDoc, doc, updateDoc} from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';
import { dbCollections } from '../firebaseConfig/collections';
import {Link} from 'react-router-dom';
const Editar = () => {

    //1 estado para el form
    const [form, setForm] = useState({
        Nombre: "",
        Apellido:"",
        Edad:""
    });

    const navigate = useNavigate();
    const {id} =useParams();

    //2 función para asignar valores al formulario

    const cambio = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    //3 alerta de guardado

   /* const alertaGuardado = ()=>{
        Swal.fire({
        title: 'Registro modificado y guardado',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
        });
    }*/

    //4 declaramos el función update

    const update = async (e)=>{
        e.preventDefault();
        const usuario = doc(db, dbCollections.Usuarios, id);
        const data = {
            Nombre: form.Nombre,
            Apellido: form.Apellido,
            Edad: form.Edad
        };
        await updateDoc(usuario, data);
     //   alertaGuardado();
        navigate("/");
    }

    //5 asincronismo de existencia con la bd

    const getUsuarioById = async (id) =>{
        const usuario = await getDoc(doc(db, dbCollections.Usuarios, id));
        console.log(usuario.data());

        if (usuario.exists()){
            setForm({
                Nombre: usuario.data().Nombre,
                Apellido: usuario.data().Apellido,
                Edad: usuario.data().Edad 
            });
        }
        else{
            console.log("no existe");
        }
    };

    //6 useEffect
    
    useEffect(()=>{
        getUsuarioById(id);
    }, [id])

    //7 estructura para mostrar

  return (
    <div className='container'>
        <div className='row'>
             <div className='col'>

             <h1 className='mt-3 '>Editar el Usuario</h1>

             <form onSubmit={update} className="mt-5">
                <div className='mb-4'>
                    <label className='form-label h3 '>Nombre:</label>
                    <input 
                        name='Nombre'
                        value={form.Nombre}
                        type="text"
                        className='form-control w-50 m-auto'
                        onChange={cambio}
                    />
                </div>

                <div className='mb-4'>
                <label className='form-label h3 '>Apellido:</label>
                <input 
                    name="¨Apellido"
                    value={form.Apellido}
                    type="text"
                    className='form-control w-50 m-auto'
                    onChange={cambio}
                />
                </div>

                <div className='mb-3'>
                <label className='form-label h3 '>Edad:</label>
                <input 
                    name="Edad"
                    value={form.Edad}
                    type="text"
                    className='form-control w-50 m-auto'
                    onChange={cambio}
                />
                </div>

                <button type="submit" className='btn btn-warning btn-lg mt-3'>Guardar</button>
                <Link to="/" className="btn btn-info btn-lg mt-3">Cancelar</Link>
             
             </form>
             </div>
        </div>
    </div>
  )
}

export default Editar;
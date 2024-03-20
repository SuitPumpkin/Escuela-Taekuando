import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 

function Crear() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: '',
        segundo_nombre: '',
        apellido: '',
        apellido_materno: '',
        fecha_nacimiento: '',
        correo: '',
        telefono_alumno: '',
        tutor_legal: '',
        telefono_tutor: '',
        cinta: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/crear-alumno', formData);
            console.log('Respuesta del servidor:', response.data);
            //navigate('/Tablas');
        } catch (error) {
            console.error('Error al enviar datos:', error);
        }
    };
    return (
        <div className="container mx-auto mt-5">
            <a href='/' className="fixed top-0 left-0 m-4 z-10"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Volver al a inicio</button></a>
            <h2 className="text-3xl font-bold mb-4">Crear Alumno</h2>
            <form onSubmit={onSubmit} className="max-w-lg mx-auto mt-8 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" onChange={handleChange} value={formData.nombre} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="segundo_nombre" className="block text-gray-700 text-sm font-bold mb-2">Segundo Nombre:</label>
                    <input type="text" id="segundo_nombre" name="segundo_nombre" onChange={handleChange} value={formData.segundo_nombre} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="apellido" className="block text-gray-700 text-sm font-bold mb-2">Apellido:</label>
                    <input type="text" id="apellido" name="apellido" onChange={handleChange} value={formData.apellido} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="apellido_materno" className="block text-gray-700 text-sm font-bold mb-2">Apellido Materno:</label>
                    <input type="text" id="apellido_materno" name="apellido_materno" onChange={handleChange} value={formData.apellido_materno} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="fecha_nacimiento" className="block text-gray-700 text-sm font-bold mb-2">Fecha de Nacimiento:</label>
                    <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" onChange={handleChange} value={formData.fecha_nacimiento} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="correo" className="block text-gray-700 text-sm font-bold mb-2">Correo:</label>
                    <input type="email" id="correo" name="correo" onChange={handleChange} value={formData.correo} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="telefono_alumno" className="block text-gray-700 text-sm font-bold mb-2">Teléfono del Alumno:</label>
                    <input type="text" id="telefono_alumno" name="telefono_alumno" onChange={handleChange} value={formData.telefono_alumno} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="tutor_legal" className="block text-gray-700 text-sm font-bold mb-2">Tutor Legal:</label>
                    <input type="text" id="tutor_legal" name="tutor_legal" onChange={handleChange} value={formData.tutor_legal} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="telefono_tutor" className="block text-gray-700 text-sm font-bold mb-2">Teléfono del Tutor:</label>
                    <input type="text" id="telefono_tutor" name="telefono_tutor" onChange={handleChange} value={formData.telefono_tutor} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="cinta" className="block text-gray-700 text-sm font-bold mb-2">Cinta:</label>
                    <input type="text" id="cinta" name="cinta" onChange={handleChange} value={formData.cinta} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
                </div>
            </form>
        </div>
    );
}
export default Crear;

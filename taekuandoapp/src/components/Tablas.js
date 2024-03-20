import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tablas() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    const fetchAlumnos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/alumnos');
        setAlumnos(response.data);
      } catch (error) {
        console.error('Error al cargar los alumnos:', error);
      }
    };

    fetchAlumnos();
  }, []);

  return (
    <div className="container mx-auto">
        <a href='/' className="fixed top-0 left-0 m-4 z-10"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Volver al a inicio</button></a>
        <h1 className="text-3xl font-bold mb-5">Tabla de Alumnos</h1>
        <table className="min-w-mid bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Segundo Nombre</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido Materno</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Nacimiento</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Correo</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono del Alumno</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tutor Legal</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono del Tutor</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cinta</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {alumnos.map(alumno => (
                <tr key={alumno.id}>
                    <td className="px-4 py-4 text-gray-500 whitespace-nowrap">{alumno.id}</td>
                    <td className="px-4 py-4 text-gray-500 whitespace-nowrap">{alumno.nombre}</td>
                    <td className="px-4 py-4 text-gray-500 whitespace-nowrap">{alumno.segundo_nombre}</td>
                    <td className="px-4 py-4 text-gray-500 whitespace-nowrap">{alumno.apellido}</td>
                    <td className="px-4 py-4 text-gray-500 whitespace-nowrap">{alumno.apellido_materno}</td>
                    <td className="px-4 py-4 text-gray-500 whitespace-nowrap">{alumno.fecha_nacimiento}</td>
                    <td className="px-4 py-4 text-gray-500 whitespace-nowrap">{alumno.correo}</td>
                    <td className="px-4 py-4 text-gray-500 whitespace-nowrap">{alumno.telefono_alumno}</td>
                    <td className="px-4 py-4 text-gray-500 whitespace-nowrap">{alumno.tutor_legal}</td>
                    <td className="px-4 py-4 text-gray-500 whitespace-nowrap">{alumno.telefono_tutor}</td>
                    <td className="px-4 py-4 text-gray-500 whitespace-nowrap">{alumno.cinta}</td>
                </tr>
                ))}
            </tbody>
        </table>

        <a href='/crear'><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Añadir Alumno nuevo</button></a>
    </div>
  );
}

export default Tablas;

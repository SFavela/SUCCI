"use client"

import Navbar from '@/components/Navbar'
import "../../globals.css"
import '../../styles/buzon.css'
import React, { useState } from 'react';
import axios from 'axios';

function BuzonPage() {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    telefono: '',
    correoElectronico: '',
    facultad: '',
    tipo: '',
    comentario: '',
    contacto: [] as string[]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
  
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      const updatedContacto = checkbox.checked ? [...formData.contacto, value] : formData.contacto.filter(item => item !== value);
      setFormData(prevState => ({
        ...prevState,
        contacto: updatedContacto
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('/api/sendMail', { formData });
      alert('¡Gracias por tu comentario! Se ha enviado correctamente.');
      // Reiniciar el estado del formulario después de enviarlo
      setFormData({
        nombreCompleto: '',
        telefono: '',
        correoElectronico: '',
        facultad: '',
        tipo: '',
        comentario: '',
        contacto: []
      });
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      alert('Ocurrió un error. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div>
      <Navbar/>
      <div className='container'>
        <h1>Buzón de Quejas y Sugerencias</h1>
        <form className='formulario-buzon' onSubmit={handleSubmit}>
          <label>Nombre completo:</label>
          <input className='input' type='text' name='nombreCompleto' value={formData.nombreCompleto} onChange={handleChange} required />

          <label>Teléfono:</label>
          <input className='input' type='tel' name='telefono' value={formData.telefono} onChange={handleChange} required />

          <label>Correo electrónico:</label>
          <input className='input' type='email' name='correoElectronico' value={formData.correoElectronico} onChange={handleChange} required />

          <label>Facultad, Escuela, Departamento, Área:</label>
          <select className='input' name='facultad' value={formData.facultad} onChange={handleChange} required>
            <option value="">Seleccione...</option>
            <option value="facultad">Facultad</option>
            <option value="escuela">Escuela</option>
            <option value="departamento">Departamento</option>
            <option value="area">Área</option>
          </select>

          <div className='tipo'>
            <label>Tipo:</label>
            <input type='radio' name='tipo' value='sugerencia' onChange={handleChange} required />Sugerencia
            <input type='radio' name='tipo' value='mejora' onChange={handleChange} required />Mejora
            <input type='radio' name='tipo' value='comentario' onChange={handleChange} required />Comentario
          </div>

          <label>Comentario:</label>
          <textarea className='input' name='comentario' value={formData.comentario} onChange={handleChange} required></textarea>

          <div className='contacto'>
            <label>¿Cómo deseas ser contactado?:</label>
            <input type='checkbox' name='contacto' value='telefono' onChange={handleChange} />Teléfono
            <input type='checkbox' name='contacto' value='correoElectronico' onChange={handleChange} />Correo electrónico
          </div>

          <button className='btn'>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default BuzonPage;
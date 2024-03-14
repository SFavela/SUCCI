"use client"

import Navbar from '@/components/Navbar'
import "../../globals.css"
import '../../styles/buzon.css'
import React, { useState, ChangeEvent } from 'react'

function Buzonpage() {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    telefono: '',
    correoElectronico: '',
    facultad: '',
    tipo: '',
    comentario: '',
    contacto: [] as string[]
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      const response = await fetch('https://formspree.io/f/xjvnorok', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Gracias por tu comentario, nos contactaremos contigo');
        console.log('Formulario enviado con éxito');
        //se limpia el formulario
        setFormData({
          nombreCompleto: '',
          telefono: '',
          correoElectronico: '',
          facultad: '',
          tipo: '',
          comentario: '',
          contacto: []
        });
      } else {
        console.error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  }

  return (
    <div>
      <Navbar/>
      <div className='container'>
        <h1>Buzón de Quejas y Sugerencias</h1>
        <form className='formulario-buzon' onSubmit={handleSubmit}>
          <label>Nombre completo:</label>
          <input className='input' type='text' name='nombreCompleto' value={formData.nombreCompleto} onChange={handleChange} required/>

          <label>Teléfono:</label>
          <input className='input' type='tel' name='telefono' value={formData.telefono} onChange={handleChange} required/>

          <label>Correo electrónico:</label>
          <input className='input' type='email' name='correoElectronico' value={formData.correoElectronico} onChange={handleChange} required/>

          <label>Facultad, Escuela, Departamento, Área:</label>
          <select className='input' name='facultad' value={formData.facultad} onChange={handleChange} required>
            <option value="" disabled selected>Seleccione una opción</option>
                            <option value="Dirección de Desarrollo y Gestión de Recursos Humanos">Dirección de Desarrollo y Gestión de Recursos Humanos</option>
                            <option value="Coordinación de Obras">Coordinación de Obras</option>
                            <option value="Coordinación de Compras">Coordinación de Compras</option>
                            <option value="Coordinación de Relaciones Públicas">Coordinación de Relaciones Públicas</option>
                            <option value="Coordinación de Correspondencia y Mensajería">Coordinación de Correspondencia y Mensajería</option>
                            <option value="Coordinación de Servicios Generales">Coordinación de Servicios Generales</option>
                            <option value="Coordinación de Patrimonio y Control Vehicular">Coordinación de Patrimonio y Control Vehicular</option>
                            <option value="Coordinación General de Archivo">Coordinación General de Archivo</option>
                            <option value="Dirección de Difusión Cultural">Dirección de Difusión Cultural</option>
                            <option value="Editorial UJED">Editorial UJED</option>
                            <option value="Librería UJED">Librería UJED</option>
                            <option value="Museo Regional UJED">Museo Regional UJED</option>
                            <option value="Radio UJED">Radio UJED</option>
                            <option value="TV UJED">TV UJED</option>
                            <option value="Centro de Desarrollo del Deporte Universitario">Centro de Desarrollo del Deporte Universitario</option>
                            <option value="Dirección de Vinculación Institucional">Dirección de Vinculación Institucional</option>
                            <option value="Dirección de Transformación Digital">Dirección de Transformación Digital</option>
                            <option value="Dirección de Centro de Negocios">Dirección de Centro de Negocios</option>
                            <option value="Dirección de Servicios Escolares">Dirección de Servicios Escolares</option>
                            <option value="Dirección General de Bibliotecas">Dirección General de Bibliotecas</option>
                            <option value="Facultad de Ciencias Forestales y Ambientales">Facultad de Ciencias Forestales y Ambientales</option>
                            <option value="Facultad de Trabajo Social">Facultad de Trabajo Social</option>
                            <option value="Facultad de Ciencias Químicas">Facultad de Ciencias Químicas</option>
                            <option value="Instituto de Bellas Artes">Instituto de Bellas Artes</option>
          </select>

          <div className='tipo'>
            <label>Tipo:</label>
            <input type='radio' name='tipo' value='sugerencia' onChange={handleChange} required/>Sugerencia
            <input type='radio' name='tipo' value='mejora' onChange={handleChange} required/>Mejora
            <input type='radio' name='tipo' value='comentario' onChange={handleChange} required/>Comentario
          </div>

          <label>Comentario:</label>
          <textarea className='input' name='comentario' value={formData.comentario} onChange={handleChange} required></textarea>

          <div className='contacto'>
            <label>¿Cómo deseas ser contactado?:</label>
            <input type='checkbox' name='contacto' value='telefono' onChange={handleChange}/>Teléfono
            <input type='checkbox' name='contacto' value='correoElectronico' onChange={handleChange}/>Correo electrónico
          </div>

          <button className='btn'>Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Buzonpage
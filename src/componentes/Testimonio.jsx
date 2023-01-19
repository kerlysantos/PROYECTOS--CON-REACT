import React from 'react';
import '../hojas-de-estilos/Testimonio.css'

function Testimonio (props){
  
  return(
    <div className='contenedor-testimonio'>
      <img className=' imagen-testimonio'
         src={require(`../imagenes/testimonio-${props.imagen}.png`)} alt= "fotos de testimonios" />
      
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-pais-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>

        <p className='cargo-testimonio'> {props.cargo} en <strong>{props.empresa}</strong></p>

        <p className='texto-testimonio'> "{props.testimonio}"</p>
      </div>
    </div>
  );

}

export default Testimonio;
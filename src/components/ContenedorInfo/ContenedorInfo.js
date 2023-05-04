import React from 'react'
import './ContenedorInfo.css'

export const ContenedorInfo = (props) => {
  return (
    <div className='info-container'>
        <div className='info'>
            <div className='header'>{props.titulo}</div>
            <div className='contenido'>bb</div>
        </div>
    </div>
  )
}

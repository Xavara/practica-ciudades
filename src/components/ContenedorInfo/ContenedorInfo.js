import React, { useState } from 'react'
import './ContenedorInfo.css'

export const ContenedorInfo = (props) => {
  const [chart, setChart] = useState(true);

  const handleChart = () => {
    setChart(!chart)
  }

  return (
    <div className='info-container'>
        <div className='info'>
            <div className='header' ><div className='titulo'>{props.titulo}</div><div className='button' onClick={handleChart}>{chart ? "_" : "·"}</div></div>
            <div className='contenido'>{chart ? props.children : ""}</div>
        </div>
    </div>
  )
}

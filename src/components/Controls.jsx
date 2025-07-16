import React from 'react'
import { useState } from 'react'

function Controls({aumentar, duplicar, reiniciar}) {
  return (
    <div>
        <button 
            onClick={aumentar}
            style={{
                margin: "10px"
        }}>Aumentar</button>

        <button 
            onClick={duplicar}
            style={{
                margin: "10px"
        }}>Duplicar X2</button>

        <button 
            onClick={reiniciar}
            style={{
                margin: "10px"
        }}>Reiniciar</button>
      
    </div>
  )
}

export default Controls

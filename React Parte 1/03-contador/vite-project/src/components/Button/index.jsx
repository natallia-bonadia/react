import { useState } from 'react'
import './styles.css'

function Contador () {
  const [contador, setContador] = useState(0)
  
  return (
    <div className='contadorBtn'>
      <div>
        <h1 id='title'>Contador: {contador}</h1>
      </div>
      <div id='buttons'>
        <button className='btn' onClick={() => setContador(contador - 1)}>-</button>
        <button className='btn' onClick={() => setContador(contador + 1)}>+</button>
      </div>
    </div>
  )
}

export default Contador
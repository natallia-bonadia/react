import { useState } from 'react'
import './styles.css'

function PresencaDeAula() {
  const [name, setState] = useState()

  return (
    <div className='formulario'>
      <form action='submit'>
        <label htmlFor='nome'>Nome:</label>
        <input type='text' id='nome' placeholder='Digite aqui'/>
        <button type='submit'>Adicionar</button>
      </form>
    </div>
  )
}

export default PresencaDeAula
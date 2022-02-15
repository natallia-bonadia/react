import { Link } from 'react-router-dom'
import './styles.css'

type Props = {
  children: string
}

export default function Menu({children}: Props) {
  return (
    <div>
      <div id='menu'>
        <Link
        to='/'
        className='menu-btn'
        >
          Home
        </Link>
        <Link
          to='/lista-de-presenca'
          className='menu-btn'
        >
          Lista de Presença
        </Link>
        <Link
          to='/alterando-o-tema'
          className='menu-btn'
        >
          Alterando o Tema
        </Link>
      </div>
      <div id='title'>
        <h1>{children}</h1>
      </div>
    </div>
  )
}
import Menu from "../../components/Menu";
import './styles.css'

import { useState } from 'react'

export default function ListaDePresenca() {
  const [student, setStudent] = useState('')
  const [listStudents, setListStudent] = useState<string[]>([])

  function saveName(event: any) {
    setStudent(event.target.value)
  }

  function sendNameToList(event: any) {
    event.preventDefault()
    setListStudent((state) => [...state, student])
  }

  return(
    <>
      <Menu>Lista de Presença</Menu>
      <div id="container-list">  
        <div id="form-container">
          <form action="" onSubmit={sendNameToList}>
            <label>Nome:
              <input type="text" placeholder="Digite o nome aqui" onChange={saveName}/>
            </label>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div id="list-container">
          <ol>
            {listStudents.sort().map(student => <li>{student}</li>)}
          </ol>
        </div>
      </div>
    </>
  )
}

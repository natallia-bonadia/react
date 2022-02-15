import { useState } from "react"
import './styles.css'
import Person from "../Person/index"

function PersonsList () {
  const [persons, setPersons] = useState([
    {
      id: 'FGT375',
      nome: 'José da Silva',
      cpf: '300.436.247-50',
      idade: 30
    }, 
    {
      id: 'SLF235',
      nome: 'Maria Joaquina',
      cpf: '592.545.800-40',
      idade: 55
    },
    {
      id: 'FRD221',
      nome: 'Laura Ribeiro',
      cpf: '551.632.980-33',
      idade: 21
    }
  ])
  
  return (
    <div>
      <Person pessoa={persons} />
    </div>
  )
}

export default PersonsList
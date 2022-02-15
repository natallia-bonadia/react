import './styles.css'

function Person (persons) {

  return (
    <div>
      <ul className="personUl">
        {persons.map(person => 
          <li><strong>Id:</strong> {person.id}</li>
          // <li><strong>Nome:</strong> {person.nome}</li>,
          // <li><strong>CPF:</strong> {cpf}</li>,
          // <li><strong>Idade:</strong> {idade} anos</li>
        )}
      </ul>      
    </div>
  )
}

export default Person


// return (
//   <>
//       <h2>{title}</h2>
//       <ul>
//           {items.map(x => <li>{x}</li>)}
//       </ul>
//   </>
// );
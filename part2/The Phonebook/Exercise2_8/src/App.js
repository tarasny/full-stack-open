import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumb ] = useState('')
 

  const addNew = (event) => {
    event.preventDefault()
    let isNew = true
    const nameObj = {
      name: newName,
      number: newNumber,
    }
    persons.map(person => newName === person.name ? isNew = false : '')
    isNew ? setPersons(persons.concat(nameObj)) : alert(`${nameObj.name} is already in the Phonebook`)
    setNewName('')
    setNewNumb('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumbChange = (event) => {
    setNewNumb(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Name: <input value={newName}
                       onChange={handleNameChange}
                /> 
          <br></br>
          Number: <input value={newNumber}
                         onChange={handleNumbChange}
                  />
        </div>
        <div>
          <button type="submit" onClick={addNew}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => 
          <p key={person.name}>{person.name} {person.number}</p>) 
        }
      </div>
    </div>
  )
}

export default App
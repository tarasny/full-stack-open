import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addNew = (event) => {
    event.preventDefault()
    const nameObj = {
      name: newName,
    }

    setPersons(persons.concat(nameObj))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName}
                       onChange={handleNameChange}
                />
        </div>
        <div>
          <button type="submit" onClick={addNew}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <li key={person.name}>{person.name}</li>) 
        }
      </ul>
    </div>
  )
}

export default App
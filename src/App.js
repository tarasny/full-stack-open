import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addNew = (event) => {
    event.preventDefault()
    let isNew = true
    const nameObj = {
      name: newName,
    }
    persons.map(person => newName === person.name ? isNew = false : '')
    isNew ? setPersons(persons.concat(nameObj)) : alert(`${nameObj.name} is already in the Phonebook`)
    setNewName('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName}
                       onChange={handleNoteChange}
                />
        </div>
        <div>
          <button type="submit" onClick={addNew}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <p key={person.name}>{person.name}</p>) 
        }
      </ul>
    </div>
  )
}

export default App
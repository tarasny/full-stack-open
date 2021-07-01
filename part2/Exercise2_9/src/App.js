import React, { useState } from 'react'
import Search from './components/Search'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumb ] = useState('')
  const [ search, setSearch] = useState('')

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
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumbChange = (event) => {
    console.log(event.target.value)
    setNewNumb(event.target.value)
  }

  const handleSearch = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }


  let view = Search(search, persons)


  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Filter shown with: <input value={search}
                                   onChange={handleSearch}
                            />
        </div>
      <h2>Add new</h2>
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
        {view.map(person => (
          <p key={person.name}>{person.name} {person.number}</p>
        ))}
      </div>
    </div>
  )
}

export default App
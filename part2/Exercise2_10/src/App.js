import React, { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

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
    setNewName(event.target.value)
  }

  const handleNumbChange = (event) => {
    setNewNumb(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form>
          <Filter input={search} handler={handleSearch}/>
      <h3>Add new</h3>
          <PersonForm name={newName} number={newNumber} nameHndlr={handleNameChange} numHndlr={handleNumbChange} btnClick={addNew}/>
      </form>
      <h3>Numbers</h3>
        <Persons array={persons} search={search}/>
    </div>
  )
}

export default App
import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [newFiltered, setNewFiltered] = useState(persons)

  const handleSubmit = (e) => {
    
    e.preventDefault()

    if (newName == '' || newNumber == '') {
      alert("Please add both a name and number to the entry")
      return 
    }

    if (persons.filter(p => p.name === newName || p.number === newNumber).length > 0) {
      alert(`${newName} is already in the phonebook`)
      return 
    }
    const personSubmitted = { name: newName, number: newNumber }

    const updatedPersons = persons.concat([personSubmitted])
    setPersons(updatedPersons)

    setNewName('')
    setNewNumber('')


    setNewFiltered(updatedPersons)
    setNewSearch('')

  }
  
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleNewSearch = (e) => {
    const updatedSearch = e.target.value
    setNewSearch(updatedSearch)
    if (updatedSearch == '') {
      setNewFiltered(persons)
      return
    }
    let updatedFilter = persons.filter(p => p.name.toLowerCase().includes(updatedSearch.toLowerCase()) )
    setNewFiltered(updatedFilter)
  }

  

  

  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchVal={newSearch} handleSearch={handleNewSearch}/>
      <PersonForm name={newName} number={newNumber} handleSubmit={handleSubmit} handleNameChange={handleNameChange} handleNewNumber={handleNewNumber}/>
      <Numbers persons={newFiltered}/>
    </div>
  )
}





export default App
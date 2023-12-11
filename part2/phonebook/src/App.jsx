import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])

  const hook = () => {
    console.log("Effect triggered")
    
    axios
      .get('http://localhost:3001/persons')
      .then(res => {
        console.log("Promise fulfilled", res.data)
        const updatedPersons = res.data 
        setPersons(updatedPersons)
        setNewFiltered(updatedPersons)
      })
  
  }
  useEffect(hook, [])

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

    // resetting page state with new data
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
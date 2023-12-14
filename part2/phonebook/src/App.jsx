import { useEffect, useState } from 'react'
import "./styles.css"
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'
import Notification from './components/Notification'
import axios from 'axios'
import personService from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([])
  const [message, setMessage] = useState(null)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [newFiltered, setNewFiltered] = useState(persons)


  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(res => {
        console.log("Promise fulfilled", res.data)
        const updatedPersons = res.data 
        setPersons(updatedPersons)
        setNewFiltered(updatedPersons)
      })
      .catch(
        err => console.log("Error accessing database:", err)
      )
  }
  useEffect(hook, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (newName == '' || newNumber == '') {
      alert("Please add both a name and number to the entry")
      return 
    }
    const found = persons.filter(p => p.name === newName) 
    if (found.length > 0) {
      const result = confirm(`${newName} is already in the phonebook, would you like to replace the old number?`)
      if (!result) return

      const person = found[0]
      const updatedNumber = { ...person, number: newNumber }
      personService
        .updatePerson(person.id, updatedNumber)
        .then(
          result => {
            console.log("Successful update:", result) 
            messageTimeout(`Updated ${newName}`)
          }
        )
        .catch(err => {
            console.log("Error updating:", err)
            messageTimeout(`Information of ${newName} has already been removed from server`)
          }) 
      
      const updatedPersons = [ ...persons ]
      const index = updatedPersons.findIndex(i => i.id === person.id)
      updatedPersons[index] = updatedNumber

      setPersons(updatedPersons)
      setNewName('')
      setNewNumber('')
      setNewSearch('') // ideally will keep the value 
      setNewFiltered(updatedPersons)

      return 
    }

    const personSubmitted = { name: newName, number: newNumber }
    console.log("Submitted", personSubmitted)
    personService
      .create(personSubmitted)
      .then(returnedPerson => {
        const updatedPersons = persons.concat(returnedPerson)
        setPersons(updatedPersons)
        setNewName('')
        setNewNumber('')
        setNewSearch('') // ideally will keep the value 
        setNewFiltered(updatedPersons)
        messageTimeout(`Added ${newName}`)
      })
      .catch(err =>
        console.log("Error posting person", err)
      )
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

  const handleDelete = (id) => {
    const result = confirm("Delete", persons.filter(p => p.id == id)[0].name)
    if (!result) return

    personService 
      .deletePerson(id)
      .then(() => {
        console.log("Deleted", id)
        const updatedPersons = persons.filter(p => p.id != id)
        setPersons(updatedPersons)
        setNewSearch('') // ideally will keep the value 
        setNewFiltered(updatedPersons)
      })
      .catch(err => console.log("Failed to delete:", err))
  }

  const messageTimeout = (m) => {
    setMessage(m)

    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <Filter searchVal={newSearch} handleSearch={handleNewSearch}/>
      <PersonForm name={newName} number={newNumber} handleSubmit={handleSubmit} handleNameChange={handleNameChange} handleNewNumber={handleNewNumber}/>
      <Numbers persons={newFiltered} handleDelete={handleDelete}/>
    </div>
  )
}





export default App
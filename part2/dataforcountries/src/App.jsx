import { useState, useEffect } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Result from './components/Result'
import axios from 'axios'
import './styles.css'

function App() {

  const title = "Country Data"
  const [filter, setFilter] = useState(null)
  const [countryList, setCountryList] = useState(null)
  const [countryFound, setCountryFound] = useState(null)
  const [countries, setCountries] = useState(null)

  const hook = () => {
    console.log("Use effect triggered")
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(res => {
        console.log("Promise fulfilled")
        setCountries(res.data)
      })
      .catch(
        err => console.log("Error accessing database:", err)
      )
  }
  useEffect(hook, [])

  const handleInput = (e) => {
    setCountryFound(null) // inefficient?
    const updatedFilter = e.target.value
    setFilter(updatedFilter)

    searchCountries(updatedFilter)
  }

  const searchCountries = (filter) => {
    console.log("Searching country", filter)

    if (countries === null) {
      console.log("Countries database not in memory")
      return
    }
    const matchedCountries = countries.filter(c => c["name"]["common"].toLowerCase().includes(filter.toLowerCase()))
    const updatedCountryList = matchedCountries.map(c => c["name"]["common"])

    // edge case
    const exact = matchedCountries.filter(c => c["name"]["common"].toLowerCase() === filter.toLowerCase())

    if (updatedCountryList.length == 1 || exact.length == 1) {
      let c = null
      setCountryList([]) // if null, it will show "Search for a country" base case
      console.log("Target country found, querying backend")
      if (exact.length == 1) {
        console.log("Exact found")
        c = exact[0]["name"]["common"]
      }
      else {
        c = updatedCountryList[0]
      }
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${c}`)
        .then(res => {
          console.log("Promise fulfilled")
          setCountryFound(res.data)
        })
        .catch(
          err => console.log("Error accessing database:", err)
        )
      return 
    }
    setCountryList(updatedCountryList)

  }

  

  return (
    <>
      <Header title={title}/>
      <Search filter={filter} handler={handleInput} />
      <Result countryList={countryList} countryFound={countryFound}/>
    </>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import View from './components/View'
import axios from 'axios'


const App = () => {
  const [countries, setCountries] = useState([]) 
  const [search, setSearch] = useState('')
  let view = []

  const fetch = () => {
    axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
          setCountries(response.data)
        })
  }

  useEffect(fetch, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  view = (countries.filter(country => (((country.name).toLowerCase()).includes((search).toLowerCase()))))


  return (
    <>
      <h2>Data for countries</h2>
      <Filter input={search} handler={handleSearch}/>
      <View view={view} search={search}/>

    </>
  )
}

export default App
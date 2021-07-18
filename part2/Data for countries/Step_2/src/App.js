import React, { useEffect, useState } from 'react'
import View from './components/View'
import Filter from './components/Filter'
import axios from 'axios'


const App = () => {
  const [countries, setCountries] = useState([]) 
  const [search, setSearch] = useState('')
  const [details, setDetails] = useState([])
  const [render, setRender] = useState(0)
  let view = []
  let showDetails = []


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
    let change = []
    view.map(country => change[country] = false) 
    setDetails(change)
  }


  const clckHandl = (country) => {
      let change = details
      change[country] ? change[country] = false : change[country]= true
      setDetails(change)
      setRender(render + 1)
  }


  view = (countries.filter(country => (((country.name).toLowerCase()).includes((search).toLowerCase()))))
  showDetails = (view.filter(country => details[country.name]))



  return (
    <>
      <h2>Data for countries</h2>
      <Filter input={search} handler={handleSearch}/>
      <View view={view} search={search} handler={clckHandl} dtarray={showDetails}/>

    </>
  )
}

export default App
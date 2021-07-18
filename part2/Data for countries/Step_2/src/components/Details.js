import React from 'react'

const Details = ({array}) => {
    return (
        <>
        {array.map(country => {
            return (
                <div key={country.name}>
                    <h2>{country.name}</h2>
                    <p>Capital: {country.capital}</p>
                    <p>Population: {country.population}</p>
                    <h3>Languages</h3>
                    <ul>
                        {(country.languages).map((language) => 
                            <li key={language.iso639_2}>{language.name}</li>
                        )}
                    </ul>
                    <br></br>
                    <img src={country.flag} alt='Flag'width="200"></img>
                </div>
            )
        })}
            
        </>
    )
}


export default Details
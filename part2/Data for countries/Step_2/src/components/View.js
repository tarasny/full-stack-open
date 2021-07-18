import React from 'react'
import Details from './Details'



const List = ({array, handler, dtarray}) => {
    return (
        <>
            <ul>
                {array.map(country => {

                    return (
                        <div key={country.name}>
                        <li>{country.name} <button type='button' onClick={() => handler(country.name)}>Show Details</button></li>
                        <Details array={dtarray.filter(countryDt => countryDt.name === country.name)}/>
                        </div>
                    )
                })}
            </ul>
        </>
    )   
}


const View = ({view, search, handler, dtarray}) => {

    if (search === '') {
        return <><p>Start typying to show results</p></>
    }
    else if (view.length >10) {
        return <><p>Be more specific</p></>
    }
    else if (view.length === 1) {
        return <Details array={view} />
    }
    else {
        return <><List array={view} handler={handler} dtarray={dtarray} /></>
    }
}

export default View
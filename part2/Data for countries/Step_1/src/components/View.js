import React from 'react'
import Details from './Details'



const List = ({array}) => {
    return (
        <>
            <ul>
                {array.map(country => {

                    return (
                        <div key={country.name}>
                        <li>{country.name}</li>
                        </div>
                    )
                })}
            </ul>
        </>
    )   
}


const View = ({view, search}) => {

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
        return <><List array={view}/></>
    }
}

export default View
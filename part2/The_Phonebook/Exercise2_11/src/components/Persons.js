import React from 'react'

const Persons = ({array, search}) => {
    let view = (array.filter(person => (((person.name).toLowerCase()).includes((search).toLowerCase()))))
    return (
        <>
            {view.map(person => (
                <p key={person.name}>{person.name} {person.number}</p>
            ))}
        </>
    )
}

export default Persons
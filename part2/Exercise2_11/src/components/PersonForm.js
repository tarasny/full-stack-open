import React from 'react'

const PersonForm = ({name, number, nameHndlr, numHndlr, btnClick}) => {
    
    return (
        <>
            Name: <input value={name}
                       onChange={nameHndlr}
                /> 
            <br></br>
            Number: <input value={number}
                         onChange={numHndlr}
                  />
            <br></br>
            <button type="submit" onClick={btnClick}>Add</button>
        </>
    )
}

export default PersonForm
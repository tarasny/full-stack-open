import React from 'react'

const Filter = ({input, handler}) => {
    return (
        <>
            Filter shown with: <input value={input}
                                    onChange={handler}
                            />
        </>
    )
}

export default Filter
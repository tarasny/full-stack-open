import React from 'react'

const Filter = ({ input, handler}) => {
    return (
        <form>
            Find countries: <input value={input}
                                    onChange={handler}
                            />
            
        </form>
    )
}

export default Filter
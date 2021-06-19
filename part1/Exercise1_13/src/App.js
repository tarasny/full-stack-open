import React, { useState } from 'react'

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(7).fill(0))
  
  function handleClick(selected) {
    let temp = [...points]
    temp[selected] += 1
    setPoints(temp)
  }
  

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Has {points[selected]} upvotes</p>
      <button onClick={() => handleClick(selected)}>Upvote</button>
      <button onClick={() => setSelected(getRandom(0, anecdotes.length - 1))}>Random quote</button>
    </div>
  )
}

export default App
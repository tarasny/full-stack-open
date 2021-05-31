import React, {useState} from 'react'


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => {setGood(good + 1)}}>Good</button>
      <button onClick={() => {setNeutral(neutral + 1)}}>Neutral</button>
      <button onClick={() => {setBad(bad + 1)}}>Bad</button>
      <h2>Statistics</h2>
      <ul>
      <li>Good :{good}</li>
      <li>Neutral :{neutral}</li>
      <li>Bad :{bad}</li>
      </ul>
      </div>
  )
}


export default App;

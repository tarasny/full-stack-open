import React, {useState} from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => {setGood(good + 1); setScore(score + 1); setCount(count + 1)}} text='Good' />
      <Button handleClick={() => {setNeutral(neutral + 1); setCount(count + 1)}} text='Neutral' />
      <Button handleClick={() => {setBad(bad + 1); setScore(score - 1); setCount(count + 1)}} text='Bad' />
      <h2>Statistics</h2>
      <ul>
      <li>Good :{good}</li>
      <li>Neutral :{neutral}</li>
      <li>Bad :{bad}</li>
      <li>All :{count}</li>
      <li>Average: {(!isNaN(score/count))? (Math.round((score/count)*100)/100) : 'Please, submit your feedback to generate results' }</li>
      <li>Positive: {(!isNaN(good/count))? (Math.round((good/count)*100)/100)*100 + '%' : ''}</li>
      </ul>
    </div>
  )
}


export default App;

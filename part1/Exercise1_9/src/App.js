import React, {useState} from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)
const Statistics = ({good, score, count}) => {  
  const average = (!isNaN(score/count))? (Math.round((score/count)*100))/100 : 'Please, sumbit your feedback to generate results'
  const percent = (!isNaN(good/count))? (Math.round((good/count)*10000))/100 + '%' : ''
  return (
    <>
      <li>Average: {average}</li>
      <li>Positive: {percent}</li>
    </>
  )
}
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
      <p>{count? 
        (
        <ul>
        <li>Good :{good}</li>
        <li>Neutral :{neutral}</li>
        <li>Bad :{bad}</li>
        <li>All :{count}</li>
        <Statistics good={good} score={score} count={count}></Statistics>
        </ul>
      ) 
          : 'No feedback given' } </p>
    </div>
  )
}


export default App;

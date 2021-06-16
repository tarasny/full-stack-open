import React, {useState} from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = ({text, value}) => {  
  return (
    <tr>
      <td>{text}</td> <td>{(!isNaN(parseFloat(value)))? (value) : ''}</td>
    </tr>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)
  const positive = Math.round((good/count)*10000)/100 + '%'
  const average = Math.round((score/count)*100)/100 

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => {setGood(good + 1); setScore(score + 1); setCount(count + 1)}} text='Good' />
      <Button handleClick={() => {setNeutral(neutral + 1); setCount(count + 1)}} text='Neutral' />
      <Button handleClick={() => {setBad(bad + 1); setScore(score - 1); setCount(count + 1)}} text='Bad' />
      <h2>Statistics</h2>
      <p>{count? 
        (
          <table>
            <tbody>  
                <Statistics text='Good' value={good}></Statistics>
                <Statistics text='Neutral' value={neutral}></Statistics>
                <Statistics text='Bad' value={bad}></Statistics>
                <Statistics text='All' value={count}></Statistics>
                <Statistics text='Average' value={average}></Statistics>
                <Statistics text='Positive' value={positive}></Statistics>
            </tbody>

          </table>
      ) 
          : 'No feedback given' } </p>
    </div>
  )
}


export default App;

import React from 'react'

const Part = (props) => {
  return (
  <>
    <p>{props.part} has {props.exercises} exercises</p>
  </>
  )
}
const App = () => {
  const course = 'Half stack applicatoin development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  
  return (
    <div>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </div>
  )
}

export default App;

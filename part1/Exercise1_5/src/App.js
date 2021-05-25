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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      {parts.map((part,exercises) =>
        <p>{part} has {exercises} exercises</p>
      )}
    </div>
  )
}

export default App;

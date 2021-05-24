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
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
    </div>
  )
}

export default App;

import React from 'react'

const Content = (props) => {
  return (
  <>
    {props.parts.map((part) => 
      <p>{part.name} has {part.exercises} exercises</p>
    )}
  </>
  )
}
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}
const Total = (props) => {
  var total = 0
  return (
    <>
      <p hidden> {props.parts.map((part) => 
        total += part.exercises)}</p>
      <p>Number of exercises {total}</p>
    </>
  )
}
const App = () => {
  let total = 0
  const course = 'Half stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App;

import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Content = (props) => {
  return (
  <>
    {props.parts.map((part) => 
      <p>{part.name} has {part.exercises} exercises</p>
    )}
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
  const course = {
    name: 'Half stack application development',
    parts: [
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
  }
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;

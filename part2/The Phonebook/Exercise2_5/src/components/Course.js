import React from 'react'

const reducer = (accumulator, currentValue) => accumulator + currentValue.exercises;


const Content = ({props}) => {
  
  const total = props.reduce(reducer,0)

  return (
      <>
        {props.map(part => 
        <p key={part.id}>{part.name} {part.exercises}</p>)
    }
        <p>There are {total} exercises</p>
      </>
    )
  }

const Course = ({ course }) => {
  return (
      <>
        <h1>{course.name}</h1>
        <Content props={course.parts}></Content>
      </>
  )
}

export default Course
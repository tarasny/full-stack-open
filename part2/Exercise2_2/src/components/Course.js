import React from 'react'

const reducer = (accumulator, currentValue) => accumulator + currentValue.exercises;


const Content = ({props}) => {
    return (
      <>
        {props.map(part => 
        <p key={part.id}>{part.name} {part.exercises}</p>)
    }
        <p>There are {props.reduce(reducer, 0)} exercises</p>
      </>
    )
  }

const Course = ({ course }) => {
  return (
    <>
    <h1 key={course.id}>{course.name}</h1>
    <Content props={course.parts}></Content>
    </>
  )
}

export default Course
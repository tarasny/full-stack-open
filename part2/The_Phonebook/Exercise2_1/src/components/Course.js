import React from 'react'

const Content = ({props}) => {
    return (
      <>
        {props.map(part => 
        <p key={part.id}>{part.name} {part.exercises}</p>)
    }
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
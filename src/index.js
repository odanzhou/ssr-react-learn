import React from 'react'
import ToDoList from './ToDoList'

const APP = (props) => {
  const { defaultToDoList } = props
  return <div>
    <ToDoList defaultToDoList={defaultToDoList} />
  </div>
}

export default APP
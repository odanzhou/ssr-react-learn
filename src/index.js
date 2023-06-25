import React from 'react'
import ToDoList from './ToDoList'
import Updata from './Updata'

const APP = (props) => {
  const { defaultToDoList } = props
  return <div>
    <ToDoList defaultToDoList={defaultToDoList} />
    {/* <Updata /> */}
  </div>
}

export default APP
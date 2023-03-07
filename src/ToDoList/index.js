import React, { useCallback, useState }  from 'react'
import ToDoItem from '../ToDoItem'

const ToDoList = (props) => {
  const { defaultToDoList } = props
  const [toDoList, setToDoList] = useState(defaultToDoList || [{}])
  const addNewToDo = useCallback(() => {
    setToDoList(list => [...list, {}])
  }, [])
  return (
    <ul>
      {
        toDoList.map((todo, index) => <ToDoItem key={todo?.id || index} defaultToDo={todo?.title} />)
      }
      <button onClick={addNewToDo}>新增</button>
    </ul>
  )
}

export default ToDoList
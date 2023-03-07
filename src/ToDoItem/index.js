import React, { useCallback, useState } from 'react';

const ToDoItem = (props) => {
  const { defaultToDo } = props
  const [inputVal, setInputVal] = useState(defaultToDo)
  const onChange = useCallback((e) => {
    console.log('e', e.target.value, e)
    setInputVal(e.target.value)
  }, [])
  return (
    <li>
      <input value={inputVal} onChange={onChange} />
    </li>
  )
}


export default ToDoItem
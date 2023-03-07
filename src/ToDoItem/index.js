import React, { useCallback, useState } from 'react';

const ToDoItem = (props) => {
  const { defaultToDo } = props
  const [inputVal, setInputVal] = useState(defaultToDo)
  const [isFinished, setIsFinished] = useState(false)
  const finishInput = useCallback(() => {
    setIsFinished(true)
  }, [])
  const onChange = useCallback((e) => {
    console.log('e', e.target.value, e)
    setInputVal(e.target.value)
  }, [])
  return (
    <li>
      {
        !isFinished ? <>
          <input value={inputVal} onChange={onChange}></input>
          <button onClick={finishInput}>完成</button>
        </> : <span onClick={() => setIsFinished(false)}>
          {inputVal}
        </span>
      }
    </li>
  )
}


export default ToDoItem
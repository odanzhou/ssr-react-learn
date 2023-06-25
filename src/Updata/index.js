import React, { useCallback, useState, memo, useEffect }  from 'react'

const useSetTimeout = (onChange) => {
  console.log(3)
  useEffect(() => {
    console.log(4)
    setInterval(onChange, 10000)
  }, [onChange])
}

const Updata = () => {
  const [count, setCount] = useState(0)
  console.log(0)
  const onChange = useCallback(() => {
    console.log(1,'start>>>>>>>>')
    setCount(x => x+1)
  }, [])
  console.log(2)
  useSetTimeout(onChange)
  return <div>
    { count }
  </div>
}

export default memo(Updata)
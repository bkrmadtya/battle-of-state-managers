import { useState } from 'react'

const UseState = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <h2>useState</h2>
      <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
    </div>
  )
}

export default UseState

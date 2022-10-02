import { useState } from 'react'

type CounterProps = {
  count: number
  increaseCount: () => void
}
const Counter = ({ count, increaseCount }: CounterProps) => {
  return (
    <div className="card">
      <h3>React.useState()</h3>
      <button onClick={increaseCount}>count is {count}</button>
    </div>
  )
}

const App = () => {
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount(count => count + 1)
  }

  return <Counter count={count} increaseCount={increaseCount} />
}

export default App

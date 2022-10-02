import { createContext, useContext, useState } from 'react'

type CounterContextProps = {
  count?: number
  increaseCount?: () => void
}

const CounterContext = createContext<CounterContextProps>({})

const Counter = () => {
  const { count, increaseCount } = useContext(CounterContext)

  return (
    <div className="card">
      <h2>React.useContext() Simple</h2>
      <button onClick={increaseCount}>count is {count}</button>
    </div>
  )
}

const App = () => {
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount(count => count + 1)
  }

  return (
    <CounterContext.Provider value={{ count, increaseCount }}>
      <Counter />
    </CounterContext.Provider>
  )
}

export default App

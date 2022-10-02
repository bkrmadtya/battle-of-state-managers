import React, { createContext, useContext, useState } from 'react'

type CounterContextProps = {
  count: number
  increaseCount: () => void
} | null

const CounterContext = createContext<CounterContextProps>(null)

type CounterContextProviderProps = {
  children: React.ReactNode
}
const CounterContextProvider = ({ children }: CounterContextProviderProps) => {
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount(count => count + 1)
  }

  return (
    <CounterContext.Provider value={{ count, increaseCount }}>
      {children}
    </CounterContext.Provider>
  )
}

const useCounterContext = () => {
  const context = useContext(CounterContext)

  if (!context) {
    throw new Error('Context cannot be used outside of a context provider!')
  }

  return context
}

const Counter = () => {
  const { count, increaseCount } = useCounterContext()

  return (
    <div className="card">
      <h3>React.useContext() (Advanced)</h3>
      <button onClick={increaseCount}>count is {count}</button>
    </div>
  )
}

const App = () => (
  <CounterContextProvider>
    <Counter />
  </CounterContextProvider>
)

export default App

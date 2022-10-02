import { signal } from '@preact/signals-react'

const count = signal(0)

const Counter = () => {
  return (
    <div className="card">
      <h3>signal()</h3>
      <button onClick={() => count.value++}>count is {count.value}</button>
    </div>
  )
}

const App = () => <Counter />

export default App

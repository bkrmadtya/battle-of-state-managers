import create from 'zustand'

type CounterStore = {
  count: number
  increase: () => void
}

const useCounterStore = create<CounterStore>(set => ({
  count: 0,
  increase: () => set(state => ({ count: state.count + 1 })),
}))

const Counter = () => {
  const { count, increase } = useCounterStore()

  return (
    <div className="card">
      <h3>zustand.create()</h3>
      <button onClick={increase}>count is {count}</button>
    </div>
  )
}

const App = () => <Counter />

export default App

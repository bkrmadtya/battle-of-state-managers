import { FC } from 'react'

type StateManagerProps = {
  Component: () => JSX.Element
  rawCode: string
  name: string
}

const StateManager: FC<StateManagerProps> = ({ Component, rawCode, name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <div style={{ display: 'flex', width: '100%' }}>
        <pre style={{ flex: '1', fontSize: '0.8rem', textAlign: 'left' }}>{rawCode}</pre>
        <div style={{ flex: '1' }}>
          <Component />
        </div>
      </div>
    </div>
  )
}

export default StateManager

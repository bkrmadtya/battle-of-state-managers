import { FC } from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

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
        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          wrapLongLines
        >
          {rawCode}
        </SyntaxHighlighter>
        <div style={{ flex: '1' }}>
          <Component />
        </div>
      </div>
    </div>
  )
}

export default StateManager

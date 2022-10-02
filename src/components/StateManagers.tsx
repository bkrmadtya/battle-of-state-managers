import { Suspense } from 'react'

import CodeAndDemo from './CodeAndDemo'

type JSXGlobImports = Record<string, () => JSX.Element>

const Managers = import.meta.glob<JSXGlobImports>('@/components/managers/*.tsx', { eager: true })
const ManagersRawCodes = import.meta.glob('@/components/managers/*.tsx', {
  as: 'raw',
  eager: true,
})

const StateManagers = () => {
  return (
    <>
      {Object.keys(Managers).map(path => (
        <Suspense key={path} fallback={'Loading...'}>
          <CodeAndDemo
            Component={Managers[path].default}
            rawCode={ManagersRawCodes[path]}
            name={Managers[path].default.name}
          />
        </Suspense>
      ))}
    </>
  )
}

export default StateManagers

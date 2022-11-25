import React from 'react'
import { useData } from 'components/docs/hooks/useData'

export const APPContext = React.createContext({})

export const Context = ({ children }) => {
  return (
    <APPContext.Provider value={useData()}>
      {children}
    </APPContext.Provider>
  )
}

export default Context

import React from 'react'
import theme from 'components/@ui/theme/theme'

export const ThemeProvider = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const ThemeContext = React.createContext({
  theme
})

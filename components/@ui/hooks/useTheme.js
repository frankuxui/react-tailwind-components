import React from 'react'

const { ThemeContext } = require('../context/themeContext')

export function useTheme () {
  return React.useContext(ThemeContext)
}

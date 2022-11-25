import React from 'react'
import classNames from 'classnames'
// import { useTheme } from 'components/@ui/hooks/useTheme'

export default function Sidebar ({
  className,
  children
}) {
  // const theme = useTheme().theme
  return (
    <div className={classNames(
      className && className
    )}
    >
      {children}
      sidebar
    </div>
  )
}

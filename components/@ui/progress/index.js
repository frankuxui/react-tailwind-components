import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'

export default function Progress ({
  className,
  children
}) {
  const theme = useTheme().theme
  return (
    <div className={classNames(
      theme.progress.base,
      className && className
    )}
    >
      {children}
      progress
    </div>
  )
}

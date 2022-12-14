import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'

export default function Badge ({
  color = 'primary',
  size = 'md',
  className,
  children
}) {
  const theme = useTheme().theme.badge
  return (
    <span
      className={classNames(
        theme.base,
        theme.color[color],
        theme.size[size],
        className && className
      )}
    >
      {children}
    </span>
  )
}

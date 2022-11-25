import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'

const Badge = ({
  color,
  size,
  className,
  children
}) => {
  const theme = useTheme().theme.badge
  return (
    <span
      className={classNames(
        theme.base,
        color ? theme.color[color] : theme.color.base,
        size ? theme.size[size] : theme.size.base,
        className && className
      )}
    >
      {children}
    </span>
  )
}

export default Badge

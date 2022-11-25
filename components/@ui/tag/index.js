import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'

export default function Tag ({
  color = 'secondary-light',
  className,
  as: Component = 'span',
  children,
  ...rest
}) {
  const theme = useTheme().theme.tag
  return (
    <Component
      className={classNames(
        theme.base,
        theme.color[color],
        className && className
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}

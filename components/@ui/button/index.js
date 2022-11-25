import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'

export default function Button ({
  color,
  disabled = false,
  size,
  children,
  className,
  as: Component = 'button',
  ...rest
}) {
  const theme = useTheme().theme.button
  return (
    <Component
      className={classNames(
        theme.base,
        color ? theme.color[color] : theme.color.base,
        disabled && theme.disabled,
        size ? theme.size[size] : theme.size.base,
        className && className
      )}
      {...rest}
    >
      {typeof children !== 'undefined' && (
        <span className={classNames(theme.content)}>{children}</span>
      )}
    </Component>
  )
}

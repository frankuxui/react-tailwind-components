import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'

export default function Button ({
  color = 'primary',
  disabled = false,
  size = 'md',
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
        theme.color[color],
        disabled && theme.disabled,
        theme.size[size],
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

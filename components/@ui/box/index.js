import React from 'react'
import classNames from 'classnames'
// import { useTheme } from 'components/@ui/hooks/useTheme'

export default function Box ({
  className,
  as: Component = 'span',
  children,
  ...rest
}) {
  // const theme = useTheme().theme.tag
  return (
    <Component
      className={classNames(
        className && className
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}

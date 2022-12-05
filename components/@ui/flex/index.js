import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'

export default function Flex ({
  className,
  as: Component = 'div',
  children,
  ...rest
}) {
  const theme = useTheme().theme.flex
  return (
    <Component
      className={classNames(
        theme.base,
        className && className
      )}
      {...rest}
    >

      {children}
    </Component>
  )
}

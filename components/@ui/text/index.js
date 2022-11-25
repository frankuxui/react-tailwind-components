import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'

const Text = ({ children, variant, className, as: Component = 'div', size, ...rest }) => {
  const theme = useTheme().theme.text

  return (
    <Component
      className={classNames(
        theme.base,
        variant && theme.variant[variant],
        className && className,
        size && theme.size[size]
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Text

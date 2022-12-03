import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'
import ButtonGroup from './button-group'

const ButtonComponent = ({
  color = 'primary',
  disabled = false,
  size = 'md',
  children,
  className,
  as: Component = 'button',
  ...rest
}) => {
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

ButtonComponent.displayName = 'Button'
const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup
})
export default Button

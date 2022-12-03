import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'
import ButtonGroup from './button-group'

const ButtonComponent = ({
  color = 'primary',
  disabled = false,
  size = 'md',
  fullWidth = false,
  children,
  positionInGroup = 'none',
  className,
  as: Component = 'button',
  ...rest
}) => {
  const { buttonGroup: groupTheme, button: theme } = useTheme().theme
  return (
    <Component
      className={classNames(
        theme.base,
        theme.color[color],
        disabled && theme.disabled,
        theme.size[size],
        theme.fullWidth[fullWidth ? 'on' : 'off'],
        groupTheme.position[positionInGroup],
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

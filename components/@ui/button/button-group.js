import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'

function ButtonGroup ({
  children,
  className,
  ...rest
}) {
  const items = React.useMemo(() =>
    React.Children.map((child, index) =>
      React.cloneElement(child, {
        positionInGroup:
          index === 0 ? 'start' : index === (children.length) - 1 ? 'end' : 'middle'
      })
    ),
  [children.length]
  )
  const theme = useTheme().theme.buttonGroup
  console.log(children, 'here')
  return (
    <div className={classNames(theme.base, className)} role='group' {...rest}>
      {items}
    </div>
  )
};

ButtonGroup.displayName = 'Button.Group'
export default ButtonGroup

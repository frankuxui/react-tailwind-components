import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'

function ButtonGroup ({
  children,
  className,
  ...props
}) {
  const buttonitems = React.useMemo(() =>
    React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        positionInGroup:
          index === 0 ? 'start' : index === (children.length) - 1 ? 'end' : 'middle'
      })
    ),
  [children]
  )
  console.log(children)
  const theme = useTheme().theme.buttonGroup
  return (
    <div className={classNames(theme.base, className)} role='group' {...props}>
      {buttonitems}
    </div>
  )
};

ButtonGroup.displayName = 'Button.Group'
export default ButtonGroup

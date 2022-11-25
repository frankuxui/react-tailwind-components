import React from 'react'
import classNames from 'classnames'
import Close from 'components/@ui/close'
import { useTheme } from 'components/@ui/hooks/useTheme'

export default function Alert ({ children, color, className, onClose, ...rest }) {
  const theme = useTheme().theme.alert
  return (
    <div
      className={classNames(
        theme.base,
        color ? theme.color[color] : theme.color.base,
        typeof onClose === 'function' && 'pr-14',
        className && className
      )}
      role='alert'
      {...rest}
    >
      {children}
      {typeof onClose === 'function' && (
        <Close onClose={onClose} className='absolute top-2 right-2' />
      )}
    </div>
  )
}

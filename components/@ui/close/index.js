import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'

export default function Close ({ className, size, onClose, customIcon, ...rest }) {
  const theme = useTheme().theme.close

  const defaultICon = (
    <svg
      style={{ width: size || 24, height: size || 24 }}
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z'
      />
    </svg>
  )

  return (
    <button
      className={classNames(
        theme.base,
        className && className
      )}
      aria-label='close'
      type='button'
      onClick={onClose}
      {...rest}
    >
      <>
        {customIcon || defaultICon}
      </>
    </button>
  )
}

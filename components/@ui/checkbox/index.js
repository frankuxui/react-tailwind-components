import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'
import Ripple from 'components/@ui/ripple'
import { useRipple } from 'components/@ui/hooks/useRipple'

export default function Checkbox ({
  id,
  name,
  value,
  checked = false,
  disabled = false,
  ripple = true,
  size = 'md',
  label = false,
  className,
  children
}) {
  const theme = useTheme().theme.checkbox
  const { addRipple, rippleArray } = useRipple()
  const [isChecked, setIsChecked] = React.useState(checked)
  const handleCheck = (event) => {
    setIsChecked(event.target.checked)
  }
  return (
    <>
      {label
        ? (
          <label
            htmlFor={id}
            className={classNames(
              theme.label,
              theme.disabled[disabled ? 'on' : 'off'],
              className && className
            )}
          >
            <span
              className={classNames(theme.base)}
              onMouseDown={ripple ? (event) => addRipple(event) : () => {}}
            >
              <input
                id={id}
                name={name}
                type='checkbox'
                className={classNames(theme.input)}
                onChange={(event) => handleCheck(event)}
                value={value}
                checked={isChecked}
                disabled={disabled}
              />
              {ripple && (
                <Ripple rippleArray={rippleArray} />
              )}
              <svg
                aria-hidden='true'
                viewBox='0 0 24 24'
                focusable='false'
                className={classNames(
                  theme.icon.base,
                  theme.icon.size[size]
                )}
              >
                <path
                  fill='currentColor'
                  d={
              isChecked
                ? 'M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z'
                : 'M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z'

            }
                />
              </svg>
            </span>
            <span className='mt-0.5 ml-0.5'>{label}</span>
          </label>
          )
        : (

          <span
            className={classNames(
              theme.base,
              theme.disabled[disabled ? 'on' : 'off'],
              className && className
            )}
            onMouseDown={ripple ? (event) => addRipple(event) : () => {}}
          >
            <input
              id={id}
              name={name}
              type='checkbox'
              className={classNames(theme.input)}
              onChange={(event) => handleCheck(event)}
              value={value}
              checked={isChecked}
              disabled={disabled}
            />
            {ripple && (
              <Ripple rippleArray={rippleArray} />
            )}
            <svg
              aria-hidden='true'
              viewBox='0 0 24 24'
              focusable='false'
              className={classNames(
                theme.icon.base,
                theme.icon.size[size]
              )}
            >
              <path
                fill='currentColor'
                d={
            isChecked
              ? 'M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z'
              : 'M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z'

          }
              />
            </svg>
            {children}
          </span>
          )}
    </>
  )
}

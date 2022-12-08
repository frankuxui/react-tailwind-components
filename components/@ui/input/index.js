import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'
import PropTypes from 'prop-types'

const InputComponent = React.forwardRef(
  ({
    size = 'md',
    className,
    placeholder,
    type = 'text',
    variant = 'filled',
    isValid = false,
    id,
    name,
    value,
    onChange,
    ...rest
  },
  ref) => {
    const theme = useTheme().theme.input
    return (
      <input
        className={classNames(
          theme.base,
          theme.size[size],
          theme.variant[variant],
          className && className

        )}
        ref={ref}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />

    )
  })

InputComponent.displayName = 'Input'
export default InputComponent

InputComponent.propTypes = {
  variant: PropTypes.string
}

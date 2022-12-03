import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'

export default function Progress ({
  color = 'primary',
  label = 'progressbar',
  labelPosition = 'none',
  labelProgress = false,
  progress,
  striped = false,
  animated = false,
  size = 'md',
  rounded = 'md',
  className,
  multiple = [],
  ...rest
}) {
  const theme = useTheme().theme.progress
  const id = React.useId()
  return (
    <div
      id={id}
      aria-label={label}
      aria-valuenow={progress}
      role='progressbar'
      {...rest}
    >
      {label && labelPosition === 'outside' && (
        <div className={theme.label}>
          <span>{label}</span>
          {labelProgress && <span>{progress}%</span>}
        </div>
      )}
      <div className={classNames(
        theme.base,
        theme.size[size],
        theme.rounded[rounded],
        className
      )}
      >
        {multiple && multiple.length >= 1
          ? (
            <>
              {multiple.map((bar, index) => (
                <div
                  key={bar.id || index}
                  className={classNames(
                    theme.bar,
                    theme.color[bar.color],
                    theme.size[size],
                    theme.striped[bar.striped ? 'on' : 'off'],
                    theme.animated[bar.animated ? 'on' : 'off']
                  )}
                  style={{ width: `${bar.progress}%` }}
                >
                  {bar.label && bar.labelPosition === 'inside' && bar.label}
                </div>
              ))}
            </>
            )
          : (
            <div
              className={classNames(
                theme.bar,
                theme.color[color],
                theme.size[size],
                theme.striped[striped ? 'on' : 'off'],
                theme.animated[animated ? 'on' : 'off']
              )}
              style={{ width: `${progress}%` }}
            >
              {label && labelPosition === 'inside' && label}
            </div>
            )}
      </div>
    </div>
  )
}

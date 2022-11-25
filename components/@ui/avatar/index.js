import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'

const SVGAvatarContent = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
const SVGAvatar = ({ className }) => {
  return (
    <svg className={className} fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
      <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
    </svg>
  )
}

const AvatarName = ({ name, className }) => {
  function nameParser (string) {
    return string?.charAt(0).toUpperCase()
  }
  return (
    <span className={className}>
      {nameParser(name)}
    </span>
  )
}

const AvatarStatus = ({ className }) => {
  return (
    <span className={className} />
  )
}

export default function Avatar ({
  alt = '',
  children,
  image,
  rounded = false,
  size = 'md',
  stacked = false,
  status,
  color = 'secondary-light',
  statusPosition = 'top-left',
  name = '',
  className,
  ...rest
}) {
  const theme = useTheme().theme.avatar
  const imgClassName = classNames(
    rounded && theme.rounded,
    stacked && theme.stacked,
    theme.img.on,
    theme.size[size]
  )

  return (
    <div
      className={classNames(
        theme.base,
        className
      )}
      {...rest}
    >
      <div className='relative'>
        {image
          ? (
            <img
              alt={alt}
              className={classNames(
                imgClassName,
                theme.img.on
              )}
              src={image}
            />
            )
          : name
            ? (
              <div
                className={classNames(
                  theme.img.off,
                  theme.initials.base,
                  rounded && theme.rounded,
                  stacked && theme.stacked,
                  theme.size[size],
                  color && theme.initials.color[color]
                )}
              >
                <AvatarName
                  className={classNames(
                    theme.initials.text
                  )}
                  name={name}
                />
              </div>
              )
            : (
              <SVGAvatarContent className={classNames(
                imgClassName,
                theme.img.off,
                color && theme.initials.color[color]
              )}
              >
                <SVGAvatar className={theme.img.placeholder} />
              </SVGAvatarContent>
              )}
        {status && (
          <AvatarStatus
            className={classNames(
              theme.status.base,
              theme.status[status],
              theme.statusPosition[statusPosition]
            )}
          />
        )}
      </div>
      {children && <div>{children}</div>}
    </div>
  )
}

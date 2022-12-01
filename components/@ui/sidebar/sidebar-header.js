import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'

export default function SidebarHeader ({ className, children, ...rest }) {
  const theme = useTheme().theme.sidebar
  return (
    <header
      className={classNames(
        theme.header,
        className && className
      )}
      {...rest}
    >
      {children}
    </header>
  )
}

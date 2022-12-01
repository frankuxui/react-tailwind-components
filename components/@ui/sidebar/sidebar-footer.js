import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'

export default function SidebarFooter ({ className, children, ...rest }) {
  const theme = useTheme().theme.sidebar
  return (
    <footer
      className={classNames(
        theme.footer,
        className && className
      )}
      {...rest}
    >
      {children}
    </footer>
  )
}

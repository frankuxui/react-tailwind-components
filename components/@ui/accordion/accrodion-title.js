import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'
import { useAccordionContext } from './accordion-context'

export default function AccordionTitle ({
  as: Heading = 'h5',
  children,
  className,
  ...rest
}) {
  const { border, isOpen, setOpen } = useAccordionContext()
  const theme = useTheme().theme.accordion.title

  const onClick = () => typeof setOpen !== 'undefined' && setOpen()

  return (
    <button
      className={classNames(
        theme.base,
        theme.border[border ? 'on' : 'off'],
        theme.open[isOpen ? 'on' : 'off'],
        className
      )}
      onClick={onClick}
      type='button'
      {...rest}
    >
      <Heading className={theme.heading}>
        {children}
      </Heading>
      <svg
        aria-hidden
        className={classNames(theme.arrow.base, theme.arrow.open[isOpen ? 'on' : 'off'])}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M6 9l6 6 6-6' />
      </svg>
    </button>
  )
};

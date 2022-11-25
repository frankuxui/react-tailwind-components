import React from 'react'
import classNames from 'classnames'
import { useTheme } from 'components/@ui/hooks/useTheme'

// Card
function Card ({
  className,
  children,
  ...rest
}) {
  const theme = useTheme().theme.card
  return (
    <article
      className={classNames(
        theme.base,
        className && className
      )} {...rest}
    >
      {children}
    </article>
  )
}

// Content
function CardContent ({ className, children, border, ...rest }) {
  const theme = useTheme().theme.card
  return (
    <section
      className={classNames(
        theme.content.base,
        border && theme.content.border,
        className && className
      )} {...rest}
    >
      {children}
    </section>
  )
}

// Header
function CardHeader ({ className, children, border, ...rest }) {
  const theme = useTheme().theme.card
  return (
    <header
      className={classNames(
        theme.header.base,
        className && className
      )} {...rest}
    >
      {children}
    </header>
  )
}

// Body
function CardBody ({ className, children, border, ...rest }) {
  const theme = useTheme().theme.card
  return (
    <section
      className={classNames(
        theme.body.base,
        border && theme.body.border,
        className && className
      )} {...rest}
    >
      {children}
    </section>
  )
}

// Footer
function CardFooter ({ className, children, border, ...rest }) {
  const theme = useTheme().theme.card
  return (
    <footer
      className={classNames(
        theme.footer.base,
        border && theme.footer.border,
        className && className
      )} {...rest}
    >
      {children}
    </footer>
  )
}

Card.Content = CardContent
Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

export default Card

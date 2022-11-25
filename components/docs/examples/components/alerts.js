import Alert from 'components/@ui/alert'
import React from 'react'

// Basic example

export function BasicAlert () {
  return (
    <Alert>A simple alert—check it out!</Alert>
  )
}

// Colors

export function ColorsAlert () {
  return (
    <>
      <Alert> A simple alert—check it out! </Alert>
      <Alert variant='filled.primary'> A simple primary alert—check it out! </Alert>
      <Alert variant='filled.secondary'> A simple secondary alert—check it out! </Alert>
      <Alert variant='filled.cta'> A simple cta alert—check it out! </Alert>
      <Alert variant='filled.warning'> A simple warning alert—check it out! </Alert>
      <Alert variant='filled.dark'> A simple dark alert—check it out! </Alert>
    </>
  )
}

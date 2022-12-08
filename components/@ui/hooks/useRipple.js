import React from 'react'

export const useRipple = () => {
  const useDebouncedRippleCleanUp = (rippleCount, cleanUpFunction) => {
    React.useLayoutEffect(() => {
      let bounce = null
      if (rippleCount > 0) {
        clearTimeout(bounce)

        bounce = setTimeout(() => {
          cleanUpFunction()
          clearTimeout(bounce)
        }, 550 * 4)
      }

      return () => clearTimeout(bounce)
    }, [rippleCount, cleanUpFunction])
  }
  const [rippleArray, setRippleArray] = React.useState([])

  useDebouncedRippleCleanUp(rippleArray.length, () => {
    setRippleArray([])
  })

  const addRipple = event => {
    const rippleContainer = event.currentTarget.getBoundingClientRect()
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height
    const x = event.pageX - rippleContainer.x - size / 2
    const y = event.pageY - rippleContainer.y - size / 2
    const newRipple = {
      x,
      y,
      size
    }

    setRippleArray([...rippleArray, newRipple])
  }
  return { rippleArray, addRipple }
}

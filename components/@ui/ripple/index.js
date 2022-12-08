import React from 'react'

const Ripple = ({ rippleArray, color }) => {
  return (
    <div className='absolute inset-0'>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              className='absolute inset-0 scale-0 rounded-full animate-ripple'
              key={'span' + index}
              style={{
                backgroundColor: color || '#001efe50',
                // top: ripple.y,
                // left: ripple.x,
                width: ripple.size,
                height: ripple.size
              }}
            />
          )
        })}
    </div>
  )
}

export default Ripple

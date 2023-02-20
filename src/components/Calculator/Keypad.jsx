import React from 'react'

const Keypad = ({ keypadEntry }) => {

  return (
    <div className='keypadContainer'>
      {['1','2','3','4','5','6','7','8','9','', '0',''].map(num => (
        <button onClick={() => keypadEntry(num)}>{num}</button>
      ))}
    </div>
  )
}

export default Keypad
import React from 'react'

const InputField = ({entry, updateEntry}) => {
  return (
    <>
      <input
        placeholder='Type Number Here'
        className='input' 
        type='text' 
        value={entry} 
        onChange={updateEntry}
      />
    </>
  )
}

export default InputField
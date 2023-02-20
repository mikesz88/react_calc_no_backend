import React from 'react'

const Operations = ({updateOperation}) => {
  return (
    <div className='operationContainer'>
      {['<-', 'Clear', '+', '-', 'x', '/', '=']
        .map(operation => (
              <button
                key={operation}
                onClick={() => updateOperation(operation)}
              >
                {operation}
              </button>
      ))}
    </div>
  )
}

export default Operations
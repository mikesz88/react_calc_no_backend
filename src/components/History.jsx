import React from 'react'

export const History = ({history}) => {
  
  console.log(history);

  return (
    <>
      {history.length !== 0 && <div className='historyTitle'>History</div>}
      <ol>
        {history.length !== 0 && history.map(({ num1, num2, operation, answer }, index) => (
          <li
          key={num1 + num2 + operation + answer}
          >
            {num1} {operation} {num2} = {answer}
          </li>
        ))}
      </ol>
    </>
  )
}

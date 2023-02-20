import React, { useState } from 'react'
import { INIT_STATE } from '../../constants/CalculatorState'

const CalcContainer = () => {
  const [state, setState] = useState(INIT_STATE);

  const updateHistory = (equation) => {
    setState(prevState => ({
      ...prevState,
      history: [...prevState.history, equation],
    }))
  }

  return (
    <div className='calcContainer'>CalcContainer</div>
  )
}

export default CalcContainer
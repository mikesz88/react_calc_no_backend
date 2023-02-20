import React, { useState } from 'react'
import { INIT_STATE } from '../../constants/CalculatorState'
import InputField from './InputField';

const CalcContainer = () => {
  const [state, setState] = useState(INIT_STATE);

  const updateEntry = (e) => {
    const entry = e.target.value;
    if (Number(entry)) {
      setState(prevState => ({
        ...prevState,
        entry: Number(entry),
      }))
    } else if (entry.length === 0) {
      setState(prevState => ({
        ...prevState,
        entry: '',
      }))
    }
  }

  const updateHistory = (equation) => {
    setState(prevState => ({
      ...prevState,
      history: [...prevState.history, equation],
    }))
  }

  console.log(state.entry);

  return (
    <div className='calcContainer'>
      <InputField entry={state.entry} updateEntry={updateEntry} />
    </div>
  )
}

export default CalcContainer
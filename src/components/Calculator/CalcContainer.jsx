import React, { useState } from 'react'
import { INIT_STATE } from '../../constants/CalculatorState'
import InputField from './InputField';
import Keypad from './Keypad';
import Operations from './Operations';

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

  const reassignEntryToNum1 = () => {
    setState(prevState => ({
      ...prevState,
      num1: prevState.entry,
      entry: '',
    }))
  }

  const keypadEntry = (num) => {
    if (num) {
      setState(prevState => ({
        ...prevState,
        entry: Number(prevState.entry + num),
      }))
    }
  }

  const updateOperation = (currentOperation) => {
    if (currentOperation !== '=') {
      setState(prevState => ({
        ...prevState,
        currentOperation,
      }))
    }
    operationAction(currentOperation);
    }


  const solveEquation = () => {
    switch (state.currentOperation) {
      case "+":
        setState(prevState => ({
          ...prevState,
          num1: '',
          currentOperation: '',
          entry: prevState.num1 + prevState.entry,
          history: [
            ...prevState.history,
            {
              num1: prevState.num1,
              num2: prevState.entry,
              operation: prevState.currentOperation,
              answer: prevState.num1 + prevState.entry,
            }
          ]
        }))
      break;
      case "-":
        setState(prevState => ({
          ...prevState,
          num1: '',
          currentOperation: '',
          entry: prevState.num1 - prevState.entry,
          history: [
            ...prevState.history,
            {
              num1: prevState.num1,
              num2: prevState.entry,
              operation: prevState.currentOperation,
              answer: prevState.num1 - prevState.entry,
            }
          ]
        }))
      break;
      case "x":
        setState(prevState => ({
          ...prevState,
          num1: '',
          currentOperation: '',
          entry: prevState.num1 * prevState.entry,
          history: [
            ...prevState.history,
            {
              num1: prevState.num1,
              num2: prevState.entry,
              operation: prevState.currentOperation,
              answer: prevState.num1 * prevState.entry,
            }
          ]
        }))
      break;
      case "/":
        setState(prevState => ({
          ...prevState,
          num1: '',
          currentOperation: '',
          entry: prevState.num1 / prevState.entry,
          history: [
            ...prevState.history,
            {
              num1: prevState.num1,
              num2: prevState.entry,
              operation: prevState.currentOperation,
              answer: prevState.num1 / prevState.entry,
            }
          ]
        }))
      break;
    
      default:
        break;
    }
  }

  const resetState = () => setState(prevState => ({
    ...INIT_STATE,
    history: prevState.history,
  }));

  const operationAction = (operation) => {
    switch (operation) {
      case '<-':
        
      break;
      case 'Clear':
        resetState();
      break;
      case '=':
        solveEquation();
      break;
      default:
        reassignEntryToNum1();
        break;
    }
  }

  const updateHistory = (equation) => {
    setState(prevState => ({
      ...prevState,
      history: [...prevState.history, equation],
    }))
  }


  return (
    <div className='calcContainer'>
      <InputField
        entry={state.entry}
        num1={state.num1}
        operation={state.currentOperation}
        updateEntry={updateEntry}
      />
      <div className='numberFlex'>
        <Keypad keypadEntry={keypadEntry} />
        <Operations updateOperation={updateOperation} />
      </div>
    </div>
  )
}

export default CalcContainer
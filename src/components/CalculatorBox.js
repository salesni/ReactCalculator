import React from 'react'
import ResultDisplay from './ResultDisplay'
import ButtonContainer from './ButtonContainer'

const CalculatorBox = () => {
  return (
    <div className='calculatorBox'>
        <ResultDisplay/>
        <ButtonContainer/>
    </div>
  )
}

export default CalculatorBox
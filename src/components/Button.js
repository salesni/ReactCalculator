import React from 'react'
import { useCalculatorContext } from '../context/CalculatorProvider'

//function to determine the type of button and add its respective class
const classByButton = (button,operation) =>{
    let classAddition = '';
    switch(button){
        case 'x': case '/': case '+': case '-': case '=':
            classAddition = 'operations';
            break
        
        case 'AC': case "+-": case "%":
            classAddition = 'toggleButtons';
            break;
        
        case 0:
            classAddition = 'zero';
            break
        default:
            classAddition = '';
            break;
    }
    //the condition select the class for the operation toggled button
    if(classAddition === 'operations' && operation === button ){
        classAddition+='-pressed';
    }
    return classAddition;
}

const Button = (props) => {
    const {calculatorState,setCalculatorState} = useCalculatorContext();
    return (
        <button onClick={()=> setCalculatorState({type:props.value})} 
         className={ classByButton(props.value,calculatorState.operation)+ ' button'} >
            {   //If no value is assigned to the result it will display AC which deletes ANS and resets
                //the operation status.
                //AC == ALL CLEAR C == CLEAR ENTRY
                props.value === 'AC' && (calculatorState.num !== 0) ?
                    'C' : props.value
            }
        </button>
    )
}

export default Button
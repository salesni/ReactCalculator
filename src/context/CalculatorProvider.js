import React, {useReducer} from 'react'
const CalculatorContext = React.createContext('');


const operate = (state,action) =>{
    //State variable to change depending on the case
    let tempState = {
        operation:'',
        ans: 0,
        num:0,
        solved:false,
        numChangedPostOper:false
    };
    //Character of the clicked button
    let btnClicked = action.type;
    //function to perform the arithmetic operation
    let operation = (ans,num,oper) => {
        switch(oper){
            case '+':
                return ans + num;
            case '-':
                return ans - num;
            case 'x':
                return ans * num;
            case '/':
                return ans / num;
            default:
                return ans ;
        }
    }
    //state machine depending on the clicked button
    switch(btnClicked){
        case '+': case '-': case 'x': case '/':
            //When there is no answer the value clicked will be assigned to the result
            if (state.ans === 0){
                tempState.ans = parseFloat(state.num);
            }else{
                //if another number has been entered to the result
                //the operation will be performed
                if (state.numChangedPostOper){
                    tempState.ans = operation(state.ans,parseFloat(state.num),state.operation);
                    tempState.num = 0;
                } 
                //if not it will toggle the desired operation 
                else{
                    tempState.ans = state.ans;
                    tempState.num = state.num;
                }
            }
            //assign the missing values for the state
            tempState.solved = state.solved;
            tempState.operation = btnClicked;
            return tempState;
        case '=':
            //calculate the result and turn on flag to reset the values for new values
            tempState.ans = operation(state.ans,parseFloat(state.num),state.operation);
            tempState.num = state.num;
            tempState.solved = true;
            tempState.operation = state.operation;
            
            return tempState
        case '+-':
            //change the number sign
            tempState.num = (parseFloat(state.num) * -1).toString();
            tempState.ans = state.ans;
            tempState.operation = state.operation;
            tempState.solved =state.solved;
            return tempState;
        
        case '%':
            //Divide by 100
            tempState.num  = (parseFloat(state.num) / 100).toString();;
            tempState.ans = state.ans;
            tempState.operation = state.operation;
            tempState.solved =state.solved;
            return tempState;
        
        case 'AC':
            //First case will erase only the value introduced
            if(state.num !== 0){
                tempState.num = 0;
                tempState.ans = state.ans;
                tempState.operation = state.operation;
                tempState.solved =state.solved;
            }
            //the other case resets the whole memory
            return tempState;
        
        case '.' :
            //assigns the integer value as float
            let string = state.num.toString();
            //if it has no decimal, add it
            if(!string.includes('.')){
                tempState.num = string + '.';
            }else{
                tempState.num = state.num;
            }
            tempState.ans = state.ans;
            tempState.operation = state.operation;
            tempState.solved =state.solved;
            return tempState;
        default:
            
            if (!state.solved){
                tempState.ans = state.ans;
                tempState.operation = state.operation;
                if(state.operation !== '' ){
                    tempState.numChangedPostOper = true;
                }
            }else{
                state.num = 0;
            }
            //Appends the numbers to the value presented
            let numString = state.num.toString();
            if (numString.length === 1 && numString[0] === '0'){
                tempState.num =  btnClicked;
            }else {
                tempState.num = numString + btnClicked;
            }
     
            return tempState;
    }
}


const CalculatorProvider = ({children}) => {
    const initialState = {
        operation:'',
        ans: 0,
        num:0,
        solved:false,
        numChangedPostOper:false
    };
    //Reducer State initialized 
    const [calculatorState, setCalculatorState] = useReducer(operate,initialState);
    const providerState = {
        calculatorState, setCalculatorState
    }

    return (
        <CalculatorContext.Provider value = {providerState}>
            {children}
        </CalculatorContext.Provider>
    )
}

export const useCalculatorContext = () => React.useContext(CalculatorContext);

export default CalculatorProvider;
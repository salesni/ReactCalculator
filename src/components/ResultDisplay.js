import React from 'react'
import { useCalculatorContext } from '../context/CalculatorProvider'

const decimalsRepeated = num => {
    // Convert to String
    const numStr = String(num);
    let decimalRepeated = [{repeated:0,firstDecimalIndex:-1},{repeated:0,firstDecimalIndex:-1},
        {repeated:0,firstDecimalIndex:-1},{repeated:0,firstDecimalIndex:-1},{repeated:0,firstDecimalIndex:-1},
        {repeated:0,firstDecimalIndex:-1},{repeated:0,firstDecimalIndex:-1},{repeated:0,firstDecimalIndex:-1},
        {repeated:0,firstDecimalIndex:-1},{repeated:0,firstDecimalIndex:-1}
    ];
    // String Contains Decimal
    if (numStr.includes('.')) {
        let decimals = numStr.split('.')[1];
        //search for repetitive consecutive decimals
        for( let index = 1; index < decimals.length; index ++){
            if( decimals[index] === decimals[index-1]){
                decimalRepeated[decimals[index]]['repeated'] += 1;
                if(decimalRepeated[decimals[index]]['firstDecimalIndex'] === -1)
                    decimalRepeated[decimals[index]]['firstDecimalIndex'] = index;
            }else{
                decimalRepeated[decimals[index]]['repeated'] = 0;
                decimalRepeated[decimals[index]]['firstDecimalIndex'] = -1;
            }

        }
        console.log(decimalRepeated);
        for (let index = 0; index < decimalRepeated.length; index ++){
            //has repetitive decimals
            if(decimalRepeated[index]['repeated'] > 5){
                return [true,decimalRepeated[index]['firstDecimalIndex']];
            }
        }
    }
    // String Does Not Contain Decimal
    return [false,-1];
 }

const ResultDisplay = () => {
    const {calculatorState} = useCalculatorContext();
    return (
        <div className='resultDisplay'>
            <div className='ANS'>
                <p>ANS: 
                    { (
                        () =>{
                            const [decRepeated,indexOfRep] = decimalsRepeated(calculatorState.ans)
                            if(decRepeated){
                                return calculatorState.ans.toFixed(indexOfRep);
                            }else{
                                return calculatorState.ans;
                            }
                        }
                      )()
                    }
                </p>
            </div>
            <div>
                <p>{calculatorState.num}</p>
            </div>
        </div>
    )
}

export default ResultDisplay
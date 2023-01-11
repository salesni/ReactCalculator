import React from 'react'
import Button from './Button';
//List for the buttons present on the calculator
const buttonList = [
    "AC", "+-", "%", "/",
    7, 8, 9, "x",
    4, 5, 6, "-",
    1, 2, 3, "+",
    0, ".", "=",
];

const ButtonContainer = () => {
    return (
        <div className='buttonContainer'>
            {
                buttonList.map((button,index) => (
                    <Button value = {button} key = {index} />
                ))
            }
        </div>
    )
}

export default ButtonContainer
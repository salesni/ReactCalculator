import React from 'react'

const Notes = () => {
  return (
        <div className='notes'>
            <h1>
                Notes:
            </h1>
            <ul>
                <li>
                    AC -> ALL CLEAR, restores the calculator to initial state
                </li>
                <li>
                    C -> CLEAR ENTRY, restores the tipped value to 0.
                </li>
                <li>
                    First Screen displays the ANS (result)
                </li>
                <li>
                    Second Screen displays the typed value (input)
                </li>
                <li>
                    When "=" is clicked result is displayed, but the next number will reset the screens
                </li>
            </ul>
         </div>
  )
}

export default Notes
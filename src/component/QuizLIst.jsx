import React, { useEffect, useState } from 'react'
import './Quiz.css'
function QuizLIst({ question, options,handleClick,currentAns }) {
    
    return (
        <>
            <h1>{question}</h1> <br/>
            <ul>
                {options.map((item, index) => (
                    <li key={index}  className={`${'list'} ${currentAns === item  ? 'selected' :''}`} onClick={()=> handleClick(item)}>{item}</li>
                ))}
            </ul>

        </>
    )
}

export default QuizLIst


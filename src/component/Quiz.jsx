import React, { useState } from 'react'
import QuizLIst from './QuizLIst'

function QuizFunction() {
    const questions = [
        {
            question: 'What is React ?',
            option: ['CSS Framework', 'JavaScript Library', 'React Framework', 'Testing Tool'],
            answer: 'JavaScript Library'
        },
        {
            question: 'Who Made This Quiz App ?',
            option: ['Mohammad Raza', 'Tabish Alam', 'Suresh Sahu', 'Rahul Kumar'],
            answer: 'Mohammad Raza'
        },
        {
            question: 'Who is the developer of React ?',
            option: ['Facebook', 'Meta', 'Whatsapp', 'Danish Richi'],
            answer: 'Facebook'
        },
    ]
    const [questionIndex, setQuestionIndex] = useState(0);
    const [currentAns, setCurrentAns] = useState(null)
    const [score , setScore] = useState(0)

    const handleClick = (option) => {
        setCurrentAns(option)
        if(option === questions[questionIndex].answer){
            setScore(score + 1);
        }
    }

    const handleNextButton = () => {
        setQuestionIndex(questionIndex + 1)
        setCurrentAns(null)
    }
    return (
        <div className='container'>
            {questionIndex < questions.length ? <div>
                <QuizLIst question={questions[questionIndex].question}
                    options={questions[questionIndex].option} handleClick={handleClick} currentAns={currentAns} />
                <button disabled={currentAns === null} className={currentAns === null ? 'disableBtn' : 'button'} onClick={handleNextButton}>Next Question</button>
            </div> : <div><h1 className='score'>Your score is {score} Out of {questionIndex} </h1> {score == questionIndex ? <h3>Congratulations 🎉🎊 your All answer are correct 👍</h3>: <h1>Thank you</h1>} </div>}
            
        </div>

    )
}

export default QuizFunction


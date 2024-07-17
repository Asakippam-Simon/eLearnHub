import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    questionText: 'Which of the following is not matter?',
    options: [
      { answerText: 'Water', isCorrect: false },
      { answerText: 'Air', isCorrect: false },
      { answerText: 'Fire', isCorrect: true },
      { answerText: 'Wood', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the population of Ghana?',
    options: [
      { answerText: '20M', isCorrect: false },
      { answerText: '15M', isCorrect: false },
      { answerText: '10M', isCorrect: false },
      { answerText: '30M', isCorrect: true },
    ],
  },
  {
    questionText: 'Which of the following continents does Ghana belong to?',
    options: [
      { answerText: 'Africa', isCorrect: true },
      { answerText: 'America', isCorrect: false },
      { answerText: 'Asia', isCorrect: false },
      { answerText: 'Europe', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of the following continents does Ghana belong to?',
    options: [
      { answerText: 'Africa', isCorrect: true },
      { answerText: 'America', isCorrect: false },
      { answerText: 'Asia', isCorrect: false },
      { answerText: 'Europe', isCorrect: false },
    ],
  },
  
  // More questions will be added here
];

const AssessmentQuestion = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds per question
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswerOptionClick(false);
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
	setScore(score + 1);
	console.log('Correct answer! Score:', score +1);
    } else {
	console.log('Incorrect answer. Score:', score);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(60); // reset timer for next question
    } else {
	navigate('/assessment/results',{state: { score }});
    }
  };

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p>{questions[currentQuestion].questionText}</p>
      <div>
        {questions[currentQuestion].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswerOptionClick(option.isCorrect)}>
            {option.answerText}
          </button>
        ))}
      </div>
      <div>Time left: {timeLeft} seconds</div>
    </div>
  );
};

export default AssessmentQuestion;

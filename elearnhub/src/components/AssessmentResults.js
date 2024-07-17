import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const AssessmentResults = () => {
  const location = useLocation();
    const { score } = location.state || { score: 0 };
    
    console.log('Location state:', location.state);
    
  return (
    <div>
      <h1>Your Score: {score}</h1>
      <p>
        {score >= 3
          ? 'Great job! You passed the assessment.'
          : 'You did not pass the assessment. Try again.'}
      </p>
      <Link to="/assessment">
        <button>Go to Home</button>
      </Link>
    </div>
  );
};

export default AssessmentResults;

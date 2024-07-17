import React from 'react';
import { Link } from 'react-router-dom';

const AssessmentHome = () => {
  return (
    <div>
      <h1>Welcome to Today's Assessment</h1>
      <p>Answer the following questions within the time limit. Good luck!</p>
      <Link to="/assessment/questions">
        <button>Start Assessment</button>
      </Link>
    </div>
  );
};

export default AssessmentHome;

import React from 'react';
import { Link } from 'react-router-dom';

const AssessmentHome = () => {
  return (
    <form>
      <h2>Take Assessment</h2>
       <Link to="/assessment/questions">
        <button>Start Assessment</button>
      </Link>
    </form>
  );
};

export default AssessmentHome;

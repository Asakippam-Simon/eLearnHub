import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UploadMaterial from './components/UploadMaterial';
import LectureMaterial from './components/LectureMaterial';
import AssessmentHome from './components/AssessmentHome';
import AssessmentQuestion from './components/AssessmentQuestion';
import AssessmentResults from './components/AssessmentResults';
import DownLoad from './components/DownLoad';
import './index.css';

const App = () => {
  return (
      <Router>
	  <Header />
	  <div className="App">
	      <Routes>
		  <Route path="/" element={<Home />} />
		  <Route path="/signup" element={<SignUp />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/upload-material" element={<UploadMaterial />} />
		  <Route path="/upload-lecture-material" element={<LectureMaterial />} />
		  <Route path="/Download" element={<DownLoad />} />
	          <Route path="/assessment" element={<AssessmentHome />} />
                  <Route path="/assessment/questions" element={<AssessmentQuestion />} />
                  <Route path="/assessment/results" element={<AssessmentResults />} />
	       </Routes>
           </div>
    </Router>
  );
};

export default App;

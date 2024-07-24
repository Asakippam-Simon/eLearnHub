//import React from 'react';
import UploadMaterial from './UploadMaterial';//Assigment only
//import LectureMaterial from './LectureMaterial';//Lecture Notes only
import Logout from './Logout';
import AssessmentHome from './AssessmentHome';
import React, { useEffect, useState } from 'react';
import { fetchUploadedFiles } from './FetchFiles';
const Dashboard = () => {
     const [fileUrls, setFileUrls] = useState([]);

  useEffect(() => {
    const getFiles = async () => {
      const urls = await fetchUploadedFiles();
      setFileUrls(urls);
    };
    getFiles();
  }, []);
    //
    return (
	<ul>
	<div><UploadMaterial /></div>
	    <div><AssessmentHome /></div>
	    <div><Logout/></div>
	    <div>
		<form>
		<h2>Uploaded Materials</h2>
           {fileUrls.map((url, index) => (
          <li key={index}>
            <a href={url} target="_blank" rel="noopener noreferrer">Download Material {index + 1}</a>
          </li>
           ))}
		    </form>
      
    </div>
	</ul>    
  );
};

export default Dashboard;

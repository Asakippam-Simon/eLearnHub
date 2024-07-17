import React, { useEffect, useState } from 'react';
import { fetchUploadedFiles } from '../utils/fetchFiles';
//import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
	<section>
	     <div class="container">
		<h1>Welcome to eLearnHub</h1>
		<p>eLearnHub is a centralized platform for storing and sharing educational materials and taking online assessments</p>
		<p>Sign Up or Login to submit your assignment or take today's online assessment.</p>
	     </div>

	     <div class="container">
		 <h2>Uploaded Materials</h2>
		 <ul>
		     {fileUrls.map((url, index) => (
			 <li key={index}>
			     <a href={url} target="_blank" rel="noopener noreferrer">Download Material {index + 1}</a>
			 </li>
		     ))}
		 </ul>
	     </div>
	   
    <main>
        <section id="articles">
            <div class="container">
                <h1>Latest Articles</h1>
            </div>
        </section>

        <section id="home">
            <div class="container">
                <h2>Our Mission</h2>
                <h4>Never Stop Learning</h4>
                <p>This platform is designed to provide you with a centralized space to download your course materials,upload your assignments, take your assessments online, and allow me to track your progress. With easy access to lecture materials, online quizzes, and mid-semester assessments, eLearnHub aims to enhance teaching and learning efficiency.</p>
            </div>
            <div class="cylindrical-link-container">
                <div class="cylindrical-link">
                    <a href="#">Discover More</a>
                </div>
            </div> 
        </section>
        <section id="about">
            <div class="container">
                <h2>About eLearnHub</h2>
                <p>eLearnHub is the end of foundation project as part of the ALX SE program where learners choose a project of their own to exhibit the skills they have aquired for the 8 months of learning.</p>
            </div>
       </section>
    </main>
	
	    <footer>
		<div class="container">
		    <p>&copy; 2024 eLearnHub. All rights reserved.</p>
		</div>     
		<div class="container">
		    <p>Contact: 0007935621</p>
		    <p> Address: Gbolo Hights, Gbolo</p>
		    <p>Email: info@eLearnHub.com</p>
		</div>
	    </footer>
</section>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { fetchUploadedFiles } from './FetchFiles';

const DownLoad = () => {
  const [fileUrls, setFileUrls] = useState([]);

  useEffect(() => {
    const getFiles = async () => {
      const urls = await fetchUploadedFiles();
      setFileUrls(urls);
    };
    getFiles();
  }, []);

    return (
	<form>
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
	</form>
  );
};

export default DownLoad;

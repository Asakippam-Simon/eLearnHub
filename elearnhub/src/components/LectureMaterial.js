import React, { useState } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const LectureMaterial = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return;
    const storageRef = ref(storage, `materials/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Handle progress here
      },
      (error) => {
        console.error('Upload failed', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
  };

    return (
	<form>
	    <div clase="container">
		<input type="file" onChange={handleFileChange} />
		<button onClick={handleUpload}>Upload Lecture Material</button>
	    </div>
	    </form>
  );
};

export default LectureMaterial;

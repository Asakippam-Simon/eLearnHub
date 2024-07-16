import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { storage, db } from '../firebase';

const UploadMaterial = () => {
  const [file, setFile] = useState(null);
  const [metadata, setMetadata] = useState({ title: '', description: '' });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    setMetadata({ ...metadata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const storageRef = ref(storage, `materials/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      await addDoc(collection(db, 'materials'), {
        ...metadata,
        url: downloadURL,
        createdAt: new Date()
      });

      console.log('File uploaded to:', downloadURL);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload Material</h2>
      <input type="file" onChange={handleFileChange} required />
      <input type="text" name="title" placeholder="Title" onChange={handleInputChange} required />
      <textarea name="description" placeholder="Description" onChange={handleInputChange} required></textarea>
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadMaterial;

import React, { useState } from 'react';
import "./App.css"


function App() {
  // Define an array of image URLs
  const imageArray = [
    '/img1.jpeg',
    '/img2.jpeg',
    '/img3.jpeg',
    '/img4.jpeg',
    '/img5.jpeg',
    '/img6.jpeg',
    // Add more image URLs as needed
  ];

  // Use state to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to change the current image on button click
  const changeImage = () => {
    // Calculate the next image index, wrapping around if needed
    const nextIndex = (currentImageIndex + 1) % imageArray.length;
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div>
      <img src={imageArray[currentImageIndex]} alt="nature" width="200" height="200" />
      <button onClick={changeImage}>Change Image</button>
    </div>
  );
}

export default App;

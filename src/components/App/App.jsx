import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from './GalleryList';



function App() {
  const [galleryItems, setGalleryItems] = useState([]);

  //on load, fetches gallery
  useEffect(() => {
    fetchGallery()
  }, [])

const fetchGallery = () => {
  axios.get('/gallery')
  .then(response => {
    setGalleryItems(response.data)
  }).catch(error => {
    alert('error in fetchGallery');
    console.log(error);
  })
}

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList
        galleryItems={galleryItems}
        />
      </div>
    );
}

export default App;

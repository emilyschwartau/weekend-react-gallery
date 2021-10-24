//import React from 'react';
import React, { useEffect, useState } from "react";
import './App.css';
import axios from 'axios';
import GalleryList from "../GalleryList/GalleryList";

function App() {

  let [galleryList, setGalleryList] = useState([]);

  //GET photos from array
  const getGalleryList = () => {
    axios
      .get("/gallery")
      .then((response) => {
        console.log("Gallery list ->", response.data);
        setGalleryList(response.data);
      })
      .catch((err) => {
        console.log("Error getting groceries", err);
      });
  };

  useEffect(() => {
    getGalleryList();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList
        galleryList={galleryList}
        getGalleryList={getGalleryList}
      />

    </div>
  );
}

export default App;

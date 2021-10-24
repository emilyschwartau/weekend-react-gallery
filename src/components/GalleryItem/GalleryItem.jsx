import './GalleryItem.css'
import React, { useEffect, useState } from "react";
import axios from 'axios';

function GalleryItem ({ galleryItem, getGalleryList }) {
    let returnItem = '';

    const likeItem = () => {
        console.log("Clicked Like", galleryItem.id);
        axios({
          method: "PUT",
          url: `/gallery/like/${galleryItem.id}`
        })
          .then((response) => {
            console.log("PUT like response is", response);
            getGalleryList();
          })
          .catch((error) => {
            console.log("PUT like error", error);
          });
      };

const [photoView, setPhotoView] = useState(true);

    if (photoView == true) { 
        returnItem = 
        (<div className="gallery-item"> 
            <div className="image" onClick={() => setPhotoView(false)}>
                <p><img src={galleryItem.path}/></p>
            </div>
            <div className="likes">
                <button onClick={likeItem}>Love it!</button>
                <p>{galleryItem.likes} people love this!</p>
            </div>
        </div>)  
    }//end if

    else if (photoView == false) {
        returnItem = 
        (<div className="gallery-item">
            <div className="image" onClick={() => setPhotoView(true)}>
                <p>{galleryItem.description}</p>
            </div>
            <div className="likes">
                <button onClick={likeItem}>Love it!</button>
                <p>{galleryItem.likes} people love this!</p>
            </div>
        </div>)
    }//end else if 

    return returnItem;
   
}

export default GalleryItem;
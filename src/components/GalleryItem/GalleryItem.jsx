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

     

    // // function handlePhotoClick () {
    // //     console.log('Clicked Photo');
    // // }

    if (photoView == true) { 
        returnItem = 
        (<div className="gallery-item" onClick={() => setPhotoView(false)}>
            <p><img src={galleryItem.path}/></p>
            <button onClick={likeItem}>Love it!</button>
            <p>{galleryItem.likes} people love this!</p>
        </div>)  
    }//end if

    else if (photoView == false) {
        returnItem = 
        (<div className="gallery-item">
            <p>{galleryItem.description}</p>
            <button onClick={likeItem}>Love it!</button>
            <p>{galleryItem.likes} people love this!</p>
        </div>)
    }//end else if 

//    function activateDescription () {
//        console.log('clicked div');
//        return (
//         <div className="gallery-item">
//             <p>{galleryItem.description}</p>
//             <button onClick={likeItem}>Love it!</button>
//             <p>{galleryItem.likes} people love this!</p>
//         </div>
//         //getGalleryList();
//        )
//    }

    return returnItem;
   
}

export default GalleryItem;
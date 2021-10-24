import './GalleryItem.css'
import React, { useEffect, useState } from "react";
import axios from 'axios';

function GalleryItem ({ galleryItem, getGalleryList }) {
    
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

    // let returnItem = '';

    // // function handlePhotoClick () {
    // //     console.log('Clicked Photo');
    // // }

    // if (item.photoView == true) { 
    //     returnItem = 
    //     (<div className="gallery-item">
    //         <p><img src={item.path}/></p>
    //         <button onClick={likeItem}>Love it!</button>
    //         <p>{item.likes} people love this!</p>
    //     </div>)  
    // }//end if

    // else if (item.photoView == false) {
    //     returnItem = 
    //     (<div className="gallery-item">
    //         <p>{item.description}</p>
    //         <button onClick={likeItem}>Love it!</button>
    //         <p>{item.likes} people love this!</p>
    //     </div>)
    // }//end else if 

   

    return (
        <div className="gallery-item">
            <p><img src={galleryItem.path}/></p>
            <button onClick={likeItem}>Love it!</button>
            <p>{galleryItem.likes} people love this!</p>
        </div> 


    )



    

    


    
}

export default GalleryItem;
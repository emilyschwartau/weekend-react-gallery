import './GalleryItem.css'
import axios from 'axios';

function GalleryItem ({ item, getGalleryList }) {

    let returnItem = '';

    if (item.photoView == true) { 
        returnItem = 
        (<div className="gallery-item">
            <p><img src={item.path}/></p>
            <p>{item.likes} people love this!</p>
        </div>)  
    }//end if

    else if (item.photoView == false) {
        returnItem = 
        (<div className="gallery-item">
            <p>{item.description}</p>
            <p>{item.likes} people love this!</p>
        </div>)
    }//end else if 

    const ChangePhotoViewToTrue = () => {
        //let idToPurchase = item.id;
        console.log("Clicked ChangePhotoViewToTrue", item.id);
        axios({
          method: "PUT",
          url: '/gallery/like/:id'
        })
          .then((response) => {
            console.log("PUT purchase response is", response);
            getGroceryList();
          })
          .catch((error) => {
            console.log("PUT purchase error", error);
          });
      };

    return returnItem;
}

export default GalleryItem;
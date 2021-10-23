import './GalleryItem.css'

function GalleryItem ({ item, getGalleryList }) {

    return (
        <div className="gallery-item">
          {/* need??? <p>{item.item}</p> */}
          <p><img src={item.path}/></p>
          {/* <p>{item.description}</p> */}
          <p>{item.likes} people love this!</p>
           
        </div>
      );


}

export default GalleryItem;
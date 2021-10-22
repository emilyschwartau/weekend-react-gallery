
function GalleryItem ({ item, getGalleryList }) {

    return (
        <div className="gallery-item">
          <p>{item.item}{item.description} {item.likes}<img src={item.path}/></p>
    
          {/* <p>
            {item.purchased ? (
              `Purchased`
            ) : (
              <>
                <button onClick={purchaseItem}>Buy</button>
                <button onClick={deleteItem}>Remove</button>
              </>
            )}
          </p> */}
        </div>
      );


}

export default GalleryItem;
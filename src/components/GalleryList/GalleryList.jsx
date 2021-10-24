import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList, getGalleryList}) {
    console.log('in GalleryList');

    return (
        <>
            {galleryList.map((galleryItem) => (
              <GalleryItem
                galleryItem={galleryItem}
                key={galleryItem.id}
                getGalleryList={getGalleryList}
              />
            ))}
        </>
      );
}

export default GalleryList
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList, getGalleryList}) {
    console.log('in GalleryList');

    return (
        <>
            {galleryList.map((item) => (
              <GalleryItem
                item={item}
                key={item.id}
                getGalleryList={getGalleryList}
              />
            ))}
        </>
      );
}

export default GalleryList
import React from 'react'
import GalleryItemComp from './GalleryItem';

function GalleryList({galleryItems}){
    return (
      <div>
        <p>Gallery goes here</p>
        <br />
        <ul>
            {
                galleryItems.map((galleryItems) => {
                    console.log(galleryItems);
                    return <li key={galleryItems.id}>
                        <GalleryItemComp
                        galleryItems={galleryItems}
                        />
                        <br />
                        likes: {galleryItems.likes}
                    </li>
                })
            }
        </ul>

      </div>
      )
}
 export default GalleryList;
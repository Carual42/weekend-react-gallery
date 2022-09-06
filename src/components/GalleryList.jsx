import React from 'react'
import GalleryItemComp from './GalleryItem';

function GalleryList({galleryItems, likePic}){
    return (
      <div>
        <p>Gallery goes here</p>
        <br />
        <ul>
            {
                galleryItems.map((item) => {
                    console.log(item);
                    return <li key={item.id}>
                        <GalleryItemComp
                        photo={item}
                        likePic={likePic}
                        />
                        <br />
                        likes: {item.likes}
                    </li>
                })
            }
        </ul>

      </div>
      )
}
 export default GalleryList;
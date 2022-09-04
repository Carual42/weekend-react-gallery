import React from 'react'

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
                        <img src={galleryItems.path}></img> 
                        {galleryItems.description}
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
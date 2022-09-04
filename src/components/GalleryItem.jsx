import React, { useState } from 'react'

function GalleryItemComp({galleryItems}){
    const [toggle, setToggle] = useState(false); 
    return (
      <div>
       {toggle ? (
        <img src={galleryItems.path}></img>
       ) : (
        <h3>
  {galleryItems.description}
        </h3>
       )}
       <button onClick={() => setToggle(!toggle)}>
        {toggle ? 'Description' : 'View Image'}
       </button>
      </div>
      )
}
 export default GalleryItemComp;
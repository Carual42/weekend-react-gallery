import React, { useState } from 'react'

function GalleryItemComp({photo, likePic}){
    const [toggle, setToggle] = useState(false); 
    return (
      <div>
       {toggle ? (
        <img src={photo.path}></img>
       ) : (
        <h3>
  {photo.description}
        </h3>
       )}
       <button onClick={() => setToggle(!toggle)}>
        {toggle ? 'Description' : 'View Image'}
       </button>
       <button onClick={() => likePic(photo.id)}>
Like
</button>
      </div>
      )
}
 export default GalleryItemComp;
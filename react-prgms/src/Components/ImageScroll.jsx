import React, { useState } from 'react'
import img1 from "../IMAGES/59a0d73139b06bd5191bfd6e12758b42.jpg"
import img2 from "../IMAGES/images (1).jpeg"
import img3 from "../IMAGES/images.jpeg"

const ImageScroll = () => {
  const imgList = [img1, img2, img3]
  
  const [current, setCurrent] = useState(0)

  const nextImage = () => {
    const lastIndex = imgList.length - 1; 
    
    if (current === lastIndex) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }

  const prevImage = () => {
    const lastIndex = imgList.length - 1; 

    if (current === 0) {
      setCurrent(lastIndex);
    } else {
      setCurrent(current - 1);
    }
  }
  
  return (
    <div style={{ textAlign: 'center' }}>
      
      <img 
        src={imgList[current]} 
        alt={`Image ${current + 1}`} 
        style={{width: '300px', height: '300px', objectFit: 'cover' }} 
      />

      <button id="btn1" onClick={prevImage}>&#10094;</button>
      <button id="btn2" onClick={nextImage}>&#10095;</button>
      
    </div>
  )
}

export default ImageScroll
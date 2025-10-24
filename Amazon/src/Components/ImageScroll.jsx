import React, { Component } from 'react'
import img1 from "../IMAGES/59a0d73139b06bd5191bfd6e12758b42.jpg"
import img2 from "../IMAGES/images (1).jpeg"
import img3 from "../IMAGES/images.jpeg"


export default class ImageScroll extends Component {
  
  imgList = [img1, img2, img3]
  
  constructor() {
    super()

    this.state = {
      current: 0 
    }
  }

  nextImage = () => {
    const lastIndex = this.imgList.length - 1; 
    
    if (this.state.current === lastIndex) {
      this.setState({ current: 0 });
    } else {
      this.setState({ current: this.state.current + 1 });
    }
  }

  prevImage = () => {
    const lastIndex = this.imgList.length - 1; 

    if (this.state.current === 0) {
      this.setState({ current: lastIndex });
    } else {
      this.setState({ current: this.state.current - 1 });
    }
  }
  
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        
        <img 
          src={this.imgList[this.state.current]} 
          alt={`Image ${this.state.current + 1}`} 
          style={{width: '300px', height: '300px', objectFit: 'cover' }} 
        />

        <button id="btn1" onClick={this.prevImage}>&#10094;</button>
        <button id="btn2" onClick={this.nextImage}>&#10095;</button>
        
      </div>
    )
  }
}
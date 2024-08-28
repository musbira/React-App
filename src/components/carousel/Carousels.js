import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import './carousel.styles.css'

const Carousels = () => {
  return (
    <div>
      <div id="carouselExample" class="carousel slide" >
  <div class="carousel-inner">
    <div class="carousel-item active" >
      <img id='carsimg' src={img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img id='carsimg' src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img id='carsimg' src={img3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
  )
}

export default Carousels
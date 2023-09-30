import React from 'react';
import hero from './main.JPG';
import img from'./ai.jpg';
import img1 from'./img1.JPG';
import img2 from'./img2.jpg';
const Carousel = () => {
    return (
          <div class="mb-5 p-4"> 
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img} class="d-block w-100 h-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>AI & Machine Learning</h5>
        <p>AI & Machine Learning driven Powerful Software for
Agency Recruiting,
Internal Hiring & Profile Management.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Powerful Talent Acquisition</h5>
        <p>Acquiring, developing and retaining talented employees faster and more efficiently.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Highly Usable Software</h5>
        <p>to provide powerful and highly usable software and technology to empower every team to find the right talent for their today’s work, and tomorrow’s growth.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
)
};

export default Carousel;
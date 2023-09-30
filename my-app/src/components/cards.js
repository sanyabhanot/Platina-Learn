import React from 'react';
import img from './web.jpg';
import img1 from './design.jpg';
import img2 from './ui.JPG';

const Cards = () => {
    return (
<div class="row row-cols-1 row-cols-md-3 g-5 mb-5">
  <div class="col mb-5">
    <div class="card h-100 ms-5 p-3">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Web Design Bootcamp-2023 for Beginners</h5>
        <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!</p>
      </div>
      <a href="#" class="btn btn-primary">Enroll Now</a>
    </div>
  </div>
  <div class="col mb-5">
    <div class="card h-100 ms-3 me-3 p-3">
      <img src={img1} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Profesional Graphics Design, Photoshop, Adobe, Figma</h5>
        <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!</p>
      </div>
      <a href="#" class="btn btn-primary">Enroll Now</a>
    </div>
  </div>
  <div class="col mb-5">
    <div class="card h-100 p-3 me-5">
      <img src={img2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">UI/UX Bootcamp for Beginners in 2023</h5>
        <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!</p>
      </div>
      <a href="#" class="btn btn-primary">Enroll Now</a>
    </div>
  </div>
</div>

)
};

export default Cards;
import React from 'react';
import main from './main.JPG';
import './hero.css';
import graphic from './graphic.JPG';
import graphic2 from './graphic2.JPG';
const Hero = () => {
    return (
        <section class="py-lg-12 py-6 mb-5">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class=" col-xxl-5  col-xl-6 col-lg-6 col-12">
              <div>
                <h1 class="display-2 fw-bold mb-3">Learn today’s most in-<u class="text-warning"><span class="text-primary">demand-skills</span></u></h1>
                <p class="lead mb-3">Start, switch, or advance your career with more than 5,000 courses from world-class universities and companies.</p>
                <ul class="list-unstyled mb-5">
                  <li class="mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="var(--geeks-success)" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                    </svg>
                    <span class="ms-2">No credit card required</span>
                  </li>
                  <li class="mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="var(--geeks-success)" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                    </svg>
                    <span class="ms-2">Customer service 24/7</span>
                  </li>
                  <li class="mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="var(--geeks-success)" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                    </svg>
                    <span class="ms-2">No setup fee</span>
                  </li>
                  <li class="mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="var(--geeks-success)" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                    </svg>
                    <span class="ms-2">Cancel any time</span>
                  </li>
                  <a href="#!" id="ring"class="btn btn-dark btn-lg mt-3">Explore Online Courses</a>
                </ul>

              </div>
            </div>
            <div class="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6 col-12 d-lg-flex justify-content-end">
              <div class="mt-12 mt-lg-4 position-relative">
                <div class="position-absolute top-0 start-0 translate-middle  d-none d-md-block">
                  <img src={graphic} alt="graphics-2"/>
                </div>
                <img src={main} alt="online course" class="img-fluid rounded-4 w-100 z-1 position-relative"/>
                <div class="position-absolute top-100 start-100 translate-middle  d-none d-md-block">
                  <img src={graphic2} alt="graphics-1"/>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    )
};

export default Hero;
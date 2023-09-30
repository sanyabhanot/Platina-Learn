import "./App.css"
import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Hero from './components/hero';
import Carousel from './components/carousel';
import Cards from './components/cards';
import About from './components/about';
function App() {
  return (
  
      // <Router>
      //   <Header />
      //   <Routes>
      //     <Route exact path='/' component={Home} /> 
      //     <Route exact path='/about' component={About} />
      //     <Route exact path='/courses' component={CourseHome} />
      //     <Route exact path='/team' component={Team} />
      //     <Route exact path='/pricing' component={Pricing} />
      //     <Route exact path='/journal' component={Blog} />
      //     <Route exact path='/contact' component={Contact} />
      //   </Routes>
      //   <Footer />
      // </Router>
      <div className="App">
 <Navbar/>
 <marquee bgcolor="yellow">Become among the top 1%! Whether it is Growth, Product, Design, Management, Business, Tech & Data, Platina Learn is the place to learn from top experts in the field. Enroll Now! Courses starting from low as Rs. 299/- only! Special Offer today! </marquee>
 <Hero/>
 
 <h2 class="md-2 ms-2 me-2 p-2" > About Us </h2> 
 
    <span class="placeholder col-4 ms-2 bg-warning placeholder-xs"></span>
    <p class="md-2 mt-2 ms-2 me-2 p-2">Recruiting and Parsing Technology for everyone.
    
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
              </p>
 <div> 
  <About/>
  <h2 class="md-2 ms-2 me-2 p-2 mt-5"> Why Choose Us </h2> 
  <span class="placeholder col-4 ms-2 bg-warning placeholder-xs"></span>
  <p class="ms-3 mt-2">
    
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
              </p>
             
  <Carousel/> </div>
  <h2 class="md-2 ms-2 me-2 p-2"> Our Latest Courses </h2>
  <span class="placeholder col-4 ms-2 bg-warning placeholder-xs"></span>
    <p class="ms-3 mb-5 mt-3 pb-3">
    
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
              </p>
  <Cards/>
 <Footer/>
      </div>
     

     
  );
}

export default App;
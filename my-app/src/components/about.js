import React from 'react';
import CountUp from "react-countup";
import { Container, Row, Col } from "reactstrap";
import img from './web.jpg';

const About = () => {
    return (
      

    //           <div className="about__counter me-5 ms-5 p-5 mb-2">
    //             <div className=" d-flex gap-5 align-items-center">
    //               <div className="single__counter ms-5 me-5 p-5">
    //                 <span className="counter ms-5" STYLE="font-weight:bold">
    //                   <CountUp start={0} end={25} duration={2} suffix="K" />
    //                 </span>

    //                 <h5 className="counter__title">Completed Projects</h5>
    //               </div>

    //               <div className="single__counter ms-2 me-5 p-5">
    //                 <span className="counter ms-5" STYLE="font-weight:bold">
    //                   <CountUp start={0} end={12} duration={2} suffix="M" />
    //                 </span>

    //                 <h5 className="counter__title">Clients Around World</h5>
    //               </div>
    //             </div>

    //             <div className=" d-flex gap-5 align-items-center">
    //               <div className="single__counter ms-5 me-5 p-5">
    //                 <span className="counter ms-5" STYLE="font-weight:bold">
    //                   <CountUp start={0} end={95} duration={2} suffix="M" />
    //                 </span>

    //                 <h5 className="counter__title">Ideas Raised Funds</h5>
    //               </div>

    //               <div className="single__counter ms-3 me-5 p-5">
    //                 <span className="counter ms-5" STYLE="font-weight:bold">
    //                   <CountUp start={0} end={5} duration={2} suffix="K" />
    //                 </span>

    //                 <h5 className="counter__title">Categories Served</h5>
    //               </div>
    //             </div>
    //             </div>
    // )};

    <section>
    <Container>
      <Row>
        <Col lg="6" md="6">
          <div className="about__img">
            <img src={img} alt="" className="w-100" />
          </div>
        </Col>
<Col>
            <div className="about__counter mt-5 ms-4 p-4">
              <div className=" d-flex gap-5 align-items-center">
                <div className="single__counter mb-5">
                  <span className="counter ms-5 " STYLE="font-weight:bold">
                    <CountUp start={0} end={25} duration={2} suffix="K" />
                  </span>
                  <div class="placeholder col-4 ms-5 bg-warning placeholder-xs"></div>

                  <h5 className="counter__title">Completed Projects</h5>
                </div>

                <div className="single__counter mb-5 ms-5 ">
                  <span className="counter ms-5 p-1" STYLE="font-weight:bold">
                    <CountUp start={0} end={12} duration={2} suffix="M" />
                  </span>
                  <div class="placeholder col-4 ms-5 bg-warning placeholder-xs"></div>
                  <h5 className="counter__title">Clients Around World</h5>
                </div>
              </div>

              <div className=" d-flex gap-5 align-items-center">
                <div className="single__counter">
                  <span className="counter ms-5" STYLE="font-weight:bold">
                    <CountUp start={0} end={95} duration={2} suffix="M" />
                  </span>
                  <div class="placeholder col-4 ms-5 bg-warning placeholder-xs"></div>
                  <h5 className="counter__title">Ideas Raised Funds</h5>
                </div>

                <div className="single__counter ms-5">
                  <span className="counter ms-5 p-1" STYLE="font-weight:bold">
                    <CountUp start={0} end={5} duration={2} suffix="K" />
                  </span>
                  <div class="placeholder col-4 ms-5 bg-warning placeholder-xs"></div>
                  <h5 className="counter__title">Categories Served</h5>
                </div>
              </div>
            </div>
            </Col>
      </Row>
    </Container>
  </section>
);
};

export default About;
import React from 'react';
        import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
            <MDBFooter className='text-center mt-5' color='white' bgColor='dark'>
              <section className='d-flex justify-content-center  p-4 border-bottom mt-5'>
                <div className='me-3 d-none d-lg-block'>
                <span>Get connected with us on social networks:</span>
                <MDBBtn
            floating
            className='m-1 ms-5 '
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
          
                  
                 
                </div>
        
                {/* <div>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon color='secondary' fab icon='facebook-f' />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon color='secondary' fab icon='twitter' />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon color='secondary' fab icon='google' />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon color='secondary' fab icon='instagram' />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon color='secondary' fab icon='linkedin' />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon color='secondary' fab icon='github' />
                  </a>
                </div> */}
                
                 
              </section>
        
              <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                  <MDBRow className='mt-3'>
                    <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                      <h6 className='text-uppercase fw-bold mb-4'>
                        <MDBIcon color='secondary' icon='gem' className='me-3' />
                        Platina Learn
                      </h6>
                      <p>
                        Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit.
                      </p>
                    </MDBCol>
        
                    <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                      <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                      <p>
                        <a href='#!' className='text-reset'>
                          Angular
                        </a>
                      </p>
                      <p>
                        <a href='#!' className='text-reset'>
                          React
                        </a>
                      </p>
                      <p>
                        <a href='#!' className='text-reset'>
                          Vue
                        </a>
                      </p>
                      <p>
                        <a href='#!' className='text-reset'>
                          Laravel
                        </a>
                      </p>
                    </MDBCol>
        
                    <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                      <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                      <p>
                        <a href='#!' className='text-reset'>
                          Pricing
                        </a>
                      </p>
                      <p>
                        <a href='#!' className='text-reset'>
                          Settings
                        </a>
                      </p>
                      <p>
                        <a href='#!' className='text-reset'>
                          Orders
                        </a>
                      </p>
                      <p>
                        <a href='#!' className='text-reset'>
                          Help
                        </a>
                      </p>
                    </MDBCol>
        
                    <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                      <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                      <p>
                        <MDBIcon color='secondary' icon='home' className='me-2' />
                        Suite 823, B-01, Pearls Omaxe Tower, Netaji Subhash Place, Pitampura, New Delhi, Delhi, 110034
                      </p>
                      <p>
                        <MDBIcon color='secondary' icon='envelope' className='me-3' />
                        info@platina.com
                      </p>
                      <p>
                        <MDBIcon color='secondary' icon='phone' className='me-3' />  011 4674 7700
                      </p>
                      <p>
                        <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </section>
        
              <div className='text-center p-4' style={{ backgroundColor: 'rgba(255,226,0,0.95)' }}>
                © 2023 Copyright:
                <a className='text-reset fw-bold' href='https://www.platinasoft.com/'>
                  Platina Software Pvt. Ltd.
                </a>
              </div>
            </MDBFooter>
          );
        }

        export default Footer;
import React from 'react'
import './footer.css'

import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'

import {Link} from 'react-router-dom'

import logo from '../../assets/images/logo.png'

const quick__links =[
  {
    path: "/home", 
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  // {
  //   path: "/places", 
  //   display: "Places",
  // },
  {
    path: "/news", 
    display: "News",
  },
  // {
  //   path: "/blogs", 
  //   display: "Blog",
  // },
  
]
const quick__links2 =[

  {
    path: "/blogs", 
    display: "Blogs",
  },
  {
    path: "/login", 
    display: "Login",
  },
  {
    path: "/register", 
    display: "Register",
  },
  
]

const Footer = () => {


  const year= new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt="" />
              <p>A website made with Love by Adarsh</p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#" >
                  <i class="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#" >
                  <i class="ri-instagram-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#" >
                  <i class="ri-twitter-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#" >
                  <i class="ri-linkedin-fill"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className='footer__link-title'>Discover</h5>
            <ListGroup className='footer__quick-links'> 
            {
              quick__links.map((item, index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
            </ListGroup>
          </Col> 
          <Col lg='3'>
          <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup className='footer__quick-links'> 
            {
              quick__links2.map((item, index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer__link-title'>Contact</h5>
            <ListGroup className='footer__quick-links'> 
         
                <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span>
                      <i class="ri-map-pin-line"></i>
                      </span>Place:</h6>
                  <p className='mb-0'>Vadodara, Gujarat</p>
                </ListGroupItem>
                <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'><span><i class="ri-mail-unread-line"></i></span>Email:</h6>
                  <p className='mb-0'>adarsh.jha1116@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'><span>
                  <i class="ri-phone-line"></i></span>Phone:</h6>
                  <p className='mb-0'>+91-9876543210</p>
                </ListGroupItem>
              
            </ListGroup>
          </Col>
          <Col lg='12' className='text-center pt-5'><p className="copyright">Copyright {year}, Designed and developed by Adarsh. All rights reserved</p></Col>
        </Row>
      </Container>
    </footer>
    )
}

export default Footer 
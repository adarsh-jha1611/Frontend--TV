import React from 'react'
import './newsletter.css'
import { Container, Row,Col } from 'reactstrap'

import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (<section className='newsletter'>
      <Container>
          <Row>
              <Col lg='6'>
                  <div className='newsletter__content'>
                      <h2>Get involved in making this website more useful.</h2>
                      <div className="newsletter__input">
                          <input type="email" placeholder='Enter you Email' />
                          <button className="btn newsletter_btn">Join</button>
                      </div>
                      <p>Get involved in making this website more useful by providing valuable feedback and suggestions on what can be improved. Your participation will help create a more user-friendly and informative platform for everyone.</p>
                  </div>
              </Col>
              <Col lg='6'>
                  <div className="newsletter__img">
                      <img src={maleTourist} alt="" />
                  </div>
              </Col>
          </Row>
      </Container>
  </section>
  )
}

export default Newsletter
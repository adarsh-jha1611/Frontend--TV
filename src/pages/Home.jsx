import React from 'react'
import '../styles/home.css'
import {Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import experienceImg from '../assets/images/experience.png'
import SearchBar from '../shared/SearchBar'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'



const Home = () => {
  return <>
   {/* ======== hero section starts ========*/}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              {/* <div className="hero__subtitle d-flex align-items-center ">
                <Subtitle subtitle={'Know Before you go'}/>
                <img src={worldImg} alt="" />
              </div> */}
              <h1>Let's Travel Vadodara -    The city of  <span className="highlight">Gaekwad</span></h1>
              <p>
              Vadodara is a city located in the Indian state of Gujarat. It is also known as Baroda, and is the third largest city in the state.
              It is a cultural hub and is renowned for its rich history, heritage sites, museums, and galleries. The city has a thriving arts scene, with numerous theaters and cultural centers. 

              <br />
              The Gaekwad city is also known for its street food, which is a reflection of the city's diverse cultural influences. The city is surrounded by beautiful lakes, parks, and gardens, making it a popular destination for nature lovers. 
              </p>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, delectus totam. Repellendus magni a consectetur sint! Nam similique voluptates suscipit ipsum, enim libero accusamus veniam qui, repellendus sint corporis obcaecati!</p> */}
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box hero__video-box mt-4">
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
    </section>
    {/* ======== hero section starts ========*/}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">What we give?</h5>
            <h2 className="services__title">Visit Baroda with us!</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>

    {/*==============featured places start=============== */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <h2><span className="highlight1">Explore!</span></h2>
            {/* <Subtitle subtitle={'Explore'}/> */}
            <h2 className='featured__tour-title'>Places to visit in Vadodara</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    {/*==============featured places end=============== */}
    {/*==============experiences places start=============== */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              {/* <h1>aadi</h1> */}
              <h2>Share your experience <br />Post a blog now!</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                <br />
                aepe cumque ad laboriosam ratione, cupiditate ab. Obcaecati.</p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>15+</span>
                <h6>Monuments</h6>
              </div>
              <div className="counter__box">
                <span>9</span>
                <h6>Gadern</h6>
              </div>
              <div className="counter__box">
                <span>22+</span>
                <h6>Temples</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/*==============experiences places end=============== */}
    {/*==============gallery places start=============== */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <h2><span className="highlight2">History</span></h2>
          <h2 className="gallery__title">Historical pictures of Vadodara </h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
    {/*==============gallery places end=============== */}

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            {/* <h2><span className="highlight2">JJ</span></h2> */}
            <h2 className='testimonial__title'>Recent blogs posted</h2>
          </Col>
          <Col lg='12'>
            <Testimonials/>
          </Col>
        </Row>
      </Container>
    </section>
    <Newsletter/>







    </>
}

export default Home
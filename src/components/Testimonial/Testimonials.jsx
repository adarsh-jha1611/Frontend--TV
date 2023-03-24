import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

    const settings={
        dots: true,
        infinite: true,
        autoplay: true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidestoScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidestoScroll:1,
                    
                },
            },
        ]

    }
  return (
      <Slider {...settings}>
          <div className='testimonial py-4 px-3'>
              <p>
              Vadodara, is a city in the Indian state of Gujarat. It is known for its rich cultural heritage, palaces, museums, and temples. The city is also a major industrial hub, with a strong presence in the fields of petrochemicals, engineering, and pharmaceuticals.
              </p>
              <div className='d-flex align-items-center gap-4 mt-3'>
                  <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                  <div>
                      <h6 className='mb-0 mt-3'>Adarsh Jha</h6>
                      <p>Admin</p>
                  </div>
              </div>
          </div>
          <div className='testimonial py-4 px-3'>
              <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ab commodi itaque. Voluptatum soluta, in ab voluptates a eaque. Assumenda dicta recusandae reiciendis consectetur ex pariatur! Iusto temporibus neque laborum.
              </p>
              <div className='d-flex align-items-center gap-4 mt-3'>
                  <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                  <div>
                      <h6 className='mb-0 mt-3'>Adarsh Jha</h6>
                      <p>Citizen</p>
                  </div>
              </div>
          </div>
          <div className='testimonial py-4 px-3'>
              <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ab commodi itaque. Voluptatum soluta, in ab voluptates a eaque. Assumenda dicta recusandae reiciendis consectetur ex pariatur! Iusto temporibus neque laborum.
              </p>
              <div className='d-flex align-items-center gap-4 mt-3'>
                  <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                  <div>
                      <h6 className='mb-0 mt-3'>Adarsh Jha</h6>
                      <p>Citizen</p>
                  </div>
              </div>
          </div>
          <div className='testimonial py-4 px-3'>
              <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ab commodi itaque. Voluptatum soluta, in ab voluptates a eaque. Assumenda dicta recusandae reiciendis consectetur ex pariatur! Iusto temporibus neque laborum.
              </p>
              <div className='d-flex align-items-center gap-4 mt-3'>
                  <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                  <div>
                      <h6 className='mb-0 mt-3'>Adarsh Jha</h6>
                      <p>Citizen</p>
                  </div>
              </div>
          </div>
      </Slider>
  )
}

export default Testimonials
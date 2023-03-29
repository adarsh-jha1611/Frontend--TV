import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg, 
        title: "Calculate Weather",
        desc: "Know the weather and get to know when is the best time to visit!",
        },
        {
        imgUrl: guideImg, 
        title: "Best Tour Guide",
        desc: "Get to know which place is better to visit and when.",
        },
        {
        imgUrl: customizationImg, 
        title: "Customization",
        desc: "Customize your tour and visit different places.",
        },

]

    
    
const ServiceList = () => {
  return (<>
  {servicesData.map((item, index)=>(
      <Col lg='3' key={index}>
          <ServiceCard item={item}/>
      </Col>
  ))
  }
  </>
  )
}

export default ServiceList
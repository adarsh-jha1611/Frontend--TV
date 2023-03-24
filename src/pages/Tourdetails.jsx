import React, { useEffect, useRef, useState} from 'react'
import '../styles/tour-details.css'
import {Container, Row, Col, Form, ListGroup} from 'reactstrap'
import {useParams} from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import Newsletter from '../shared/Newsletter'
import useFetch from './../hooks/useFetch'
import { BASE_URL } from './../utils/config'

const Tourdetails = () => {
  const {id} = useParams()
  const reviewMsgRef= useRef('')
  const [tourRating, setTourRating]=useState(null)


  const {data:tour, loading,error}=useFetch(`${BASE_URL}/tours/${id}`)
  const {photo, title,place, desc, price,address, reviews, distance, maxGroupSize}= tour

  const {totalRating, avgRating}= calculateAvgRating(reviews)

  const options ={day:'numeric', month:'long', year:'numeric'}

  //SUBMIT REQUEST TO SERVER

  const submitHandler=e=>{
    e.preventDefault()
    const reviewText=reviewMsgRef.current.value
  
  alert(`${reviewText}, ${tourRating}`) 
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[tour])

  return (
    <>
    <section>
      <Container>
        {
          loading && <h4 className='text-center pt-5'>Loading....</h4>
        }
        {
          error && <h4 className='text-center pt-5'>{error}</h4>
        }
       {
         !loading && !error && <Row>
         <Col lg='8'>
           <div className="tour__content">
             <img src={photo} alt="" />
             <div className="tour__info">
               <h2>{title}</h2>

               <div className='d-flex align-items-center gap-5'>
               <span className="tour__location d-flex align-items-center gap-1">
         <i class="ri-map-pin-fill"></i>{address}
         </span>
         <span className="tour__rating d-flex align-items-center gap-1">
         <i class="ri-star-s-fill" style={{'color':"var(--secondary-color)"}}></i>
         {avgRating ===0? null: avgRating} {totalRating===0? 'No Ratings' :<span>({reviews?.length})</span> }

         </span>

               </div>
               <div className="tour__extra-details">
                 <span><i class="ri-map-pin-3-line"></i> {place} </span>
                 <h6>₹{price}<span>/per adult</span></h6>
                 <span><i class="ri-map-pin-time-line"></i> {distance} km</span>
                 
                 <span><i class="ri-group-line"></i> {maxGroupSize} people
                 </span>

               </div>
               <h5>Description</h5>
               <p>{desc}</p>
               
               </div>


               {/*==========Tour review section===============*/}
               <div className="tour__reviews mt-4">
                 <h4>Reviews({reviews?.length} reviews)</h4>
                 <Form onSubmit={submitHandler}>
                   <div className='d-felx align-items-center gap-3 mb-4
                   rating'>
                     
                     <span onClick={()=> setTourRating(1)}><i class="ri-star-s-fill"></i></span>
                     <span onClick={()=> setTourRating(2)}><i class="ri-star-s-fill"></i></span>

                     <span onClick={()=> setTourRating(3)}><i class="ri-star-s-fill"></i></span>

                     <span onClick={()=> setTourRating(4)}><i class="ri-star-s-fill"></i></span>

                     <span onClick={()=> setTourRating(5)}><i class="ri-star-s-fill"></i></span>


                   </div>
                   <div className='review__input'>
                     <input type="text" ref={reviewMsgRef} placeholder='Share your experience' required />
                     <button className="btn primary__btn text-white" type='submit'>
                       Submit
                     </button>
                   </div>
                 </Form>

                 <ListGroup className='user__reviews'>
                   {
                     reviews?.map(review =>(
                       <div className="review__item">
                         <img src={avatar} alt="" />

                         <div className="w-100">
                           <div className='d-flex align-items-center justify-content-between'>
                             <div>
                               <h5>Adarsh</h5>
                               <p>
                                 {new Date('02-24-2023').toLocaleDateString('en-US', options
                                 )}
                               </p>
                             </div>
                             <span className='d-flex align-items-center'>
                               5<i class="ri-star-s-fill"></i>
                             </span>
                           </div>
                           <h6>Amazing Place</h6>
                         </div>
                       </div>
                     ))
                   }
                 </ListGroup>
               </div>

               {/*==========Tour review section end===============*/}

             
           </div>
         </Col>
         <Col lg='4'>
           <Booking tour={tour} avgRating={avgRating}/>
         </Col>
       </Row>
       }
      </Container>
      <Newsletter/>
    </section>
    </>
    )
}

export default Tourdetails
import React, {useState} from 'react'
import './booking.css'
import{ Form, FormGroup, ListGroup, ListGroupItem, Button} from "reactstrap"
import { useNavigate } from 'react-router-dom'

const Booking = ({tour, avgRating}) => {

    const{price, reviews }= tour
    const navigate= useNavigate()

    const [credentials, setCrendentials]= useState({
        userId: '01',
        userEmail: 'abc@gmail.com',
        fullname:'',
        phone:'',
        guestSize:1,
        bookAt:''

    })

    const handleChange=e=>{
        setCrendentials(prev=>({...prev, [e.target.id]:e.target.value}))

    }

    const serviceFee = 10
    const ta= Number(price) * Number(credentials.guestSize)+ Number(serviceFee)

    //send datat to the server  

    const handleClick=e=>{
        e.preventDefault()

        navigate('/thank-you')
    }
  return (
    <div className='booking'>
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>
            ₹{price} <span>/per adult</span>
            </h3>
            <span className="tour__rating d-flex align-items-center">
          <i class="ri-star-s-fill"></i>
          {avgRating ===0? null: avgRating} ({reviews?.length})
          
          </span>
        </div>

        {/* ============booking form=========== */}

        <div className="booking__form">
            <h5>Information</h5>
            <Form className='booking__info-form' onSubmit={handleClick}>
                <FormGroup>
                    <input type="text" placeholder='Name' id='fullname' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <input type="number" placeholder='Phone No.' id='phone' required onChange={handleChange} />
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                    <input type="date" placeholder='' id='bookAt' required onChange={handleChange} />
                    <input type="number" placeholder='Total Guest' id='guestSize' required onChange={handleChange} />

                </FormGroup>


            </Form>
        </div>

        <div className='booking__b'>
            <ListGroup>
                <ListGroupItem className='border-0 px-0'>
                    <h5 className='d-flex align-items-center gap-1'>
                        ₹{price}<i class="ri-close-fill"></i>1 adult
                    </h5>
                    <span>₹{price}</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0'>
                    <h5>Service Charge</h5>
                    <span>₹{serviceFee}</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0 total'>
                    <h5>Total</h5>
                    <span>₹{ta}</span>
                </ListGroupItem>
            </ListGroup> 
            <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
        </div>
    </div>
  )
}

export default Booking
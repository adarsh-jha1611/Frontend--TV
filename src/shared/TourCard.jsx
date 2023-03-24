import React from 'react'
import {Card, CardBody} from 'reactstrap'
import {Link} from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'

import './tour-card.css'


const TourCard = ({tour}) => {

    const{_id, title, place, photo, price,  reviews}= tour

    const{totalRating, avgRating} =calculateAvgRating(reviews)
    // const totalRating = reviews?.reduce((acc, item)=> acc+item.rating, 0)
    // const avgRating= totalRating ==0 ? '' : totalRating ==1? totalRating : (totalRating/ reviews?.length ).toFixed(1)



  return (
    <div className='tour__card'>
        <Card>
            <div className='tour-img'>
                <img src={photo} alt="tour-img" />
            </div>

        <CardBody>
      <div className="card__top d-flex align-items-center justify-content-between">
          <span className="tour__location d-flex align-items-center gap-1">
          <i class="ri-map-pin-fill"></i>{place}
          </span>
          <span className="tour__rating d-flex align-items-center gap-1">
          <i class="ri-star-s-fill"></i>{avgRating ===0? null: avgRating} {totalRating===0? 'No Ratings' :<span>({reviews.length})</span> }
          </span>
          
      </div>

      <h5 className="tour__title"><Link to={`/tours/${_id}`}>{title}</Link></h5>

      <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
          <h5>₹{price} <span>/per adult</span></h5>
          <button className='btn booking__btn'>
              <Link to={`/tours/${_id}`}>Visit Now</Link>
          </button>
      </div>
    </CardBody>
   </Card>


    </div>   
  )
}

export default TourCard
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import './View.css'

function View() {
    const {id} = useParams()
    const {allRestaurants,loading,error} = useSelector((state)=>state.restaurantSlice)
    const [restaurant,setRestaurant] = useState({})

    const [showHours, setShowHours] = useState(false);
    const [showReviews,setShowReviews] = useState(false)

  const handleCloseHoursModal = () => setShowHours(false);
  const handleShowHoursModal = () => setShowHours(true);
  const handleCloseReviewsModal = () => setShowReviews(false);
  const handleShowReviewsModal = () => setShowReviews(true);

    useEffect(()=>{
     setRestaurant(allRestaurants?.find(item=>item.id==id))
    },[])


     const {reviews} = restaurant;
     console.log(reviews);
     const {operating_hours} = restaurant;
     console.log(operating_hours);

  return (
    <div style={{marginTop:'100px'}} className='container' >
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
     
     
   <div className='blog-wrap'>
          <header>
            <p className='blog-date'></p>
            <h1>{restaurant?.name}</h1>
            <div className='blog-subCategory'>
                <div>
                {restaurant?.neighborhood}
                </div>
            
            </div>
          </header>
          <img src={restaurant?.photograph} alt='cover' />
          <p className='blog-desc'>Address: {restaurant?.address}</p>
          <p className='blog-desc'>Cuisine:{restaurant?.cuisine_type}</p>
          <div className="mt-2 d-flex justify-content-between ">
            <button className="btn btn-secondary p-2 w-25 my-2" onClick={handleShowHoursModal}>
              Operating Hours
            </button>
            <button className="btn btn-secondary p-2 w-25 my-2" onClick={handleShowReviewsModal}>
              Click here to view the reviews
            </button>
          </div>
          
        </div>
        

        <Modal size='lg' show={showHours} onHide={handleCloseHoursModal} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul>
              {
                  operating_hours? Object.entries(operating_hours).map(([key, value]) => (
                    <li className='m-3'>{key} : {value}</li>
                  )):<p>Nothing to display</p>
         
              }
            </ul>
        </Modal.Body>
        
      </Modal>

          <Modal size='lg' show={showReviews} onHide={handleCloseReviewsModal} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Reviews</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul>
              {
                  reviews?.length > 0 ? reviews?.map(review=>(
                      <li className='m-3'>{review?.comments}</li>
                  ))
                  
                  :<p>No reviews to display</p>
              }
            </ul>
        </Modal.Body>
        
      </Modal>
</div>
  )
}

export default View

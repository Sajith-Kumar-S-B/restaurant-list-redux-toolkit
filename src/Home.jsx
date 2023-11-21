import React, { useEffect } from 'react'
import { Row,Col,Spinner } from 'react-bootstrap'
import RestCard from './components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurants } from './redux/restaurantSlice'

function Home() {
    const {allRestaurants,loading,error} = useSelector((state)=>state.restaurantSlice)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchRestaurants())
    },[])
  return (
    <>
    <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
      {loading && <><Spinner animation="border" variant="info" /><span className='text-white ms-2'>Loading...</span></>}
    </div>
    <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
      {!loading && error? <div><span className='fw-bolder text-danger'>{error}</span></div>:null}
    </div>
      <Row>
        {!loading && allRestaurants.length>0?allRestaurants?.map((restaurant)=>(
        <Col className='px-5 py-3' sm={12} lg={4} md={6 } xl={3} >
         <RestCard restaurant={restaurant} />
  
          </Col>)):<div className='d-flex fw-bolder fs-5 justify-content-center align-items-center p-5'>No Restaurants available !!</div>
  }
      </Row>
    </>
  )
}

export default Home
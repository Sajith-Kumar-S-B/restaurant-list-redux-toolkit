import React, { useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import RestCard from './components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurants } from './redux/restaurantSlice'

function Home() {
    const allRestaurants = useSelector((state)=>state.restaurantSlice.allRestaurants)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchRestaurants())
    },[])
  return (
    <Row className='mt-5'>
      {allRestaurants.length>0?allRestaurants?.map((restaurant)=>(<Col className='px-5 py-3' lg={4} sm={12} md={6} xl={3} >
       <RestCard restaurant={restaurant} />

        </Col>)):null
}
    </Row>
  )
}

export default Home
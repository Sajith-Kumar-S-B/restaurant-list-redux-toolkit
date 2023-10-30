import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import './View.css'

function View() {
    const {id} = useParams()
    const {allRestaurants,loading,error} = useSelector((state)=>state.restaurantSlice)
    const [restaurant,setRestaurant] = useState({})


    useEffect(()=>{
     setRestaurant(allRestaurants?.find(item=>item.id===id))
    },[])


  return (
    <div style={{marginTop:'100px'}} className='container' >
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
     
    { restaurant? (<div className='blog-wrap'>
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
          <p className='blog-desc'>{restaurant?.address}</p>
        </div>):<div>Nothing to display</div>  }
</div>
  )
}

export default View

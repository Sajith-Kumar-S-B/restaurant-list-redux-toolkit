import React from 'react'

import {Navbar,Container} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { searchRestaurants } from '../redux/restaurantSlice';



function Header() {
  const dispatch = useDispatch()
  return (
    <div style={{width:'100%',backgroundColor:' #FC8019'}}>

    <Navbar expand="lg" style={{backgroundColor:' #FC8019'}} >
          <Container>
            <Navbar.Brand className='text-white fw-bolder'>
            <i className="fa-solid fa-utensils me-3"></i>
          Restaurant List</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <div className="d-flex ms-auto align-items-center">
              <input onChange={(e)=>dispatch(searchRestaurants(e.target.value))} type="text" className='form-control border-0 rounded-5 bg-dark text-white' placeholder='Search Restaurants'  />
              <i style={{marginLeft:'-30px'}} className='fa-solid fa-search'></i>
            </div>
            
          </Container>
        </Navbar>
            
    
        </div>
  )
}

export default Header
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

function RestCard({restaurant}) {
    const [show, setShow] = useState(false);

   
    const handleShow = () => setShow(true);
  return (
    <Card style={{ width: '18rem'}} className='shadow mb-5 border-0' onClick={handleShow} >
      <Card.Img style={{width:'100%',height:'12rem'}} className='img-fluid p-1'  variant="top" src={restaurant?.photograph} />
      <Card.Body>
        <Card.Title className='text-center'>{restaurant?.name} </Card.Title>
        <p className='text-center'>{restaurant?.cuisine_type}</p>
        <p className='text-center'>{restaurant?.neighborhood}</p>
        
      </Card.Body>
    </Card>
  )
}

export default RestCard
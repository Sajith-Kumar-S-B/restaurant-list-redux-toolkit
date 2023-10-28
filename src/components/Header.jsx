import React from 'react'
import { MDBIcon } from 'mdb-react-ui-kit'

import {Navbar,Container} from 'react-bootstrap';



function Header() {
  return (
    <div style={{width:'100%',backgroundColor:'#e7f1da'}}>

    <Navbar expand="lg" style={{backgroundColor:'#e7f1da'}} >
          <Container>
            <Navbar.Brand>
               <MDBIcon fas icon="clipboard-list" />
          Restaurant List</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
          </Container>
        </Navbar>
            
    
        </div>
  )
}

export default Header
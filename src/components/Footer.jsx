import React from 'react'

function Footer() {
  return (
    <div  id='footer' style={{width:'100%',height:'450px',backgroundColor:' #FC8019'}} className='d-flex justify-content-evenly align-items-center flex-column  text-dark '>
      <div  className='d-flex justify-content-evenly w-100 flex-wrap'>
        <div  className='d-flex flex-column justify-content-center align-items-center'>
           <h4>
           <i className="fa-solid fa-utensils me-2"></i>
      Restaurant  list</h4>
      <p>Lorem, ipsum dolor sit </p>
        </div>
        <div style={{width:'500px',height:'150px'}} className='element d-flex flex-column justify-content-center align-items-center'>
          <p>Get my daily tips on mindful living</p>
          
            <div className='d-flex flex-column'>
              <label htmlFor='subscribe'>
                Email*
                </label>
               <div className='d-flex justify-content-center align-items-center'>
                  <input type='text'  id='subscribe' className='form-control rounded border-0'  />
                  <button className='bg-dark btn ms-2 d-flex justify-content-center  align-items-center ' style={{color:"white"}}>Subscribe</button>
               </div>
            </div>
            
         
        </div>
        <div  className='d-flex flex-column justify-content-center text-center'>
        Breathe by Tammy Gallaway
      <br />
Mail: sajith@gmail.com
   <br />

Phone number: 123-456-7890
<div className='icons mt-3 d-flex justify-content-between fs-5 text-white'>
              <i class="fa-brands fa-linkedin"></i>
    <i className="fa-brands fa-facebook"></i>
     <i className="fa-solid fa-envelope"></i>
       <i className="fa-brands fa-whatsapp"></i>
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-instagram"></i>
              </div>
        </div>
      </div>
     
      <div style={{width:'400px',height:'50px'}} className='w-100 d-flex justify-content-center align-items-end text-center '>
        <p>© 2023 by Sajith Kumar. Project Fair</p>
      </div>

     
    </div>
  )
}

export default Footer
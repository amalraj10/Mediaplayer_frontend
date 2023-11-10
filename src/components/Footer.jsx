import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div style={{width:'100%', height:'300px' }} className='d-flex justify-content-center align-items-center flex-column w-100'>
        <div className='footer d-flex justify-content-evenly align-items-center  w-100'>
         <div className='website' style={{width:'400px'}}>
            <h4>  <i class="fa-solid fa-video fa-bounce text-warning me-4"></i> {' '}
    Vedio Player</h4>
    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum accusantium error odit! Illum velit tempora nulla nemo quo. Quam pariatur iusto error optio voluptates eligendi beatae ipsam, unde alias?</h6>
    <h6>Lorem, quod recusandae excepturi rerum quae.</h6>
         </div>
<div className='links d-flex flex-column'>
    <h3>Links</h3>
    <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
    <Link to={'/home'} style={{textDecoration:'none',color:'white'}}> Home Page</Link>
    <Link to={'/watch-History'} style={{textDecoration:'none',color:'white'}}> Watch History</Link>
</div>
<div className='guides d-flex flex-column'>
<h3>Guides</h3>
    <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React</Link>
    <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}>React Boootstrap</Link>
    <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}> Bootwatch</Link>
</div>
<div className='contact '>
<h3 className='Mb-3'>Contact Us</h3>
<div className='d-flex mb-2'>
    <input type="text"  className='form-control' placeholder='Enter Your Email ID'/>
    
</div>
<button className='btn btn-warning text warning text-white ms-5 '>Subscribe</button>
<div className='icons d-flex justify-content-evenly mt-2'>
<Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
    <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands  fa-twitter fa-2x"></i></Link>
    <Link to={'https://react-bootstrap.netlify.app/'}style={{textDecoration:'none',color:'white'}}> <i class="fa-brands fa-white fa-linkedin fa-2x"></i></Link>
    <Link to={'https://react-bootstrap.netlify.app/'}style={{textDecoration:'none',color:'white'}}> <i class="fa-brands fa-facebook fa-2x"></i></Link>
</div>
</div>
        </div>
        <p>Copyright @ 2023 Media Player.Bulid with React</p>
    </div>
  )
}

export default Footer
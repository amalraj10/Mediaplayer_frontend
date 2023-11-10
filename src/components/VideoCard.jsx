import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { addHistory, deleteAVideo } from '../services/appAPI';
function VideoCard({displayVideo,setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {setShow(true)
   const{caption,embedlink}=displayVideo
   let today = new Date()
   console.log(today);
   let timeStamp =   new Intl.DateTimeFormat('en-GB', {year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
   console.log(timeStamp);
   let videoDetails = {
    caption,embedlink,timeStamp
   }
await addHistory(videoDetails)
  }
  const removeVideo = async(id)=>{
    const response = await deleteAVideo(id)
    setDeleteVideoStatus(true)
  }
  //fuction to drag the videocard
  const cardDrag = (e,id)=>{
    console.log(`The id of the videocard dragged is ${id}`);
    e.dataTransfer.setData('videoID',id)
  }

  return (
    
    <div  className='mt-3 '>
        
  <Card style={{ width: '230px' , height:'280px'}} draggable onDragStart={(e)=>cardDrag(e,displayVideo?.id)}>
      <Card.Img variant="top" onClick={handleShow} src={displayVideo.url} />
      <Card.Body className=' d-flex  align-items-center' >
        <Card.Title className=' d-flex  align-items-center  ' style={{justifyContent:'space-between'}}>{displayVideo.caption}
     </Card.Title>
        
           <button onClick={()=>removeVideo(displayVideo?.id)}  className='  btn btn-danger align-items-center ' ><i class="fa-solid fa-trash"></i></button>
      </Card.Body>
      
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="470" height="315" src={`${displayVideo.embedlink}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
      
      </Modal>

    </div>
  )
}

export default VideoCard

import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideos } from '../services/appAPI'

function View(uploadVideoStatus) {
const [allVideo,setAllVideo] = useState([])

const[deleteAVideoStatus,setDeleteAVideoStatus]= useState(false)


  const getAllUploadedVideo = async()=>{
    const response = await getAllVideos()
    // console.log(response);
    const {data} = response
    setAllVideo(data)
    // console.log(data);
  }
  console.log(setAllVideo);
  useEffect(()=>{
    getAllUploadedVideo()
    setDeleteAVideoStatus(false)
  },[uploadVideoStatus,deleteAVideoStatus])
  return (
    <>
    <h5>All Videos</h5>
  <Row>
  { allVideo.length>0?
   allVideo.map((video)=>( <Col sm={12} md={6} lg={4} xl={4}>
    <VideoCard displayVideo ={video} setDeleteVideoStatus={setDeleteAVideoStatus}/>
  </Col>))
  :
  <p>Nothing to display</p>
}
</Row>
    </>
  )
}

export default View                                                                 
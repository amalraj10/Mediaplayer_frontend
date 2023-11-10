import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addAllCategory, deletecategory, getAVideo, getAllCategories, getAllVideos, updateCategory } from '../services/appAPI';
import { Col, Row } from 'react-bootstrap';
import VideoCard from './VideoCard';
function Category() {
const [categoryName,setCategoryName] = useState('')
 const[category,setCategory] = useState([])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
//function to add category
const addCategory = async()=>{
  console.log(categoryName);
  if(categoryName){
  let bod = {
    categoryName,
    allvideos:[]
  }
  const response = await addAllCategory(bod)
  console.log(response);
  if(response.status>200 && response.status<=300){
   toast.success('Category added Successfully')
   setCategoryName("")
   handleClose()
  }
  else{
    toast.error('Something went wrong.Please Try Later')
  }
}
else{
  toast.warning('Something went wrong.Please Try Later')
}
 
}
//function to get all categories
const allCategory = async()=>{
  const {data} = await getAllCategories()
 setCategory(data)
 allCategory()
}

//function to delete category
const deleteACategory = async(id)=>{
  await deletecategory(id)
  //to get remaining categories
  allCategory()
}
//function to prevent  reload so that the data that we send want lost
const dragOver = (e)=>{
  e.preventDefault()
}

const videoDrop = async(e,categoryId)=>{
  console.log(`dropped on the category id : `,categoryId);

  //to get the data send from vedioCard
  let videoId = e.dataTransfer.getData('videoID')
  console.log(videoId);

 const {data} = await getAVideo(videoId)
 console.log(data);

const selectedCategory = category.find(item=>item.id===categoryId)
selectedCategory.allvideos.push(data)
console.log(selectedCategory);

await updateCategory(categoryId,selectedCategory)
// allCategory()
}

useEffect(()=>{
  allCategory()
},[])
  return (
 <>
        <div className=''> 
             <button onClick={handleShow} style={{width:'300px'}}  className='btn btn-warning mt-2 ms-1'> {' '}Add new Category</button>
             </div>
             {category?.length>0?category?.map((item)=>(             <div className='m-5 border border-secondary p-3 rounded'>
              <div className='d-flex justify-content-between align-items-center ' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
                <h6>{item.categoryName}</h6>
                <button onClick={()=>deleteACategory(item?.id)} className='  btn btn-danger align-items-center ' ><i class="fa-solid fa-trash"></i></button>
                </div>
              
                <Row>
            <Col>
           {
            item?.allvideos?.length>0?
            item?.allvideos?.map((card)=>(<VideoCard displayVideo={card}/>)):
            <p>Nothing to display</p>
           }
            </Col>
          </Row>
                
             </div>)):
             <p className='m-3 fw-bolder fs-5 text-danger '>No Category Added</p>
 }
             <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film me-2 text-warning"></i>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border border-secondary p-3 rounded'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Category Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)} />
       
      

      </Form.Group>
     
    
     </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={addCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
 </>
  )
}

export default Category
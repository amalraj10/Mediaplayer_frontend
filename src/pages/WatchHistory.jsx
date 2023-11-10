import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { deleteVideoHistory, getAllHistory } from '../services/appAPI';

function WatchHistory() {
  const[history,setHistroy]= useState({})
  const allHistory = async()=>{
    const {data} = await getAllHistory()
    console.log(data);
    setHistroy(data)
  }
  console.log(history);

  //function to remove histroy
  const removeHistory = async(id)=>{
    await deleteVideoHistory(id)
    allHistory()
  }
  useEffect(()=>{
    allHistory()
  },[])
  return (

    <div>
      <div className=' container mt-5 d-flex'>
      <h3>Watch History</h3>
      <Link to={'/home'}  style={{textDecoration:'none',marginLeft:'700px'}}> <h3>Back to Home</h3></Link>
      </div>
      <div className='d-flex align-items-center justify-content-center text-light mt-5 mb-5'>
      <Table striped bordered hover style={{border: '1px solid black', borderCollapse: 'collapse' ,width:'1200px'}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>TimeStamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
        history.length>0?
        history.map((item,index)=>(
        <tr>
          <td>{index+1}</td>
          <td>{item.caption}</td>
          <td><Link to={item.embedlink}>{item.embedlink}</Link></td>
          <td>{item.timeStamp}</td>
          <td>
           <button onClick={()=>removeHistory(item?.id)}  className='  btn btn-danger align-items-center ' ><i class="fa-solid fa-trash"></i></button></td>
        </tr>
            ) )
            :
            <p>Nothing to display</p>
        }
      </tbody>
    </Table>
      </div>
    </div>
  )
}

export default WatchHistory
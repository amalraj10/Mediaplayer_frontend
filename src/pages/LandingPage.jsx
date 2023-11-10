import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function LandingPage() {
    const navigativeByUrl = useNavigate()
  return (
    <>
    <Row>
        <Col></Col>
        <Col lg={5}>
            <h2 className='mt-5'>Welcome to<span className='text-warning'>Media Player</span></h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quaerat vero vitae esse officiis temporibus sit laboriosam eos commodi sequi exercitationem perferendis nisi dolorem, veniam dicta mollitia reiciendis ratione possimus!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae nam fugit fugiat sit doloribus necessitatibus ex maiores ipsam iure inventore exercitationem eaque eos consequatur incidunt provident suscipit, ipsa nihil?</p>
            <button onClick={()=>navigativeByUrl('/home')} className='btn btn-warning mt-5'>Get Started</button>
        </Col>
        <Col></Col>
        <Col lg={5}>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no img" />
        </Col>
    </Row>
    <div className="container d-flex  justify-content-center alighn-items-center w-100 mt-5 mb-5 flex-column">
        <h3 className=' d-flex  justify-content-center alighn-items-center '>Features</h3>
        <div className="cards  d-flex justify-content-center alighn-items-center mt-5">

    <Card className='p-4 me-4' style={{ width: '22rem' }}>
      <Card.Img style={{width:'100%',height:'300px'}} variant="top" src="https://i.pinimg.com/originals/4c/1a/52/4c1a52e76ecb222ace05df67dff0796a.gif" />
      <Card.Body>
        <Card.Title>Managing video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4 me-4' style={{ width: '22rem' }}>
      <Card.Img  style={{width:'100%',height:'300px'}} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4 me-4' style={{ width: '22rem' }}>
      <Card.Img  style={{width:'100%',height:'300px'}} variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>Composed Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

   
        </div>
        
      </div>
     <div className='container border border-2  rounded border-secondary p-5 mt-5 mb-5 flex-column'>
      <Row>
        <Col lg={5}>
            <h3 className='text-warning'>Simple Fast and Powerful</h3>
            <p> <span className='fs-5 fw-bolder'>Play Everthing</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, incidunt quibusdam! Cum enim itaque repellat doloribus excepturi illo qui minus, aliquid architecto corrupti, libero mollitia non accusamus harum recusandae facere!</p>
             <p> <span className='fs-5 fw-bolder'>Play Everthing</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, incidunt quibusdam! Cum enim itaque repellat doloribus excepturi illo qui minus, aliquid architecto corrupti, libero mollitia non accusamus harum recusandae facere!</p>
             <p> <span className='fs-5 fw-bolder'>Play Everthing</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, incidunt quibusdam! Cum enim itaque repellat doloribus excepturi illo qui minus, aliquid architecto corrupti, libero mollitia non accusamus harum recusandae facere!</p>
        </Col>
        <Col></Col>
        <Col lg={6}><iframe width="100%" height="400" src="https://www.youtube.com/embed/MSaj9Otax6Y" title="LEO - Im Scared Lyric | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Col>
      </Row>
     </div>
    </>
  )
}

export default LandingPage     
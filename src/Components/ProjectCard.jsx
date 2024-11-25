import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'


const ProjectCard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
       <Card onClick={handleShow} className='btn shadow'>
      <Card.Img height={'200px'} variant="top" src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>
    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-CIE3vhYSRGlQDPhMkaLCd2JYJOLxC3EFA&s" alt="" />
            </div>
            <div className="col-lg-6">
              <h3>Title</h3>
              <h6>Languages used : <span className='text-danger'>language</span></h6>
              <p style={{textAlign:'justify'}}><span>Project Overview</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quo officiis, est repellat repellendus placeat iusto fugiat odit. Quia deserunt aliquid excepturi provident repellendus magnam totam nemo sit eligendi mollitia.</p>
            </div>
          </div>
            <div className='mt-2 float-start'>
              <a href="https://github.com/Anugrah7/flappy-bird-js.git" target='_blank' className='btn btn-secondary me-2'><i className='fa-brands fa-github'></i> </a>
              <a href="https://flappy-bird-js-xi.vercel.app/" target='_blank' className='btn btn-secondary'><i className='fa-solid fa-link'></i></a>
            </div>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard

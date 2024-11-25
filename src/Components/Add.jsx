import React, { useState } from 'react'
import { Modal,Button } from 'react-bootstrap'
import upload from '../assets/upload.png'


const Add = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className='btn btn-warning text-dark fw-bolder'>+ New Project</button>
      <Modal  show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input style={{display:'none'}} type="file" />
                <img className='img-fluid' height={'400px'} src={upload} alt="" />
              </label>
              <div className="text-danger fw-bolder">*Upload Only the Following File types (jpeg ,jpg ,png) here !!</div>
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Title' />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Languages' />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Overiew' />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Github Link' />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Website Link' />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger text-dark" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning text-dark">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add

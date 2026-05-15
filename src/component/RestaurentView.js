import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ListGroup, Image, Container, Row, Col } from 'react-bootstrap';
import '../css/View.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Review from './Review';
import {useDispatch, useSelector } from 'react-redux';
import { Resturent_list } from '../actions/Homeaction'




function RestaurentView() {

    const params=useParams()
    console.log(params.id);
    // const [restaurant_data,setdata]=useState([])
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const FetchData= async()=>{
    //     const result = await fetch('/restaurent.json')
    //     result.json().then(
    //         data=>{
    //             setdata(data.restaurants)
    //         }
    //     )
    // }
    // console.log(restaurant_data);
    // const datas=useSelector(state=>state. Resturentreducer)
    // console.log(datas);
    // restructure
    const {restaurants}=useSelector(state=>state. Resturentreducer)
    console.log(restaurants);

    // const checkId=restaurant_data.find(a=>a.id==params.id)
    const checkId=restaurants.find(a=>a.id==params.id)
    const dispatch=useDispatch()
    useEffect(()=>{
        // FetchData()
        dispatch(Resturent_list())
      
    },[])

      
    
  return (
    
    <Container className="my-5">
{checkId ? (
    <Row className="gy-4">
        <Col md={6} lg={5}>
            <Image 
                src={checkId.photograph} 
                fluid 
                rounded 
                className="shadow-sm w-100" 
                style={{ maxHeight: '600px', objectFit: 'cover' }}
            />
        </Col>
        <Col md={6} lg={7}>
            <ListGroup variant="flush" className="shadow-sm rounded border">
                <ListGroup.Item className="bg-light">
                    <h1 className="display-5 mb-0">{checkId.name}</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Address:</strong> {checkId.address}
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Neighborhood:</strong> {checkId.neighborhood}
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button variant="outline-dark" onClick={handleShow} className="w-100 py-2">
                        View Operating Hours
                    </Button>

                    <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton className="bg-dark text-white">
                            <Modal.Title>Operating Hours</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ListGroup variant="flush">
                                {Object.entries(checkId.operating_hours).map(([day, hours]) => (
                                    <ListGroup.Item key={day} className="d-flex justify-content-between align-items-center">
                                        <strong>{day}</strong>
                                        <span className="text-muted">{hours}</span>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </ListGroup.Item>
                <ListGroup.Item className="bg-light">
                    <Review comment={checkId.reviews} />
                </ListGroup.Item>
            </ListGroup>
        </Col>
    </Row>
) : (
    <div className="text-center py-5">
        <h3>Loading restaurant details...</h3>
    </div>
)}
</Container>
   
  )
    
}

export default RestaurentView
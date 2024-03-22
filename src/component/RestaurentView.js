import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ListGroup,Image } from 'react-bootstrap';
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
    
    <div>
{checkId?(
   
        <div className='main'>
            <div >
            <Image className="image" src={checkId.photograph}rounded />
            </div>
            <div >
                  <ListGroup className='list'>
                  <ListGroup.Item><h1> {checkId.name}</h1></ListGroup.Item>
                   <ListGroup.Item>{checkId.address}</ListGroup.Item>
                  <ListGroup.Item>{checkId.neighborhood}</ListGroup.Item>
                  <ListGroup.Item>
                  <Button variant="dark" onClick={handleShow}>Operating Hours
                  </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>

           <ListGroup>
              <ListGroup.Item>Monday   :{checkId.operating_hours.Monday}</ListGroup.Item>
              <ListGroup.Item>Tuesday  :{checkId.operating_hours.Tuesday}</ListGroup.Item>
              <ListGroup.Item>Wednesday:{checkId.operating_hours.Wednesday}</ListGroup.Item>
              <ListGroup.Item>Thursday :{checkId.operating_hours.Thursday}</ListGroup.Item>
              <ListGroup.Item>Friday   :{checkId.operating_hours.Friday}</ListGroup.Item>
              <ListGroup.Item>Saturday :{checkId.operating_hours.Saturday}</ListGroup.Item>
              <ListGroup.Item>Sunday   :{checkId.operating_hours.Sunday}</ListGroup.Item>
            </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
  
        </Modal.Footer>
      </Modal>
                  </ListGroup.Item>
                   <ListGroup.Item>    
                    <Review  comment={checkId.reviews}/>
                   </ListGroup.Item>
                  </ListGroup> 
            </div>
         </div>
 

):"error"
}

   </div>
   
  )
    
}

export default RestaurentView
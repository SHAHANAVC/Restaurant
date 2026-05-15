import React, { useEffect, useState } from 'react'
import CardDisplay from './CardDisplay'
import { Container, Row,Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Resturent_list } from '../actions/Homeaction'
function Home() {

    
    // const [restaurant_data,setdata]=useState([])

    // const FetchData= async()=>{
    //     const result = await fetch('/restaurent.json')
    //     result.json().then(
    //         data=>{
    //             setdata(data.restaurants)
    //         }
    //     )

    // }
    // console.log(restaurant_data);
    const {restaurants}=useSelector(state=>state.Resturentreducer)
    console.log(restaurants);
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(Resturent_list())
        // FetchData()
    },[])

  return (
    <Container className="mt-4">
        <Row className="g-4">
            {restaurants && restaurants.map(a=>(
                  <Col key={a.id} xs={12} sm={6} md={4} lg={3}>
                     <CardDisplay data={a}/>
                  </Col>
            ))}
          
        </Row>
        

    </Container>
  )
}

export default Home
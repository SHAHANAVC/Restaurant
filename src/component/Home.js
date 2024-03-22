import React, { useEffect, useState } from 'react'
import CardDisplay from './CardDisplay'
import { Row,Col } from 'react-bootstrap'
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
    <div>
        <Row>
            {restaurants.map(a=>(
                  <Col md={3} sm={1}>
                     <CardDisplay data={a}/>
                  </Col>
            ))}
          
        </Row>
        

    </div>
  )
}

export default Home
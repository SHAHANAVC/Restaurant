import axios from "axios";
 import {SUCCESS,FAIL } from '../constants/Resturentconstent'

 export const Resturent_list=()=>async(dispatch)=>{
    try{
    const {data}=await axios.get('/restaurent.json')
    console.log(data.restaurants);
    dispatch({
        payload:data.restaurants,type:SUCCESS
    })
    }
    catch(error){
        dispatch({
            payload:error,type:FAIL
        })
    }
    
    
}
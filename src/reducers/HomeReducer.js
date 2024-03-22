import { SUCCESS,FAIL } from "../constants/Resturentconstent";


export  const homereducer=(state={restaurants:[]},action)=>{
    console.log(action.type);
    switch(action.type)
    {
        case SUCCESS:return{
            restaurants:action.payload
        }
        case FAIL:return{
            restaurants:action.payload
        }
        default:
            return state
    }
}

import { Constant } from "../../constants/users";
import axios from 'axios';
import {toast } from 'react-toastify';

export const userLogin = ({email, password}) => async (dispatch) => {
    try{

        dispatch({ type: Constant.PROCESSING_LOGIN_REQUEST });

        const config = {
            'headers':{
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('/api/users/login',{email, password} ,config);
        if(data.is_error){
           
            toast.error(data.message, {
                theme: 'colored'
            })

            dispatch({
                type: Constant.LOGIN_REQUEST_FAILED,
                payload: data.message
            });
        }else{
           
            dispatch({
                type: Constant.LOGIN_REQUEST_PROCESSED,
                payload: data.data.user
            });
            localStorage.setItem("user", JSON.stringify(data.data.user));
        }
        
    }catch(error){
        console.log("User could't be logged in, please have a look at your code");
    }
}
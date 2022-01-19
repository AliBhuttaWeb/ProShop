import { Constant } from "../../constants/users";
import axios from 'axios';
import { toast } from "react-toastify";

export const userRegister = (name, email, password) => async (dispatch) => {   
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        const { data } = await axios.post('/api/users/register', { name, email, password }, config);
       
        if(data.is_error){

            toast.error(data.message , {
                theme: 'colored'
            });

            dispatch({
                type: Constant.REGISTER_REQUEST_FAILED,
                payload: data.message
            })
       
        }else{
            dispatch({
                type: Constant.REGISTER_REQUEST_PROCESSED,
                payload: data.data.user
            })

            dispatch({
                type: Constant.LOGIN_REQUEST_PROCESSED,
                payload: data.data.user
            })

            localStorage.setItem("user", JSON.stringify(data.data.user));
        }

    }catch(error){
        console.log("User couldn't be registered");
    }
}
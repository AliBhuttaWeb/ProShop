import { Constant } from "../../constants/orders";
import axios from 'axios';
import { toast } from 'react-toastify';

export const createOrder = (order) => async (dispatch, getState) => {
    try{
        dispatch({ type: Constant.ORDER_CREATE_REQUEST_INITIATED });

        const { userLogin: {user} } = getState();

        const config = {
            headers:{
                'Content-Type': 'application/json',
                'auth_token': user.token
            }
        }
        const { data } = await axios.post('/api/orders/create', order, config);
       
        if(data.is_error){
            toast.error(data.message, {
                theme: 'colored'
            });

            dispatch({
                type: Constant.ORDER_CREATE_REQUEST_FAILED,
                payload: data.message
            });
        }else{
            dispatch({
                type: Constant.ORDER_CREATED_SUCCESS,
                payload: data.data.order
            });
        }

    }catch(error){
        console.log("Order couldn't create, see logs", error.message);
    }
}
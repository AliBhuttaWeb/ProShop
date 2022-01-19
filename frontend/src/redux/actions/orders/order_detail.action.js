import { Constant } from "../../constants/orders";
import axios from 'axios';
import { toast } from 'react-toastify';

export const getOrderDetail = (id) => async (dispatch, getState) => {
    try{
        dispatch({ type: Constant.FETCHING_ORDER_DETAIL });

        const { userLogin: { user } } = getState();
        const token = user.token;
        const config = {
            headers:{
                auth_token: token
            }
        }
        const { data } = await axios.get(`/api/orders/${id}`, config)

        if(data.is_error){
            toast.error(data.message, {
                theme: "colored"
            });

            dispatch({
                type: Constant.FETCHING_ORDER_DETAIL_FAIL,
                payload: data.message
            });
        }else{
            dispatch({
                type: Constant.FETCHED_ORDER_DETAIL,
                payload: data.data.order
            });
        }

    }catch(error){
        console.log("Order detail couldn't fetched...");
    }
}
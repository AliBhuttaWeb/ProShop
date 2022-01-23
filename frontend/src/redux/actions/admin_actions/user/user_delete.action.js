import { Constant } from '../../../constants/admin_constants/user.constant';
import axios from 'axios';
import { toast } from 'react-toastify';

export const deleteUser = (id) => async(dispatch, getState) => {
    try{
        dispatch({ type: Constant.DELETING_USER });

        const { userLogin: { user } } = getState();
        const config = {
            headers:{
                'Content-Type': 'application/json',
                auth_token: user.token
            }
        };
        
        const { data } = await axios.delete(`/api/admin/users/${id}/delete`, config);
        
        if(data.is_error){
            toast.error(data.message, {theme: 'colored'});
            dispatch({
                type: Constant.DELETING_USER_FAILED,
                payload: data.message
            });
        }else{
            toast.success(data.message, {theme: 'colored'});
            dispatch({
                type: Constant.USER_DELETED,
                payload: data.message
            });
        }
        
    }catch(error){
        console.log("User couldn't be deleted");
    }
}
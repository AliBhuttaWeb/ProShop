import { Constant } from '../../../constants/admin_constants/user.constant';
import axios from 'axios';
import { toast } from 'react-toastify';

export const getUsersList = () => async(dispatch, getState) => {
    try{
        dispatch({ type: Constant.FETCHING_USER_LIST });

        const { userLogin: {user} } = getState();
        const config = {
            headers:{
                auth_token: user.token
            }
        }
        
        const { data } = await axios.get('/api/admin/users', config);
        if(data.is_error){
            toast.error(data.message, { theme: 'colored' });
            dispatch({
                type: Constant.FTECHING_USER_LIST_FAILED,
                payload: data.message
            })
        }else{
            dispatch({
                type: Constant.FETCHED_USER_LIST,
                payload: data.data.users
            });
        }
    }catch(error){
        console.log("User list couldn't fetched");
    }
}
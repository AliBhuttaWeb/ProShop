import { Constant } from "../../../constants/admin_constants/upload.constant";
import axios from 'axios';

export const uploadImage = (image) => async (dispatch, getState) => {
    try{
        dispatch({ type: Constant.UPLOADING_IMAGE });

        const { userLogin: { user } } = getState();
        const config = {
            headers:{
                'Content-Type': 'multipart/form-data',
                auth_token: user.token,
            }
        }
        
        const { data } = await axios.post('/api/admin/upload/', image, config);
        
    }catch(error){
        console.log("Image couldn't be uploaded");
    }
}
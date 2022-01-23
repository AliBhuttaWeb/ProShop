import { Constant } from '../../../../constants/admin_constants/upload.constant';

const initial_state = {};

export const AdminImageUploadReducer = (state = initial_state, action) => {
    switch(action.type){
        case Constant.UPLOADING_IMAGE:
            return { ...state, is_loading: true, message: null, error: null };
        case Constant.IMAGE_UPLOADED:
            return { ...state, is_loading: false, message: action.payload, error: null };
        case Constant.UPLOADING_IMAGE_FAILED:
            return { ...state, is_loading: false, message: null, error: action.payload };
        
        default: 
            return state;
    }
}
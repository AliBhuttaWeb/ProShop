import { Constant } from "../../constants/users";

export const logoutUser = () => async (dispatch) => {
    localStorage.removeItem("user");
    dispatch({ type: Constant.USER_LOGOUT_REQUEST })
}
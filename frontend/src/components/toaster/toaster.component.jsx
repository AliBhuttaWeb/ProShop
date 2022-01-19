import { ToastContainer, toast } from "react-toastify";

export const Toaster = ({ message, error_type, theme_type }) => {

    const callToaster = () => {
        const theme = theme_type ? theme_type : null;
        if(error_type === "error"){
            toast.error(message, {
                theme: theme
            });
        }else if(error_type === "info"){
            toast.info(message, {
                theme: theme
            });
        }else if(error_type === "success"){
            toast.success(message, {
                theme: theme
            });
        }else if(error_type === "warn"){
            toast.warn(message, {
                theme: theme
            });
        }
    }
    
    return <>
            { callToaster(message) } 
            <ToastContainer />
    </>
} 
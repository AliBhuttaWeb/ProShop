import { Spinner } from 'react-bootstrap';
import style from './loader.module.css';

export const Loader = () => {
    return <>
        <div className={ style['spinner-center'] }>
            <Spinner animation="border" role="status"> 
            
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    </>
}
import { LinkContainer } from "react-router-bootstrap"
import { Button } from 'react-bootstrap';

export const UserData = (props) => {
    const { user: { _id, name, email , is_admin }, deleteHandlder} = props;
  
    return <>
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                {
                    is_admin 
                    ?
                        <i className='fas fa-check' style={{color:"green"}}></i>
                    :
                        <i className='fas fa-times' style={{color:"red"}}></i>

                }
                
            </td>
            <td>
                <LinkContainer to={`/admin/edit/user/${_id}`}  style={{color: "white"}}>
                    <Button className='btn-sm' variant="info">
                        <i className='fas fa-edit'></i>
                    </Button>
                </LinkContainer>

                <Button className='btn-sm' variant="danger" style={{marginLeft: "10px"}} onClick={() => deleteHandlder(_id)}>
                    <i className='fas fa-trash'></i>
                </Button>
            </td>
        </tr>
    </>
}
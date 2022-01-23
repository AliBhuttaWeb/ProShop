import { Button } from 'react-bootstrap';

export const OrderItem = ({_id, order_items, user, total_price,is_paid, is_delivered, deleteHandler }) => {
        
    return <>
        <tr>
            <td>{_id}</td>
            <td>
                <ol type="1">
                    { order_items.map((item, indx) => <li  key={indx}> {item.name} </li>) }
                </ol>
            </td>
            <td>{user && user.name}</td>
            <td>${total_price}</td>
            <td>
                {
                    is_paid 
                    ? 
                        <i className="fas fa-check" style={{color: "green"}}></i>
                    :
                        <i className="fas fa-times" style={{color: "red"}}></i>
                }
            </td>
            <td>
                {
                    is_delivered 
                    ? 
                        <i className="fas fa-check" style={{color: "green"}}></i>
                    :
                        <i className="fas fa-times" style={{color: "red"}}></i>
                }
            </td>
            <td>
                <Button  variant="danger" className="btn-sm" onClick={ () => deleteHandler(_id) }> <i className="fas fa-trash"></i> </Button>
            </td>
        </tr>
    </>
}
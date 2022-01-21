import { Col, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsersList } from '../../../redux/actions/admin_actions/user/user_list.action';
import { Loader } from '../../loader/loader.component';
import { ProductItem } from '../product_item/product_item.component';

export const UsersList = () => {
    const dispatch = useDispatch();
    const { is_loading, users } = useSelector(state => state.adminUsers);
    console.log("ss", users);
    useEffect( () => {
        dispatch(getUsersList());
    }, [dispatch]);

    return <>
        {is_loading && <Loader />}
        <Col sm={12} md={9} lg={9} className='py-2'>
            <h2 className='text-center py-3'> Users List </h2>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map( user => <ProductItem key={ user._id } user={user}/>) }
                   
                </tbody>
            </Table>
        </Col>
    </>
}
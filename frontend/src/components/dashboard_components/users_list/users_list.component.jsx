import { Col, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsersList } from '../../../redux/actions/admin_actions/user/user_list.action';
import { Loader } from '../../loader/loader.component';
import { UserData } from '../user_data/user_data.component';
import { deleteUser } from '../../../redux/actions/admin_actions/user/user_delete.action';

export const UsersList = () => {
    const dispatch = useDispatch();
    const { is_loading, users } = useSelector(state => state.adminUsers);
    const { is_loading: deleting_user } = useSelector(state =>state.adminUserDelete);
    
    useEffect( () => {
        dispatch(getUsersList());
    }, [dispatch]);

    const deleteHandlder = (id) => {
        dispatch(deleteUser(id));
        dispatch(getUsersList());
    }    

    return <>
        {is_loading && <Loader />}
        {deleting_user && <Loader />}
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
                    { users.map( user => <UserData key={ user._id } user={user} deleteHandlder={deleteHandlder} />) }
                   
                </tbody>
            </Table>
        </Col>
    </>
}
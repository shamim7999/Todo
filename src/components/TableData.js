import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function TableData() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Load users from localStorage when component mounts
        const storedUsers = JSON.parse(localStorage.getItem('userList')) || [];
        setUsers(storedUsers);
        console.log("Rfreshed");
    }, []);

    useEffect(() => {
        localStorage.setItem('userList', JSON.stringify(users));
        const storedUsers = JSON.parse(localStorage.getItem('userList'));
        console.log('New User: ', storedUsers);
        // setUsers(storedUsers);
    }, [users]);

    const handleClick = (user) => {
        console.log(user.firstName);
    };

    return (
        <Table striped bordered hover className='text-center'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Created</th>
                    <th>Updated</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.description}</td>
                        <td>{user.priority}</td>
                        <td>{new Date(user.created).toLocaleString()}</td>
                        <td>{new Date(user.updated).toLocaleString()}</td>
                        <td>
                            <button className='btn btn-success' onClick={() => handleClick(user)}>Update</button> &nbsp;
                            <button className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default TableData;

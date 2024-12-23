import React, { useState } from 'react';
import UserForm from '../../components/UserForm';
import styles from './MainPage.module.css';

const MainPage = () => {
    const [users, setUsers] = useState([]);

    const addUser = (user) => setUsers((prevUsers) => [...prevUsers, user]);
    const deleteUser = (index) => setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
    const clearUsers = () => setUsers([]);

    return (
        <div className={styles.container}>
            <h1>Пользователь</h1>
            <UserForm addUser={addUser} clearUsers={clearUsers} />
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.length === 0 ? (
                    <tr>
                        <td colSpan="6">Таблица пуста</td>
                    </tr>
                ) : (
                    users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>
                                <button onClick={() => deleteUser(index)}>Удалить</button>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
};

export default MainPage;
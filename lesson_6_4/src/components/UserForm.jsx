import React from 'react';
import { useForm } from 'react-hook-form';

const UserForm = ({ addUser, clearUsers }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        addUser(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {['name', 'username', 'email', 'phone'].map((field) => (
                <div key={field}>
                    <input {...register(field, { required: true })} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} />
                    {errors[field] && <span>заполните поле</span>}
                </div>
            ))}
            <input {...register('website')} placeholder="Website" />
            <button type="submit">Создать</button>
            <button type="button" onClick={clearUsers}>Очистить таблицу</button>
        </form>
    );
};

export default UserForm;

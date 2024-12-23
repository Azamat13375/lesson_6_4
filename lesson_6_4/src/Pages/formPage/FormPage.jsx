import React from 'react';
import {useForm} from "react-hook-form";
import errors from "eslint-plugin-react/lib/util/error.js";



function FormPage() {

    const {
        register,
        handleSubmit,
        formState
    } = useForm();

    function send (values) {
        console.log(values);
    }

    return (
        <div>
            <h2>react-hook-form</h2>

            <form onSubmit={handleSubmit(send)}>
                <label><input
                    type="text"
                    placeholder="username"
                    {...register("username", {required: true})}
                />
                    {errors.username && <small>напиши данные</small>}

                    </label>
                <label>
                    <input
                        type="text"
                        placeholder="email"
                        {...register("email",)}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="age"
                        {...register("age",)}
                        />
                </label>
            <button>send</button>
        </form>

</div>
)
    ;
}

export default FormPage;
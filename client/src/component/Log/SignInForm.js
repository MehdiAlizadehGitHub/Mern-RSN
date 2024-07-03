import React, { useState } from 'react';
import axios from "axios";

const SignInForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const emailError = document.querySelector('.email.error')
        const passwordError = document.querySelector('.password.error')

        await axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/user/login`,
            withCredentials: true,
            data: {
                email,
                password,
            },
        })

            .then((res) => {
                if (res.data.errors) {
                    emailError.innerHTML = res.data.errors.email;
                    passwordError.innerHTML = res.data.errors.password;
                } else {
                    window.location = "/"
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (

        <form action="" onSubmit={handleLogin} id="sign-up-form">
            <div>
                <label htmlFor="email">Email</label>
            </div>
            <div>
                <input type="text" name="email" id="email" onChange={(e => setEmail(e.target.value))} value={email} />
            </div>
            <div className="email error"></div>
            <div>
                <label htmlFor="email">Password</label>
            </div>
            <div>
                <input type="password" name="password" id="password" onChange={(e => setPassword(e.target.value))} value={password} />
            </div>
            <div className="password error"></div>
            <input type="submit" value="Sign In" />
        </form>
    );
};

export default SignInForm;
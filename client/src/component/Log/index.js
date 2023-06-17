import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

const Log = (props) => {
    const [signUpModal, setSignUpModal] = useState(props.signUp)
    const [signInModal, setSignInModal] = useState(props.signIn)

    const handleModals = (e) => {
        if (e.target.id === "register") {
            setSignInModal(false)
            setSignUpModal(true)
        } else if (e.target.id === "login") {
            setSignInModal(true)
            setSignUpModal(false)
        }

    }

    return (
        <div>
            <div className="connection-form">
                <div className="form-container">
                    <ul>
                        <li onClick={handleModals} id="register" className={signUpModal ? "active-btn" : null}>Sign Up</li>
                        <li onClick={handleModals} id="login" className={signInModal ? "active-btn" : null}>Sign In</li>
                    </ul>
                    {signInModal && <SignInForm />}
                    {signUpModal && <SignUpForm />}
                </div>
            </div>
        </div >
    );

};

export default Log;
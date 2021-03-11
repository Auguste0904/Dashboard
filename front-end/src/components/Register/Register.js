import React, { useState } from 'react';
import './Register.css';
import { useHistory } from "react-router-dom";
import Tips from '../Tips/Tips';

function Register() {
    var [emailValue, setEmailValue] = useState("");
    var [passwordValue, setPasswordValue] = useState("");
    var [confirmPasswordValue, setConfirmPasswordValue] = useState("");
    var [emailSet, setEmailSet] = useState(true);
    var [passwordSet, setPasswordSet] = useState(true);
    var [confirmPasswordSet, setConfirmPasswordSet] = useState(true);
    var [loginSet, setLoginSet] = useState(false);
    var [errorSet, setErrorSet] = useState(false);

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmailSet(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue));
        setPasswordSet(passwordValue.length >= 6 && confirmPasswordValue === passwordValue);
        setConfirmPasswordSet(confirmPasswordValue.length >= 6 && confirmPasswordValue === passwordValue);
        if (passwordValue.length >= 6 && confirmPasswordValue.length >= 6 && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue) && confirmPasswordValue === passwordValue)
            callBackRegister();
    };

    const handleChangeEmail = (e) => {
        setEmailValue(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPasswordValue(e.target.value);
    };

    const handleChangeConfirmPassword = (e) => {
        setConfirmPasswordValue(e.target.value);
    };

    const callBackRegister = () => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ email: emailValue, password: passwordValue, confirmPassword: confirmPasswordValue })
        }
        setErrorSet(false);
        setLoginSet(false);
        fetch('http://localhost:8080/account/create', requestOptions).then(response => response.json())
        .then(async (data) => {
            console.log(data);
            if (data.success === true) {
                history.push("/login");
            } else
                setLoginSet(true);
        }).catch((error) => {
            console.log(error);
            setErrorSet(true);
        });
    }

    return (
        <div className="flex">
            <div className="form-box-inherit">
                <h1>Dashboard</h1>
                <div className="log-with-dashboard">
                    <div className="line-left"></div>
                    <p>Register</p>
                    <div className="line-right"></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-box">
                        <div className="flexbox">
                            <input type="text" onChange={handleChangeEmail} name="email" maxLength="255" id="email" placeholder="Email" />
                            {(emailSet === false) ? <Tips text="Enter your email."></Tips> : null}
                        </div>
                        <div className="flexbox">
                            <input type="password" onChange={handleChangePassword} name="passwordRegister" maxLength="255" id="password" placeholder="Password" />
                            {(passwordSet === false && passwordValue === "") ? <Tips text="Enter your password."></Tips> : null}
                            {(passwordValue !== confirmPasswordValue && passwordSet === false && passwordValue !== "") ? <Tips text="Passwords are not identicals"></Tips> : null}
                        </div>
                        <div className="flexbox">
                            <input type="password" onChange={handleChangeConfirmPassword} name="confirmPassword" maxLength="255" id="confirmPassword" placeholder="Confirm password" />
                            {(confirmPasswordSet === false && confirmPasswordValue === "") ? <Tips text="Enter your password."></Tips> : null}
                            {(passwordValue !== confirmPasswordValue && passwordSet === false && confirmPasswordValue !== "") ? <Tips text="Passwords are not identicals"></Tips> : null}
                        </div>
                    </div>
                    <div className="form-validate">
                        <a className="need-account" href="/login">have already an account?</a>
                        <div className="flexbox">
                            <input className="register-btn" type="submit" value="Register"/>
                            {(loginSet === true) ? <Tips text="Wrong credentials."></Tips> : null}
                            {(errorSet === true) ? <Tips text="Something went wrong."></Tips> : null}
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Register;
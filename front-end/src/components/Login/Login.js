import React, { useState } from 'react';
import Tips from '../Tips/Tips';
import './Login.css';
import { useHistory } from "react-router-dom";

function Login() {
    var [emailValue, setEmailValue] = useState("");
    var [passwordValue, setPasswordValue] = useState("");
    var [emailSet, setEmailSet] = useState(true);
    var [passwordSet, setPasswordSet] = useState(true);
    var [loginSet, setLoginSet] = useState(false);
    var [errorSet, setErrorSet] = useState(false);

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmailSet(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue));
        setPasswordSet(passwordValue.length >= 6);
        if (passwordValue.length >= 6 && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue))
            callBackLogin();
    };

    const handleChangeEmail = (e) => {
        setEmailValue(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPasswordValue(e.target.value);
    };

    const callBackGoogle = async () => {
        const clientId = "951068258463-38g3ha0q1jq3m5897mseet8q3943f037.apps.googleusercontent.com";
        const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}` + 
        "&redirect_uri=http://localhost:3000/oauth/google" +
        "&scope=https://www.googleapis.com/auth/userinfo.email" +
        "&response_type=token";
        window.location.href = url;
    };

    const callBackLogin = () => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ email: emailValue, password: passwordValue })
        }
        setErrorSet(false);
        setLoginSet(false);
        fetch('http://localhost:8080/account/login', requestOptions).then(response => response.json())
        .then(async (data) => {
            console.log(data);
            if (data.success === true) {
                await window.sessionStorage.setItem('dashboard_user_hash', data.cookie);
                history.push("/");
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
                    <p className="center">Sign in with</p>
                </div>
                <div className="form-box">
                    <button className="button-google" onClick={callBackGoogle}>
                        <img src="google.svg" className="oauth-size" alt="google" />
                    </button>
                </div>
                <div className="log-with-dashboard">
                    <div className="line-left"></div>
                    <p>or with Dashboard</p>
                    <div className="line-right"></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-box">
                        <div className="flexbox">
                            <input type="text" onChange={handleChangeEmail} name="email" maxLength="255" id="email" placeholder="Email" />
                            {(emailSet === false) ? <Tips text="Enter your email."></Tips> : null}
                        </div>
                        <div className="flexbox">
                            <input type="password" onChange={handleChangePassword} name="password" maxLength="255" id="password" placeholder="Password" />
                            {(passwordSet === false) ? <Tips text="Enter your password."></Tips> : null}
                            <a className="forgot-password" href="/forgotPassword">forgot?</a>
                        </div>
                    </div>
                    <div className="form-validate">
                        <a className="need-account" href="/register">need an account?</a>
                        <div className="flexbox">
                            <input className="sign-in" type="submit" value="Sign In"/>
                            {(loginSet === true) ? <Tips text="Wrong credentials."></Tips> : null}
                            {(errorSet === true) ? <Tips text="Something went wrong."></Tips> : null}
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login;
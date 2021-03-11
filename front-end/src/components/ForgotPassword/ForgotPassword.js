import React, { useState } from 'react';
import './ForgotPassword.css';
import { useHistory } from "react-router-dom";
import Tips from '../Tips/Tips';

function ForgotPassword() {
    var [emailValue, setEmailValue] = useState("");
    var [emailSet, setEmailSet] = useState(true);
    var [errorSet, setErrorSet] = useState(false);
    var [forgotSet, setForgotSet] = useState(false);

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmailSet(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue));
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue))
            callBackForgotPassword();
    };

    const handleChangeEmail = (e) => {
        setEmailValue(e.target.value);
    };

    const callBackForgotPassword = () => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ email: emailValue })
        }
        setErrorSet(false);
        setForgotSet(false);
        fetch('http://localhost:8080/account/forgot', requestOptions).then(response => response.json())
        .then(async (data) => {
            console.log(data);
            if (data.success === true) {
                history.push("/newPassword");
            } else
                setForgotSet(true);
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
                    <p>Forgot password ?</p>
                    <div className="line-right"></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-box">
                        <div className="flexbox">
                            <input type="text" onChange={handleChangeEmail} name="email" maxLength="255" id="forgot" placeholder="Email" />
                            {(emailSet === false) ? <Tips text="Enter your email."></Tips> : null}
                        </div>
                    </div>
                    <div className="form-validate">
                        <a className="need-account" href="/login">Cancel ?</a>
                        <div className="flexbox">
                            <input className="send-btn" type="submit" value="Send"/>
                            {(forgotSet === true) ? <Tips text="Wrong credentials."></Tips> : null}
                            {(errorSet === true) ? <Tips text="Something went wrong."></Tips> : null}
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ForgotPassword;
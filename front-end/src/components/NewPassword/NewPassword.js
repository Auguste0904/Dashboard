import React, { useState } from 'react';
import './NewPassword.css';
import { useHistory } from "react-router-dom";
import Tips from '../Tips/Tips';

function NewPassword() {
    var [passwordValue, setPasswordValue] = useState("");
    var [confirmPasswordValue, setConfirmPasswordValue] = useState("");
    var [passwordSet, setPasswordSet] = useState(true);
    var [confirmPasswordSet, setConfirmPasswordSet] = useState(true);
    var [errorSet, setErrorSet] = useState(false);
    // var [newPasswordSet, setNewPasswordSet] = useState(true);

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        setPasswordSet(passwordValue.length >= 6 && confirmPasswordValue === passwordValue);
        setConfirmPasswordSet(confirmPasswordValue.length >= 6 && confirmPasswordValue === passwordValue);
        if (passwordValue.length >= 6 && confirmPasswordValue.length >= 6 && confirmPasswordValue === passwordValue)
            callBackNewPassword();
    };

    const handleChangePassword = (e) => {
        setPasswordValue(e.target.value);
    };

    const handleChangeConfirmPassword = (e) => {
        setConfirmPasswordValue(e.target.value);
    };

    const callBackNewPassword = () => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ password: passwordValue, confirmPassword: confirmPasswordValue })
        }
        setErrorSet(false);
        // setNewPasswordSet(false);
        fetch('http://localhost:8080/account/newPassword', requestOptions).then(response => response.json())
        .then(async (data) => {
            console.log(data);
            if (data.success === true) {
                history.push("/login");
            } /*else
                setNewPasswordSet(true);*/
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
                    <p>Create your new password !</p>
                    <div className="line-right"></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-box">
                        <div className="flexbox">
                            <input type="password" onChange={handleChangePassword} name="newPassword" maxLength="255" id="password" placeholder="New password" />
                            {(passwordSet === false && passwordValue === "") ? <Tips text="Enter your password."></Tips> : null}
                            {(passwordValue !== confirmPasswordValue && passwordSet === false && passwordValue !== "") ? <Tips text="Passwords are not identicals"></Tips> : null}
                        </div>
                        <div className="flexbox">
                            <input type="password" onChange={handleChangeConfirmPassword} name="confirmNewPassword" maxLength="255" id="confirmPassword" placeholder="Confirm password" />
                            {(confirmPasswordSet === false && confirmPasswordValue === "") ? <Tips text="Enter your password."></Tips> : null}
                            {(passwordValue !== confirmPasswordValue && passwordSet === false && confirmPasswordValue !== "") ? <Tips text="Passwords are not identicals"></Tips> : null}
                        </div>
                    </div>
                    <div className="form-validate">
                        <a className="need-account" href="/login">Cancel ?</a>
                        <div className="flexbox">
                            <input className="register-btn" type="submit" value="Create"/>
                            {/* {(newPasswordSet === true) ? <Tips text="Wrong credentials."></Tips> : null} */}
                            {(errorSet === true) ? <Tips text="Something went wrong."></Tips> : null}
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewPassword;
import React, { useEffect } from 'react';
import './Google.css';
import { useHistory } from "react-router-dom";

function Google() {

    const history = useHistory();

    const constructor = (async () => {
        console.log(window.location.href);
        const url = new URL(window.location.href);
        let hashes = url.hash.replace("#", "").split('&').reduce((params, hash) => {
            let [key, val] = hash.split('=')
            return Object.assign(params, {[key]: decodeURIComponent(val)})
        }, {});
        console.log(hashes);
        const requestOptions = {
            method: 'GET'
        }
        await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${hashes.access_token}`, requestOptions).then(response => response.json())
        .then(async (dataGoogle) => {
            const requestOptionsOauth = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ email: dataGoogle.email, cookie: hashes.access_token })
            }
            fetch('http://localhost:8080/account/loginGoogle', requestOptionsOauth).then(response => response.json())
            .then(async (data) => {
                console.log(data);
                await window.sessionStorage.setItem('dashboard_user_hash', hashes.access_token);
                history.push("/");
            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
    });

    useEffect(() => {
        constructor();
    });

    return (<></>);
}

export default Google;
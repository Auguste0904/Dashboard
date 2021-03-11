import React, { useState, useEffect } from 'react';
import './Widgets.css';
import '../Dashboard/Dashboard.css';
import { useHistory } from "react-router-dom";
import MyInstantFactory from './Factory/MyInstantFactory';
import WeatherFactory from './Factory/WeatherFactory';

function Widgets() {
    var [display, setDisplay] = useState(false);
    const history = useHistory();

    const constructor = (async () => {
        let session = await window.sessionStorage.getItem('dashboard_user_hash');
        if (session === null || session === undefined || session.length === 0)
            history.push("/login");
        else {
            // Verifier si c'est un bon token sur le backend
            setDisplay(true);
        }
    });

    useEffect(() => {
        constructor();
    });

    const termsCallback = () => {
        history.push("/terms");
    }

    const homeCallback = () => {
        history.push("/");
    }

    return (
        <>
            {(display) ? (
                <div className="flex-menu">
                    <div className="menu">
                        <div className="menu-content-header" onClick={homeCallback}>
                            <img className="menu-content" src="home.svg" alt="dashboard" />
                            <h4 className="menu-content-label">Dashboard</h4>
                        </div>
                        <div className="menu-content-header">
                            <img className="menu-content" src="add-on2.svg" alt="add-on" />
                            <h4 className="menu-content-label">Widgets</h4>
                        </div>
                        <div className="menu-content-header-down" onClick={termsCallback}>
                            <img className="menu-content" src="term.svg" alt="terms" />
                            <h4 className="menu-content-label">Terms And Conditions</h4>
                        </div>
                    </div>
                    <div className="content">
                        <MyInstantFactory />
                        <WeatherFactory />
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Widgets;
import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import '../Login/Login';
import { useHistory } from "react-router-dom";

function Dashboard() {
    var [display, setDisplay] = useState(false);
    const history = useHistory();
    var [widgets, setWidgets] = useState([]);
    var [constructed, setConstructed] = useState(false);

    const constructor = (async () => {
        setConstructed(true);
        let session = await window.sessionStorage.getItem('dashboard_user_hash');
        if (session === null || session === undefined || session.length === 0)
            history.push("/login");
        else {
            // Verifier si c'est un bon token sur le backend
            let user = await window.sessionStorage.getItem('dashboard_user_hash');
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({cookie: session})
            }
            await fetch('http://localhost:8080/account/widgets', requestOptions).then(response => response.json())
            .then(async (data) => {
                setWidgets(await Promise.all(data.data.map(async (widget, keys) => {
                    console.log("WIDGET: ", widget);
                    
                    let headers = new Headers({
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET',
                        'Access-Control-Allow-Headers': 'application/json'
                    })
                    const requestOptions = {
                        method: 'GET',
                        headers: headers
                    }
                    let weatherData = {};
                    await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${JSON.parse(widget.data).city}&appid=003de82c7de9c2ef270f20ebf0035f17`, requestOptions).then(response => response.json())
                    .then(async (dataFetch) => {
                        console.log(dataFetch);
                        weatherData = dataFetch
                    }).catch((error) => {
                        console.log(error);
                    });
                    return (
                        <React.Fragment key={keys}>
                            <div className="widget-parent">
                                <div className="widget">
                                    <h4 className="widget-name">Weather {JSON.parse(widget.data).city}</h4>
                                    <div className="weather-wid">
                                        <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/>
                                        <p>Temperature : {Math.round(weatherData.main.temp - 273)}°C Moisture : {weatherData.main.humidity}%</p>
                                        <p>Wind : {weatherData.wind.speed}km/h {weatherData.wind.deg}°</p>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })));
                setDisplay(true);
            }).catch((error) => {
                console.log(error);
            });
        }
    });

    useEffect(() => {
        if (constructed === false)
            constructor();
    });

    // const Listwidgets = [0, 0, 0, 0, 0];
    // const widgets = Listwidgets.map((widget, keys) => {
    //     return (
    //         <React.Fragment key={keys}>
    //             <div className="widget-parent">
    //                 <div className="widget">
    //                     {keys}
    //                 </div>
    //             </div>
    //         </React.Fragment>
    //     );
    // });

    const termsCallback = () => {
        history.push("/terms");
    }

    const widgetsCallback = () => {
        history.push("/widgets");
    }

    const aboutusCallback = () => {
        history.push("/aboutus");
    }

    return (
        <>
            {(display) ? (
                <div className="flex-menu">
                    <div className="menu">
                        <div className="menu-content-header">
                            <img className="menu-content" src="home.svg" alt="dashboard" />
                            <h4 className="menu-content-label">Dashboard</h4>
                        </div>
                        <div className="menu-content-header" onClick={widgetsCallback}>
                            <img className="menu-content" src="add-on2.svg" alt="add-on" />
                            <h4 className="menu-content-label">Widgets</h4>
                        </div>
                        <div className="menu-content-header-down" onClick={termsCallback}>
                            <img className="menu-content" src="term.svg" alt="terms" />
                            <h4 className="menu-content-label">Terms And Conditions</h4>
                        </div>
                        <div className="menu-content-header-down" onClick={aboutusCallback}>
                            <img className="menu-content" src="about-us.svg" alt="about-us" />
                            <h4 className="menu-content-label">About us</h4>
                        </div>
                    </div>
                    <div className="content">
                        {widgets}
                        {/* METTRE LISTE DES WIDGETS */}
                    </div>
                </div>
            ) : null}
        </>
    )

}

export default Dashboard;
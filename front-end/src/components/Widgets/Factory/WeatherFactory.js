import React, { useState, useEffect } from 'react';
import './WeatherFactory.css';
import '../../Dashboard/Dashboard.css';
import { useHistory } from "react-router-dom";
import Modal from 'react-modal';

function WeatherFactory() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [city, setCity] = React.useState("");
    const history = useHistory();

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    useEffect(() => {
        let elem = document.getElementById('weather');
        if (elem != null)
        Modal.setAppElement(elem);
    });

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const validateWeather = async () => {
        let user = await window.sessionStorage.getItem('dashboard_user_hash');
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({data: {type: "weather", city: city}, cookie: user, update: 300000})
        }
        fetch('http://localhost:8080/account/createWidget', requestOptions).then(response => response.json())
        .then(async (data) => {
            console.log(data);
            history.push("/");
        }).catch((error) => {
            console.log(error);
        });
    };

    const handleCity = (event) => {
        setCity(event.target.value);
    }

    return (
        <div className="widget-parent">
            <div className="widget" onClick={() => openModal()}>
                <h4 className="widget-name">Weather</h4>
            </div>
            <Modal id="weather" isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
                <button onClick={() => {closeModal()}}>close</button>
                <form>
                    <input type="text" onChange={handleCity} />
                </form>
                <button onClick={validateWeather}>Valider</button>
            </Modal>
        </div>
    );
};

export default WeatherFactory;
import React, { useState, useEffect } from 'react';
import './MyInstantFactory.css';
import '../../Dashboard/Dashboard.css';
import { useHistory } from "react-router-dom";
import Modal from 'react-modal';

function MyInstantFactory() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [pageInstant, setPageInstant] = React.useState(0);
    const [data, setData] = React.useState([]);

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
        let elem = document.getElementById('myinstant');
        if (elem != null)
        Modal.setAppElement(elem);
    });

    const closeModal = () => {
        setIsOpen(false);
    };

    const pagePlus = () => {
        setPageInstant(pageInstant + 1);
        let headers = new Headers({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'application/json'
        })
        const requestOptions = {
            method: 'GET',
            headers: headers
        }
        fetch(`https://cors-anywhere.herokuapp.com/https://www.myinstants.com/api/v1/instants/?format=json&page=${pageInstant}`, requestOptions).then(response => response.json())
        .then(async (dataFetch) => {
            console.log(dataFetch);
            setData(dataFetch.results.map((value, keys) => {
                return (
                    <React.Fragment key={keys}>
                        <button onClick={() => {setSound(value.sound)}}>{value.name}</button>
                    </React.Fragment>
                );
            }));
        }).catch((error) => {
            console.log(error);
        });
    }

    const openModal = () => {
        setIsOpen(true);
        setData([]);
        console.log("Page set to 0 from ", pageInstant);
        setPageInstant(0);
        console.log("Page -> ", pageInstant);
        pagePlus();
    };

    const setSound = (sound) => {
        console.log(sound);
    }

    return (
        <div className="widget-parent">
            <div className="widget" onClick={() => openModal()}>
                <h4 className="widget-name">MyInstant</h4>
                <div className="instant-wid">
                    <div className="instant-wid-son"></div>
                    <div className="instant-wid-son-son"></div>
                </div>
            </div>
            <Modal id="myinstant" isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
                <button onClick={() => {closeModal()}}>close</button>
                <button onClick={() => {pagePlus()}}>Page suivante</button>
                <p>Page : {pageInstant}</p>
                {(data.length) ? data : null}
            </Modal>
        </div>
    );
};

export default MyInstantFactory;
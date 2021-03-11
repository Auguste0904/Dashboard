import React from 'react';
import './About-us.css';

function Aboutus() {
    return (
        <>
            <div className="flexAbout">
                <div className="centerElems">
                    <h1>About us</h1>
                    <div className="content-about-author">Authors of the project:<br /><br />
                    <div>Auguste ALEXANDRE</div>
                    <div>Eliot LE-GALL</div><br />
                        <div className="content-about-describe">We are, both of us, 3rd year students in EPITECH Paris.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus;
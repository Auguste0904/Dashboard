import React from 'react';
import './Tips.css';

function Tips(props) {

    return (
        <div>
            <div className="tips">
                <div className="tips-arrow"></div>
                <div className="tips-inner">{props.text}</div>
            </div>
        </div>
    )
}

export default Tips;
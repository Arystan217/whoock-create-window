import React from 'react';
import './WebResult.css'

const WebResult = () => {
    return (
        <div className="container">
            <div className="web-result">
                <iframe src="https://arystan217.github.io/cuda/" frameBorder="0"
                        className="web-result__iframe"></iframe>
            </div>
        </div>
    );
};

export default WebResult;
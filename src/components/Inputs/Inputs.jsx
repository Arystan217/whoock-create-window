import React, {useState} from 'react';
import './Inputs.css'
import restart from '../../assets/img/ico/restart.png'
import send from '../../assets/img/ico/send.png'

const Inputs = () => {

    const [frontendSideClasses, setFrontendSideClasses] = useState("side__item side__item--active")
    const [backendSideClasses, setBackendSideClasses] = useState("side__item")

    const [frontendInputClasses, setFrontendInputClasses] = useState("blur-wrapper__input active-field")
    const [backendInputClasses, setBackendInputClasses] = useState("blur-wrapper__input")


    // toggle classes
    const toggleFrontendSideClasses = (frontendSideClasses) => {
        if (frontendSideClasses == "side__item side__item--active") {
            setFrontendSideClasses("side__item")
        } else {
            setFrontendSideClasses("side__item side__item--active")
        }
    }
    const toggleBackendSideClasses = (backendSideClasses) => {
        if (backendSideClasses == "side__item side__item--active") {
            setBackendSideClasses("side__item")
        } else {
            setBackendSideClasses("side__item side__item--active")
        }
    }
    const toggleFrontendInputClasses = (frontendInputClasses) => {
        if (frontendInputClasses == "blur-wrapper__input active-field") {
            setFrontendInputClasses("blur-wrapper__input")
        } else {
            setFrontendInputClasses("blur-wrapper__input active-field")
        }
    }
    const toggleBackendInputClasses = (backendInputClasses) => {
        if (backendInputClasses == "blur-wrapper__input active-field") {
            setBackendInputClasses("blur-wrapper__input")
        } else {
            setBackendInputClasses("blur-wrapper__input active-field")
        }
    }

    const changeHandler = () => {
        toggleFrontendSideClasses(frontendSideClasses);
        toggleBackendSideClasses(backendSideClasses);
        toggleFrontendInputClasses(frontendInputClasses);
        toggleBackendInputClasses(backendInputClasses);
    }

    return (
        <div className="input">
            <div className="container">
                <div className="restart" onClick={changeHandler}>
                    <img src={restart} alt="" className="restart__image" />
                </div>

                <form action="#" className="input-field">
                    <div className="blur-wrapper">
                        <input type="text"
                               id="front-end-input"
                               className={frontendInputClasses}
                               autoComplete="off"
                        />
                        <input type="text"
                               id="back-end-input"
                               className={backendInputClasses}
                               autoComplete="off"
                        />
                        <div className="blur"></div>
                    </div>
                    <button className="send-button" type="submit"><img src={send} alt="" /></button>
                </form>

                <div className="side">
                    <span id="front-end-side" className={frontendSideClasses}>Front-end</span>
                    <span id="back-end-side" className={backendSideClasses}>Back-end</span>
                </div>
            </div>
        </div>
    );
};

export default Inputs;
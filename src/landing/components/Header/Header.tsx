import { useState } from "react"
import { refTypes } from "../../app/commonTypes"
//@ts-ignore
import logo from "../../assets/Logo.png"
import './header.css'
const Header: React.FC<refTypes> = ({ home, about, stages, partners, contacts }) => {

    const [hidden, setHidden] = useState('');
    const scrollToSection = (ref:React.RefObject<HTMLDivElement>) => {
        window.scrollTo({
            top: ref.current?.offsetTop,
            behavior: "smooth"
        })
    }

    const handleShowNavBar = () => {
        if (!hidden) {
            setHidden('responsive')
        } else {
            setHidden('')
        }
    }
    
    return (
        <div className={`header ${hidden}`}>
            <div className="navigation_left">
                <img src={logo} className="header_logo" />
                <a className="icon" onClick={handleShowNavBar}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
            <div className={`navigation_right ${hidden}`}>
                <div className="navigation_bar">
                    <button onClick={()=> scrollToSection(home)} className="button">
                        Home
                    </button>
                    <button onClick={()=> scrollToSection(about)} className="button">
                        About us
                    </button>
                    <button onClick={()=> scrollToSection(stages)} className="button">
                        Stages
                    </button>
                    <button onClick={()=> scrollToSection(partners)} className="button">
                        Partners
                    </button>
                    <button onClick={()=> scrollToSection(contacts)} className="button">
                        Contacts
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
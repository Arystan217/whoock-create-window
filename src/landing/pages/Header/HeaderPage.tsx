import { refTypes } from "../../app/commonTypes"
import Header from "../../components/Header/Header"

const HeaderPage:React.FC<refTypes> = ({home, about, stages, partners, contacts}) => {
    return (
        <div className="header_wrapper">
            <Header home={home}
                about={about}
                stages={stages}
                partners={partners}
                contacts={contacts} />
        </div>
        
    )
}

export default HeaderPage
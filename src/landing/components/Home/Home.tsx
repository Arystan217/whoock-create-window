//@ts-ignore
import homeImage from "../../assets/3d.png"
import './home.css'

const Home: React.FC = () => {
    return (
        <div className='container'>
            <div className="home-wrapper">
                <div className="home_item-wrapper">
                    <div className="home__item-slogan">
                        It’s not magic. This is
                        <div className="rainbow-x"> Whoock!</div>
                    </div>
                    <div className="home__item-about">
                        We build a product that builds products the world has never seen.
                    </div>
                    <button className="about__button start-creating">
                        Start creating
                    </button>
                </div>
                <img src={homeImage}/>
            </div>
        </div>
    )
}

export default Home
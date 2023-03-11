import Home from "../../components/Home/Home"

const HomePage: React.FC<{home: React.RefObject<HTMLDivElement>}> = ({home}) => {
    return (
        <div className="section" ref={home}>
            <Home/>
        </div>
    )
}

export default HomePage
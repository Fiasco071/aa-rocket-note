import './index.css'
import rocketImg from '../../assets/img/rocket.png'
import houseImg from '../../assets/img/house.png'

const Orbits = () => {
    return (
        <div>
            <div className="inner-orbit">
                <img className="rocketImg" src={rocketImg} style={{ width: "80px" }} />
            </div>
            <div className="middle-orbit">
                <img className="houseImg" src={houseImg} style={{ width: "40px" }} />
            </div>
            <div className="outter-orbit">
            </div>
        </div>

    )
}

export default Orbits
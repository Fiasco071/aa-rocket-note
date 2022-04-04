import './index.css'
import rocketImg from '../../assets/img/rocket.png'
import houseImg from '../../assets/img/house.png'
import sateliteImg from '../../assets/img/satelite.png'
import notesImg from '../../assets/img/notes.png'
import planetImg from '../../assets/img/planet.png'

const Orbits = () => {
    return (
        <div className='orbit-wrapper'>
            <div className="inner-orbit">
                <img className="rocketImg" src={rocketImg} alt={rocketImg} style={{ width: "80px" }} />
            </div>
            <div className="middle-orbit">
                <img className="houseImg" src={houseImg} alt={rocketImg} style={{ width: "40px" }} />
            </div>
            <div className="outter-orbit">
                <img className="sateliteImg" src={sateliteImg} alt={sateliteImg} style={{ width: "40px" }} />
                <img className="notesImg1" src={notesImg} alt={notesImg} style={{ width: "15px" }} />
                <img className="notesImg2" src={notesImg} alt={notesImg} style={{ width: "15px" }} />
                <img className="notesImg3" src={notesImg} alt={notesImg} style={{ width: "15px" }} />
            </div>
            <div>
                <img className="planetImg" src={planetImg} alt={planetImg} style={{ width: "320px" }} />
            </div>
        </div>
    )
}

export default Orbits
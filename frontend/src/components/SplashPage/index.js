import './index.css';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import titletextimgback from '../../assets/img/ganpan.png';
import titletextimgfront from '../../assets/img/ganpan2.png';
import astronaut from '../../assets/img/astronaut.png';
import { useEffect, useRef } from 'react';

const SplashPage = () => {
    const ref = useRef(null);
    const scrollToTop = () => {
        ref.current?.scrollIntoView()
    }
    useEffect(() => {
        scrollToTop()
    }, []);

    return (
        <div ref={ref} className='splash-page-wrapper'>
            {/* <div className='front-cloud'>
                <div  style={{zIndex:1}} className='cloudbunch-outline'>
                    <div  style={{zIndex:1}} className='cloud-one'>
                        <div style={{zIndex:1}} className='cloud-one-one'></div>
                        <div  style={{zIndex:1}} className='cloud-one-two'></div>
                        <div  style={{zIndex:1}} className='cloud-one-three'></div>
                        <div  style={{zIndex:1}} className='cloud-one-four'></div>
                    </div>
                    <div  style={{zIndex:1}} className='cloud-two'>
                        <div  style={{zIndex:1}} className='cloud-one-one'></div>
                        <div  style={{zIndex:1}} className='cloud-one-two'></div>
                        <div  style={{zIndex:1}} className='cloud-one-three'></div>
                        <div  style={{zIndex:1}} className='cloud-one-four'></div>
                    </div>
                    <div  style={{zIndex:1}} className='cloud-three'>
                        <div  style={{zIndex:1}} className='cloud-one-one'></div>
                        <div  style={{zIndex:1}} className='cloud-one-two'></div>
                        <div  style={{zIndex:1}} className='cloud-one-three'></div>
                        <div  style={{zIndex:1}} className='cloud-one-four'></div>
                    </div>
                    <div  style={{zIndex:1}} className='cloud-four'>
                        <div  style={{zIndex:1}} className='cloud-one-one'></div>
                        <div  style={{zIndex:1}} className='cloud-one-two'></div>
                        <div  style={{zIndex:1}} className='cloud-one-three'></div>
                        <div  style={{zIndex:1}} className='cloud-one-four'></div>
                    </div>
                </div>

                <div  style={{zIndex:1}} className='cloudbunch'>
                    <div  style={{zIndex:1}} className='cloud-one'>
                        <div  style={{zIndex:1}} className='cloud-one-one'></div>
                        <div  style={{zIndex:1}} className='cloud-one-two'></div>
                        <div  style={{zIndex:1}} className='cloud-one-three'></div>
                        <div  style={{zIndex:1}} className='cloud-one-four'></div>
                    </div>
                    <div  style={{zIndex:1}} className='cloud-two'>
                        <div  style={{zIndex:1}} className='cloud-one-one'></div>
                        <div  style={{zIndex:1}} className='cloud-one-two'></div>
                        <div  style={{zIndex:1}} className='cloud-one-three'></div>
                        <div  style={{zIndex:1}} className='cloud-one-four'></div>
                    </div>
                    <div  style={{zIndex:1}} className='cloud-three'>
                        <div  style={{zIndex:1}} className='cloud-one-one'></div>
                        <div  style={{zIndex:1}} className='cloud-one-two'></div>
                        <div  style={{zIndex:1}} className='cloud-one-three'></div>
                        <div  style={{zIndex:1}} className='cloud-one-four'></div>
                    </div>
                    <div  style={{zIndex:1}} className='cloud-four'>
                        <div  style={{zIndex:1}} className='cloud-one-one'></div>
                        <div  style={{zIndex:1}} className='cloud-one-two'></div>
                        <div style={{zIndex:1}}  className='cloud-one-three'></div>
                        <div  style={{zIndex:1}} className='cloud-one-four'></div>
                    </div>
                </div>
                <div  style={{zIndex:1}} className='cloudbunchtwo'>
                    <div  style={{zIndex:1}} className='cloud-one'>
                        <div  style={{zIndex:1}} className='cloud-one-one'></div>
                        <div style={{zIndex:1}}  className='cloud-one-two'></div>
                        <div style={{zIndex:1}}  className='cloud-one-three'></div>
                        <div style={{zIndex:1}}  className='cloud-one-four'></div>
                    </div>
                    <div style={{zIndex:1}}  className='cloud-two'>
                        <div  style={{zIndex:1}} className='cloud-one-one'></div>
                        <div  style={{zIndex:1}} className='cloud-one-two'></div>
                        <div style={{zIndex:1}}  className='cloud-one-three'></div>
                        <div  style={{zIndex:1}} className='cloud-one-four'></div>
                    </div>
                    <div style={{zIndex:1}}  className='cloud-three'>
                        <div style={{zIndex:1}}  className='cloud-one-one'></div>
                        <div  style={{zIndex:1}} className='cloud-one-two'></div>
                        <div style={{zIndex:1}}  className='cloud-one-three'></div>
                        <div  style={{zIndex:1}} className='cloud-one-four'></div>
                    </div>
                    <div  style={{zIndex:1}} className='cloud-four'>
                        <div  style={{zIndex:1}} className='cloud-one-one'></div>
                        <div  style={{zIndex:1}} className='cloud-one-two'></div>
                        <div style={{zIndex:1}}  className='cloud-one-three'></div>
                        <div  style={{zIndex:1}} className='cloud-one-four'></div>
                    </div>
                </div>

            </div>

            <div className='back-cloud'>
                <div className='cloudbunch-outline'>
                    <div className='cloud-one'>
                        <div className='cloud-one-one'></div>
                        <div className='cloud-one-two'></div>
                        <div className='cloud-one-three'></div>
                        <div className='cloud-one-four'></div>
                    </div>
                    <div className='cloud-two'>
                        <div className='cloud-one-one'></div>
                        <div className='cloud-one-two'></div>
                        <div className='cloud-one-three'></div>
                        <div className='cloud-one-four'></div>
                    </div>
                    <div className='cloud-three'>
                        <div className='cloud-one-one'></div>
                        <div className='cloud-one-two'></div>
                        <div className='cloud-one-three'></div>
                        <div className='cloud-one-four'></div>
                    </div>
                    <div className='cloud-four'>
                        <div className='cloud-one-one'></div>
                        <div className='cloud-one-two'></div>
                        <div className='cloud-one-three'></div>
                        <div className='cloud-one-four'></div>
                    </div>
                </div>

                <div className='cloudbunch'>
                    <div className='cloud-one'>
                        <div className='cloud-one-one'></div>
                        <div className='cloud-one-two'></div>
                        <div className='cloud-one-three'></div>
                        <div className='cloud-one-four'></div>
                    </div>
                    <div className='cloud-two'>
                        <div className='cloud-one-one'></div>
                        <div className='cloud-one-two'></div>
                        <div className='cloud-one-three'></div>
                        <div className='cloud-one-four'></div>
                    </div>
                    <div className='cloud-three'>
                        <div className='cloud-one-one'></div>
                        <div className='cloud-one-two'></div>
                        <div className='cloud-one-three'></div>
                        <div className='cloud-one-four'></div>
                    </div>
                    <div className='cloud-four'>
                        <div className='cloud-one-one'></div>
                        <div className='cloud-one-two'></div>
                        <div className='cloud-one-three'></div>
                        <div className='cloud-one-four'></div>
                    </div>
                </div>
                <div className='cloudbunchtwo'>
                    <div className='cloud-one'>
                        <div className='cloud-one-one'></div>
                        <div className='cloud-one-two'></div>
                        <div className='cloud-one-three'></div>
                        <div className='cloud-one-four'></div>
                    </div>
                    <div className='cloud-two'>
                        <div className='cloud-one-one'></div>
                        <div className='cloud-one-two'></div>
                        <div className='cloud-one-three'></div>
                        <div className='cloud-one-four'></div>
                    </div>
                    <div className='cloud-three'>
                        <div className='cloud-one-one'></div>
                        <div className='cloud-one-two'></div>
                        <div className='cloud-one-three'></div>
                        <div className='cloud-one-four'></div>
                    </div>
                    <div className='cloud-four'>
                        <div className='cloud-one-one'></div>
                        <div className='cloud-one-two'></div>
                        <div className='cloud-one-three'></div>
                        <div className='cloud-one-four'></div>
                    </div>
                </div>

            </div> */}

            <div className='planet'></div>
            <div className='login-register-box'>
                <LoginFormModal />
                <SignUpFormModal />
            </div>
            <div className='title-text-container'>
                <img className='titletextfront' src={titletextimgfront} alt={titletextimgfront}></img>
                <img className='titletextback' src={titletextimgback} alt={titletextimgback}></img>
                <img className='astronautImg' src={astronaut} alt={astronaut} />
            </div>
            <div className='planet'>
                <ul className='stars'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div>
                <ul className='small-planet-one'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className='rocket'>
                <div className='rocket-body'>
                    <div className='body'></div>
                    <div className='fin fin-left'></div>
                    <div className='fin fin-right'></div>
                    <div className='window'></div>
                </div>
                <div class='exhaust-flame'></div>
                <ul className='exhaust-fumes'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}

export default SplashPage;
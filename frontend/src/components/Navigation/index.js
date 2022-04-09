
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import ProfileButton from './ProfileButton';



const Navigation = ({ isLoaded }) => {
    const [linkClicked, setLinkClicked] = useState('home');
    const user = useSelector(state => state.session.user);

    let sessionLinks;
    if (user) {
        sessionLinks = (
            <ProfileButton user={user} />
        );
    } else {
        sessionLinks = (
            <></>
        );
    }
    return (
        <div className='nav-wrapper'>
            {(user) && (
                <>
            <div>
            </div>
{/* 
                    <div>
                        <div>
                            <input type="text" placeholder='Search Bar...' />
                        </div>
                    </div>

                    <div>
                        <div>
                            <select>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                    </div> */}

                    <nav>
                        {/* <p className='menu-text'>MENU</p> */}
                    {isLoaded && sessionLinks}
                        <NavLink
                            className="nav-links"
                            to="/"
                            onClick={() => setLinkClicked('home')}
                        >
                            {linkClicked === 'home' && (
                                <></>
                                // <FontAwesomeIcon
                                //     icon={faCaretRight}
                                //     className="nav-link"
                                // />
                            )}
                            <FontAwesomeIcon icon={faHome} />
                        </NavLink>
                        {/* <NavLink
                            className="nav-links"
                            to="/shortcuts"
                            onClick={() => setLinkClicked('shortCuts')}
                        >
                            {linkClicked === 'shortCuts' && (
                                <FontAwesomeIcon
                                    icon={faCaretRight}
                                    className="nav-link"
                                />
                            )}
                            <FontAwesomeIcon icon={faStar} /> Shortcuts
                        </NavLink> */}
                        <NavLink
                            className="nav-links"
                            to="/notes"
                            onClick={() => setLinkClicked('notes')}
                        >
                            {linkClicked === 'notes' && (
                                <></>
                                // <FontAwesomeIcon
                                //     icon={faCaretRight}
                                //     className="nav-link"
                                // />
                            )}
                            <FontAwesomeIcon icon={faNoteSticky} />
                        </NavLink>
                        {/* <NavLink
                            className="nav-links"
                            to="/tasks"
                            onClick={() => setLinkClicked('tasks')}
                        >
                            {linkClicked === 'tasks' && (
                                <FontAwesomeIcon
                                    icon={faCaretRight}
                                    className="nav-link"
                                />
                            )}
                            <FontAwesomeIcon icon={faSquareCheck} /> Tasks
                        </NavLink> */}
                        {/* <NavLink
                            className="nav-links"
                            to="/notesbooks"
                            onClick={() => setLinkClicked('noteBooks')}
                        >
                            {linkClicked === 'noteBooks' && (
                                <FontAwesomeIcon
                                    icon={faCaretRight}
                                    className="nav-link"
                                />
                            )}
                            <FontAwesomeIcon icon={faBook} />
                        </NavLink>
                        <NavLink
                            className="nav-links"
                            to="/tags"
                            onClick={() => setLinkClicked('tags')}
                        >
                            {linkClicked === 'tags' && (
                                <FontAwesomeIcon
                                    icon={faCaretRight}
                                    className="nav-link"
                                />
                            )}
                            <FontAwesomeIcon icon={faTag} />
                        </NavLink> */}
                        {/* <NavLink
                            className="nav-links"
                            to="/shared"
                            onClick={() => setLinkClicked('shared')}
                        >
                            {linkClicked === 'shared' && (
                                <FontAwesomeIcon
                                    icon={faCaretRight}
                                    className="nav-link"
                                />
                            )}
                            <FontAwesomeIcon icon={faUserGroup} /> Shared with Me
                        </NavLink>
                        <NavLink
                            className="nav-links"
                            to="/trash"
                            onClick={() => setLinkClicked('trash')}
                        >
                            {linkClicked === 'trash' && (
                                <FontAwesomeIcon icon={faCaretRight} className="nav-link selected" />
                            )}
                            <FontAwesomeIcon icon={faTrash} /> Trash
                        </NavLink> */}
                    </nav>
                </>
            )}
        </div>
    )
}

export default Navigation
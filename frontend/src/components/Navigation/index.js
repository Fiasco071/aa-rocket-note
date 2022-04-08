
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faNoteSticky, faBook, faSquareCheck, faTag, faUserGroup, faTrash, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import LoginFormModal from '../LoginFormModal'
import ProfileButton from './ProfileButton';
import SignUpFormModal from '../SignUpFormModal';


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
                <div className='nav-profile-head-box'>
                    <div className='nav-profileImg-box'>
                    </div>
                    {isLoaded && sessionLinks}
                </div>
            </div>

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
                    </div>

                    <nav>
                        <NavLink
                            className="nav-links"
                            to="/"
                            onClick={() => setLinkClicked('home')}
                        >
                            {linkClicked === 'home' && (
                                <FontAwesomeIcon
                                    icon={faCaretRight}
                                    className="nav-link"
                                />
                            )}
                            <FontAwesomeIcon icon={faHome} /> Home
                        </NavLink>
                        <NavLink
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
                        </NavLink>
                        <NavLink
                            className="nav-links"
                            to="/notes"
                            onClick={() => setLinkClicked('notes')}
                        >
                            {linkClicked === 'notes' && (
                                <FontAwesomeIcon
                                    icon={faCaretRight}
                                    className="nav-link"
                                />
                            )}
                            <FontAwesomeIcon icon={faNoteSticky} /> Notes
                        </NavLink>
                        <NavLink
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
                        </NavLink>
                        <NavLink
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
                            <FontAwesomeIcon icon={faBook} /> Notebooks
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
                            <FontAwesomeIcon icon={faTag} /> Tags
                        </NavLink>
                        <NavLink
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
                        </NavLink>
                    </nav>
                </>
            )}
        </div>
    )
}

export default Navigation
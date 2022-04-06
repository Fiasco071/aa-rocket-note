import './index.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NotebookMenuButton from './NotebookMenuButton';
import NotebookCreateMenu from './NotebookCreateMenu';

const NotebookSlider = () => {
    const history = useHistory();
    const user = useSelector(state => state.session.user)
    const notebooks = useSelector(state => state.notebooks.notebooks);

    return (
        <div className="notebook-slider-box">
            <div className="notebook-slider">
                {Object.values(notebooks).map((notebook) => (
                    <div className="book1" key={notebook?.id} >
                        <NotebookMenuButton notebookId={notebook?.id}   />
                        <div
                            className='notebook-info-box'>
                            <p onClick={() =>
                                history.push(`/notebooks/${notebook?.id}`)
                            }>{notebook?.name}</p>
                            <div>
                                <p>4 Notes</p>
                                <p>Last Updated</p>

                            </div>
                        </div>
                        <div className='divider'></div>
                        <div className='divider2'></div>
                    </div>
                ))}

                <div className="add-book">
                    <div className='notebook-info-box add-box'>
                        <NotebookCreateMenu />
                        <p>New</p>
                        <p>Notebook</p>
                    </div>
                    <div className='divider'></div>
                    <div className='divider2'></div>
                </div>
            </div>
        </div>
    );
}

export default NotebookSlider;
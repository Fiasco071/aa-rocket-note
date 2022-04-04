import './index.css';

const NotebookSlider = () => {
    return (
        <div className="notebook-slider-box">
            <div className="notebook-slider">
            <div className="book1">
                    <div className='notebook-info-box'>
                        <p>Notebook 1</p>
                        <div>
                            <p>4 Notes</p>
                            <p>Last Updated</p>
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div className='divider2'></div>
                </div>
                <div className="book1">
                    <div className='notebook-info-box'>
                        <p>Notebook 2</p>
                        <div>
                            <p>4 Notes</p>
                            <p>Last Updated</p>
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div className='divider2'></div>
                </div>
                <div className="book1">
                    <div className='notebook-info-box'>
                        <p>Notebook 3</p>
                        <div>
                            <p>4 Notes</p>
                            <p>Last Updated</p>
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div className='divider2'></div>
                </div>
            </div>
        </div>
    );
}

export default NotebookSlider;
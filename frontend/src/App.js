import './App.css';
import Navigation from "./components/Navigation"
import { Route, Switch} from 'react-router-dom';
import ContentBox from './components/ContentBox';
import Notes from './components/NotesNav';
import NoteDetail from './components/NoteDetail';
import NewNote from './components/NewNote'
import notes from './mockData/notes.json';

window.addEventListener('DOMContentLoaded', () => {
  let scrollbarset = document.getElementById('mainBox')
  scrollbarset.scrollTop = scrollbarset.scrollHeight;
});

function App() {
  

  return (
    
    <div className="App"  id="mainBox">
      <div className="nav-bar">
        <Navigation />
      </div>
      <Switch>
        <Route path="/" exact>
          <div className='main-content-box'>
            <div className='main-image-box' />
            <h1 className='greeting-message'>Good afternoon, USER</h1>
            <ContentBox />
          </div>
        </Route>
        <Route path="/notes" exact>
            <Notes notes={notes}/>
            <NewNote />
        </Route>
        <Route path="/notes/:noteId">
            <Notes notes={notes}/>
            <NoteDetail />
        </Route>
        <Route>
            <h1 style={{ color:"white", fontSize:"3em", position:"absolute", left:"700px", top:"300px", }}>Currently Under Construction</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

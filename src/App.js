import './App.css';
import Header from './components/Header';
import NotesList from './pages/NotesList';
import Note from './pages/Note';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Delete from './pages/Delete'
import Read from './pages/Read';

function App() {
  return (
    <div className="App">

      <Router>

        <Header />
        <Routes>
          <Route exact path="/" element = {<NotesList />}/>
          <Route path="/note/:id/" element = {<Note />} />
          <Route path="/read/:id/" element = {<Read />} />
          <Route path='/delete/:id/' element = {<Delete />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

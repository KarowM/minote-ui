import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Note from './Note';


function App() {
  return (
    <div>
    <div className='main-navbar main-title'>
      MiNote
    </div>
    <div className='notes-container'>
    <Note />
    </div>
    </div>
  );
}

export default App;

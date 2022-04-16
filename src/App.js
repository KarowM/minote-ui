import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Note from './Note';


function App() {
  return (
    <div>
    <div className='main-navbar main-title'>
      MiNote
    </div>
    <Note />
    </div>
  );
}

export default App;
